
const TelegramBot = require('node-telegram-bot-api');
const content = require('../src/constant/content');
const inlineKeyboard = require('./constant/inline_keyboard');
const fs = require('fs');
var PolicyInfoHtmlFormService = require('./service/html_to_image');
const { includes } = require('lodash');
const PolicyValidationHelper = require('./util/policy_validation_helper');

const bot = new TelegramBot('6552365283:AAFbXA9mPkBgim0yfmh_IyevL8nD5ht35c4', { polling: true });

var selectedLang = [];
var currentQuestion = [];
var requestTalkToAgency = [];
var agentList = [
  // {agentId: '535875937', agentName: 'Chan Sophea', agentContact: {mobile: '0963777300', email: 'sophea.chan@fwd.com'}},
  {agentId: '565782110', agentName: 'Keo Panha', agentContact: {mobile: '0963777300', email: 'panha.keo@fwd.com'}},
];
var userInfoList = [
  {userId: '535875937', userName: 'Chan Sophea', userGender: 'Male', userSalutation: 'Mr.', selectedLang: 'lang_en'},
  // {userId: '565782110', userName: 'Keo Panha', userGender: 'Male', userSalutation: 'Mr.', selectedLang: 'lang_en'},
];

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  let userInput = msg.text.toLocaleLowerCase();

  // {userId: userid, agentId: agentId}
  console.log("Request Chat To Agent: " + JSON.stringify(requestTalkToAgency));
  console.log("Agent And User Mapping: " + JSON.stringify(getTalkToAgencyReq(userId)));
  let isTalkingWithAgentOrUser = getTalkToAgencyReq(userId) != null;
  let agentInfo = getAgentInfoByAgentId(userId);
  console.log("Agent Info___________: " + JSON.stringify(agentInfo));
  console.log("Is Talking With Agent: " + JSON.stringify(agentInfo != null && agentInfo.agentId != userId));
  if(agentInfo == null /*|| (agentInfo != null && agentInfo.agentId != userId)*/) {
      if(!isTalkingWithAgentOrUser){
        switch(userInput) {
          case 'start': 
            console.log('Existed user information: ' + JSON.stringify(getExsitedUserInformation(userId)));
            if(getExsitedUserInformation(userId) != null) {
              saveCurrentQuestion(userId, 'main_menu');
              bot.sendMessage(chatId, content.content[getUserSelectedLang(userId).selectedLang].main_menu_text, inlineKeyboard.inline_keyboard[getUserSelectedLang(userId).selectedLang].mainMenu);
            } else {
              saveCurrentQuestion(userId, 'user_language_selection');
              bot.sendMessage(chatId, content.content.lang_en.welcome_message, inlineKeyboard.inline_keyboard.lang_en.languageSelection);
            }
            break; 
          case 'hi':
              console.log('Chat ID is: ' + chatId);
              console.log('User ID is: ' + userId);    
          default:
            break;       
        }
        
        if(getCurrentQuestionByUserId(userId) != null && getCurrentQuestionByUserId(userId).question == 'user_name_quesitonaire' && validateName(msg.text)) {
          saveCurrentQuestion(userId, 'user_gender_quesitonaire');
          saveUserData(userId, 'userName', msg.text);
          bot.sendMessage(chatId, content.content[getUserSelectedLang(userId).selectedLang].user_gender_questionaire, inlineKeyboard.inline_keyboard[getUserSelectedLang(userId).selectedLang].userGenderAnswer);
        }
    
        console.log('Current Question: ' + JSON.stringify(getCurrentQuestionByUserId(userId)));
        if(PolicyValidationHelper.isValidCambodianPhoneNumber(PolicyValidationHelper.extractPhoneNumber(userInput)) && getCurrentQuestionByUserId(userId).question === 'policy_info') {
          saveCurrentQuestion(userId, 'otp_sent');
          bot.sendMessage(chatId, content.content[getUserSelectedLang(userId).selectedLang].policy_ifnormation_otp_sent, {parse_mode: 'Markdown'});
        }
    
        if(PolicyValidationHelper.isValidOTP(userInput) && getCurrentQuestionByUserId(userId).question == 'otp_sent') {
          var isVerifiedOtp = true;
          if(isVerifiedOtp) {
              bot.sendChatAction(chatId, 'typing');
              // var fileName = await PolicyInfoHtmlFormService.policy_info_image({payment_message_type: "BI", policy_no: "0963777300A", premium: 12, agent_name: 'Chan Sophea', agent_code: 'B0038', product: 'Life Cancer Care', channel: 'ECOM'});
              var fileName = await PolicyInfoHtmlFormService.policy_info_image_1();
              var tempImageDir = `../fwd-telegram-bot/src/public/image/${fileName}.png`;
              const image = fs.readFileSync(tempImageDir);
              bot.sendPhoto(chatId, image, {
                  reply_markup: {
                      inline_keyboard: [
                        [
                          { text: 'Main Menu', callback_data: 'main_menu' },
                        ],
                      ],
                  },
                  caption: content.content[getUserSelectedLang(userId).selectedLang].policy_information_caption,
                  parse_mode: 'Markdown'
              });
              //Remove Temporary Image
              fs.unlink(tempImageDir, function(error) {
                  if(error) console.log(error);
              });
          }
        }
      } else {
        let destChatId = getTalkToAgencyReq(userId).agentId;
        bot.sendMessage(destChatId, msg.text, {parse_mode: 'Markdown'});
        // if(userInput == '/quitChat') {
        //   let mappedUserId = requestTalkToAgency.find(obj => obj.agentId == chatId);
        //   unmapUserWithAgent(mappedUserId.userId, chatId);
        // } else {
        //   let destChatId = getTalkToAgencyReq(userId).agentId;
        //   bot.sendMessage(destChatId, msg.text, {parse_mode: 'Markdown'});
        // }
      }
  } else {
    if(!isTalkingWithAgentOrUser){
      switch(userInput) {
        case "start":
          saveCurrentQuestion(userId, 'agent_option_menu');
          bot.sendMessage(chatId, content.agent_content('Chan Sophea').lang_en.agent_main_option_button_content, inlineKeyboard.inline_keyboard.lang_en.agent_main_option_button);
          break;
      }
  
      console.log("Current Question: " + JSON.stringify(getCurrentQuestionByUserId(chatId)));
      console.log("Current Question List: " + JSON.stringify(currentQuestion));
      if(chatIdPatternValidation(msg.text) && getCurrentQuestionByUserId(chatId).question == 'agent_connect_with_customer') {
        // saveCurrentQuestion(chatId, "search_user_by_user_id");
        var userInfo = getExsitedUserInformation(msg.text);
        if (userInfo != null) {
          console.log("Found user info: " + JSON.stringify(userInfo));
          mapUserWithAgent(chatId, userInfo.userId);
          mapUserWithAgent(userInfo.userId, chatId);
        } else {
          console.log(`User ID ${msg.text} cannot be found.`);
          bot.sendMessage(chatId, `The user id *${msg.text}* cannot be found.`, {parse_mode: 'Markdown'});
        }
      } else if (!chatIdPatternValidation(msg.text) && getCurrentQuestionByUserId(chatId).question == 'agent_connect_with_customer') {
        console.log('Invalid User Id');
        saveCurrentQuestion(chatId, 'agent_connect_with_customer');
        bot.sendMessage(chatId, `The user id *${msg.text}* is invalid.`, {parse_mode: 'Markdown'});
      } else if(getCurrentQuestionByUserId(chatId).question == 'agent_send_message_to_all_customers') {
        console.log('Agent is messaging to all customers.');
        saveCurrentQuestion(chatId, 'agent_option_menu');
        userInfoList.forEach((userInfo) => {
          bot.sendMessage(userInfo.userId, msg.text, {parse_mode: 'Markdown'});
        });
        bot.sendMessage(chatId, content.agent_content('Chan Sophea').lang_en.agent_main_option_button_content, inlineKeyboard.inline_keyboard.lang_en.agent_main_option_button);
      }
    } else {
      if(msg.text == '/quitChat') {
        let mappedUserId = requestTalkToAgency.find(obj => obj.agentId == chatId);
        unmapUserWithAgent(mappedUserId.userId, chatId);
      } else {
        let destChatId = getTalkToAgencyReq(userId).agentId;
        bot.sendMessage(destChatId, msg.text, {parse_mode: 'Markdown'});
      }
    }
  }
}
);

bot.on('callback_query', async (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;
    const userId = callbackQuery.from.id;
    const data = callbackQuery.data.toLocaleLowerCase();
  
    switch(data) {
        case 'lang_kh':
        case 'lang_en':  
          selectedLang.push({userId: userId, selectedLang: data});
          saveCurrentQuestion(userId, 'user_name_quesitonaire');
          saveUserData(userId, 'selectedLang', data);
          console.log('User selected language: ' + JSON.stringify(getUserSelectedLang(userId)));
          bot.sendMessage(chatId, content.content[getUserSelectedLang(userId).selectedLang].user_name_questionaire, {parse_mode: 'Markdown'})
          break;
        case 'male':
        case 'female':
          saveCurrentQuestion(userId, 'main_menu');
          saveUserData(userId, 'userGender', callbackQuery.data);
          console.log('User information after added: ' + JSON.stringify(userInfoList));
          bot.sendMessage(chatId, content.content[getUserSelectedLang(userId).selectedLang].main_menu_text, inlineKeyboard.inline_keyboard[getUserSelectedLang(userId).selectedLang].mainMenu);
          break;
        case 'product':
          bot.sendChatAction(chatId, 'typing');
          var tempImageDir = `../fwd-telegram-bot/src/public/image/family_and_friend.jpg`;
          const image = fs.readFileSync(tempImageDir);
          saveCurrentQuestion(userId, 'product');
          bot.sendPhoto(chatId, image, inlineKeyboard.inline_keyboard[getUserSelectedLang(userId).selectedLang].productOption);
          break;
        case 'product_short_saving':
          bot.sendChatAction(chatId, 'typing');
          var fileName = await PolicyInfoHtmlFormService.short_savings_definition();
          var tempImageDir = `../fwd-telegram-bot/src/public/image/${fileName}.png`;
          const shortSavingsDef = fs.readFileSync(tempImageDir);
          saveCurrentQuestion(userId, 'product_short_saving');
          bot.sendPhoto(chatId, shortSavingsDef, inlineKeyboard.inline_keyboard[getUserSelectedLang(userId).selectedLang].shortSavingsProduct);          
          fs.unlink(tempImageDir, function(error) {
              if(error) console.log(error);
          });
          break;
        case 'product_loan_protection':
          bot.sendChatAction(chatId, 'typing');
          var fileName = await PolicyInfoHtmlFormService.full_loan_protection_definition_page();
          var tempImageDir = `../fwd-telegram-bot/src/public/image/${fileName}.png`;
          const fullLoanDef = fs.readFileSync(tempImageDir);
          saveCurrentQuestion(userId, 'product_loan_protection');
          bot.sendPhoto(chatId, fullLoanDef, {parse_mode: 'Markdown'});          
          fs.unlink(tempImageDir, function(error) {
              if(error) console.log(error);
          });
          break;
        case 'main_menu':  
          saveCurrentQuestion(userId, 'main_menu');
          bot.sendMessage(chatId, content.content[getUserSelectedLang(userId).selectedLang].main_menu_text, inlineKeyboard.inline_keyboard[getUserSelectedLang(userId).selectedLang].mainMenu);
          break;

        //Quiz Section
        case 'prize_challenge':
            saveCurrentQuestion(userId, 'prize_challenge');
            bot.sendMessage(chatId, content.content[getUserSelectedLang(userId).selectedLang].qap_question_intro, inlineKeyboard.inline_keyboard[getUserSelectedLang(userId).selectedLang].qap_question_start);
            break;
        case 'qap_question_discard':
          //Question discard
            saveCurrentQuestion(userId, 'qap_question_discard');
            bot.sendMessage(chatId, content.content[getUserSelectedLang(userId).selectedLang].main_menu_text, inlineKeyboard.inline_keyboard[getUserSelectedLang(userId).selectedLang].mainMenu);
            break;   
        case 'qap_question_start':
            saveCurrentQuestion(userId, 'qap_question_start');
            bot.sendMessage(chatId, content.content[getUserSelectedLang(userId).selectedLang].qap_question_1, inlineKeyboard.inline_keyboard[getUserSelectedLang(userId).selectedLang].qap_question_1);
            break;  
        case 'question_1_answer_a':            
        case 'question_1_answer_b':            
        case 'question_1_answer_c':            
        case 'question_1_answer_d':
            saveCurrentQuestion(userId, 'question_1_answer');
            bot.sendMessage(chatId, content.content[getUserSelectedLang(userId).selectedLang].qap_question_2, inlineKeyboard.inline_keyboard[getUserSelectedLang(userId).selectedLang].qap_question_2);
            break;  
        case 'question_2_answer_a':            
        case 'question_2_answer_b':            
        case 'question_2_answer_c':            
        case 'question_2_answer_d':
            saveCurrentQuestion(userId, 'question_2_answer');
            bot.sendMessage(chatId, content.content[getUserSelectedLang(userId).selectedLang].qap_question_3, inlineKeyboard.inline_keyboard[getUserSelectedLang(userId).selectedLang].qap_question_3);
            break;  
        case 'question_3_answer_a':            
        case 'question_3_answer_b':            
        case 'question_3_answer_c':            
        case 'question_3_answer_d':
            saveCurrentQuestion(userId, 'question_3_answer');
            bot.sendMessage(chatId, content.content[getUserSelectedLang(userId).selectedLang].qap_question_4, inlineKeyboard.inline_keyboard[getUserSelectedLang(userId).selectedLang].qap_question_4);
            break;          
        case 'question_4_answer_a':            
        case 'question_4_answer_b':            
        case 'question_4_answer_c':            
        case 'question_4_answer_d':
            saveCurrentQuestion(userId, 'question_4_answer');
            bot.sendMessage(chatId, content.content[getUserSelectedLang(userId).selectedLang].qap_question_5, inlineKeyboard.inline_keyboard[getUserSelectedLang(userId).selectedLang].qap_question_5);
            break;   
        case 'question_5_answer_a':            
        case 'question_5_answer_b':            
        case 'question_5_answer_c':            
        case 'question_5_answer_d':
            saveCurrentQuestion(userId, 'question_5_answer');
            bot.sendMessage(chatId, content.content[getUserSelectedLang(userId).selectedLang].qap_question_6, inlineKeyboard.inline_keyboard[getUserSelectedLang(userId).selectedLang].qap_question_6);
            break;
        case 'question_6_answer_a':            
        case 'question_6_answer_b':            
        case 'question_6_answer_c':            
        case 'question_6_answer_d':
            saveCurrentQuestion(userId, 'question_6_answer');
            bot.sendMessage(chatId, content.content[getUserSelectedLang(userId).selectedLang].qap_question_7, inlineKeyboard.inline_keyboard[getUserSelectedLang(userId).selectedLang].qap_question_7);
            break;
        case 'question_7_answer_a':            
        case 'question_7_answer_b':            
        case 'question_7_answer_c':            
        case 'question_7_answer_d':
            saveCurrentQuestion(userId, 'question_7_answer');
            bot.sendMessage(chatId, content.content[getUserSelectedLang(userId).selectedLang].qap_question_8, inlineKeyboard.inline_keyboard[getUserSelectedLang(userId).selectedLang].qap_question_8);
            break;
        case 'question_8_answer_a':            
        case 'question_8_answer_b':            
        case 'question_8_answer_c':            
        case 'question_8_answer_d':
            saveCurrentQuestion(userId, 'question_8_answer');
            bot.sendMessage(chatId, content.content[getUserSelectedLang(userId).selectedLang].qap_question_9, inlineKeyboard.inline_keyboard[getUserSelectedLang(userId).selectedLang].qap_question_9);
            break;
        case 'question_9_answer_a':            
        case 'question_9_answer_b':            
        case 'question_9_answer_c':            
        case 'question_9_answer_d':
            saveCurrentQuestion(userId, 'question_9_answer');
            bot.sendMessage(chatId, content.content[getUserSelectedLang(userId).selectedLang].qap_question_10, inlineKeyboard.inline_keyboard[getUserSelectedLang(userId).selectedLang].qap_question_10);
            break;
        case 'question_10_answer_a':            
        case 'question_10_answer_b':            
        case 'question_10_answer_c':            
        case 'question_10_answer_d':
            saveCurrentQuestion(userId, 'question_10_answer');
            bot.sendMessage(chatId, content.content[getUserSelectedLang(userId).selectedLang].qap_question_end, inlineKeyboard.inline_keyboard[getUserSelectedLang(userId).selectedLang].backToMainMenu);
            break;

        // ............................    
        // Test Human Live Chat Support    
        case 'talk_to_agency':
            saveCurrentQuestion(userId, 'talk_to_agency');
            mapUserWithAgent(userId, '');
            bot.sendMessage(userId, 'Waiting for agent to join the chat...');
            agentList.forEach(agentObj => {
              bot.sendMessage(agentObj.agentId, `User ${userId} requested to talk to our agent. \nWould you accept the request?`, {
                parse_mode: 'Markdown',
                reply_markup: {
                  inline_keyboard: [
                    [
                      {text: `Yes, I'm in.`, callback_data: `talk_to_agent_accepted_${userId}`},
                      {text: `No, I cannot joint the chat.`, callback_data: `talk_to_agent_reject_${userId}`}
                    ]
                  ]
                }
              })
            });
            // bot.sendMessage(agentId, content.content[getUserSelectedLang(userId).selectedLang].talk_to_agency, inlineKeyboard.inline_keyboard[getUserSelectedLang(userId).selectedLang].talk_to_agent);
            // bot.sendMessage(chatId, content.content[getUserSelectedLang(userId).selectedLang].talk_to_agency);
            break;
        case 'policy_info':
            saveCurrentQuestion(userId, 'policy_info');
            bot.sendMessage(chatId, content.content[getUserSelectedLang(userId).selectedLang].policy_information_input_policy_no, {parse_mode: 'Markdown'});
            break;
        case 'agent_connect_with_customer':
            saveCurrentQuestion(chatId, 'agent_connect_with_customer');
            bot.sendMessage(chatId, "Please input the user's chat id to connect.");
            break;
        case 'agent_send_message_to_all_customers':
            saveCurrentQuestion(chatId, 'agent_send_message_to_all_customers');
            bot.sendMessage(chatId, `Your message will be sent to all customers!`);
            break;
        case 'agent_get_customer_list':
            saveCurrentQuestion(chatId, 'agent_get_customer_list');
            bot.sendMessage(chatId, await content.agent_content(userInfoList).lang_en.agent_customer_list_content, inlineKeyboard.inline_keyboard.lang_en.agent_customer_list_option_button);
            break;        
        default:
            break;     
    }

    console.log('Data Response From Agent: ' + JSON.stringify(data));
    if(data.includes('talk_to_agent_accepted')) {
       let reqUserId = data.split('_')[data.split('_').length -1]; 
       console.log('Request User ID: ' + reqUserId);
       agentList.forEach(agentObj => {
          console.log("Agent: " + JSON.stringify(agentObj));
          console.log("Agent ID Equal To USER ID: " + JSON.stringify(agentObj.agentId == userId));
          console.log("User ID: " + JSON.stringify(userId.toString()));
          console.log("Agent ID: " + JSON.stringify(agentObj.agentId));
          if(agentObj.agentId == userId) {
            saveCurrentQuestion('talk_to_agent_accepted');
            mapUserWithAgent(reqUserId, userId.toString());
            mapUserWithAgent(userId.toString(), reqUserId);
            console.log("Request Talk To Agent After Added: " + JSON.stringify(requestTalkToAgency));
            bot.sendMessage(reqUserId, `Agent ${getAgentInfoByAgentId(userId).agentName} accepted the request to join the chat...`, {
              parse_mode: 'Markdown'
            });
          }
       })
    }

    if(data.includes('talk_to_agent_reject')) {

    }

    console.log('Current Question: ' + JSON.stringify(getCurrentQuestionByUserId(userId)));

});

function validateName(name) {
  const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s']+$/;
  return nameRegex.test(name.trim());
}

function getCurrentQuestionByUserId(userIdToFind) {
  return currentQuestion.find(question => question.userId === userIdToFind);
}

function getUserSelectedLang(userIdToFind) {
  if(getExsitedUserInformation(userIdToFind) != null) {
    return getExsitedUserInformation(userIdToFind);
  } else {
    return selectedLang.find(language => language.userId == userIdToFind) != null ? selectedLang.find(language => language.userId == userIdToFind) : {userId: userIdToFind, selectedLang: 'lang_en'};
  }
}

function getTalkToAgencyReq(userIdToFind) {
  return requestTalkToAgency.find(talkToAgency => talkToAgency.userId == userIdToFind);
}

function saveCurrentQuestion(userId, quesiton) {
  const index = currentQuestion.findIndex((obj) => obj.userId == userId);
  if (index !== -1) {
    currentQuestion.splice(index, 1);
  }
  currentQuestion.push({userId: userId, question: quesiton});
}

function mapUserWithAgent(userid, agentId) {
  const index = requestTalkToAgency.findIndex((obj) => obj.userId == userid);
  console.log('Index: ' + index);
  if (index !== -1) {
    requestTalkToAgency.splice(index, 1);
  }
  requestTalkToAgency.push({userId: userid, agentId: agentId});
}

function unmapUserWithAgent(userId, agentId) {
  const userIndex = requestTalkToAgency.findIndex((obj) => obj.userId == userId);
  const agentIndex = requestTalkToAgency.findIndex((obj) => obj.userId == agentId);
  if(userIndex != -1) {
    requestTalkToAgency.splice(userIndex, 1);
  }

  if(agentIndex != -1) {
    requestTalkToAgency.splice(agentIndex, 1);
  }
}

function getAgentInfoByAgentId(agentId) {
  return agentList.find(agentInfo => agentInfo.agentId == agentId);
}

function getExsitedUserInformation(userId) {
  return userInfoList.find(user => user.userId == userId);
}

function saveUserData(userId, fieldToAdd, valueToAdd) {
  // userInfoList.find(user => user.userId == userId) != null ? userInfoList.find(user => user.userId == userId)[fieldToAdd] = valueToAdd : userInfoList.push({userId: userId, [fieldToAdd]:valueToAdd});
  if(userInfoList.find(user => user.userId == userId) != null) {
    console.log('User existed: true');
    userInfoList.find(user => user.userId == userId)[fieldToAdd] = valueToAdd;
  } else {
    console.log('User existed: false');
    // userInfoList.push({userId: userId, [fieldToAdd]:valueToAdd});
    userInfoList.push({userId: userId, selectedLang: valueToAdd});
  }
}

function chatIdPatternValidation(chatId) {
  const pattern = /^[0-9]+$/;
  var validChatId = false;

  if (pattern.test(chatId)) {
    validChatId = true;
  } 
  return validChatId;
}