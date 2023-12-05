const { forEach } = require("lodash");

exports.welcome_message_en = 'សូមស្វាគមន៍មកកាន់ *FWD Assistant Bot*!\nដើម្បីទទួលបានបទពិសោធន៍នៃការសន្ទនាដ៏គួរជាទីគាប់ចិត្តមួយ​ សូមធ្វើការជ្រើសរើសភាសាណាមួយដែលអ្នកពេញចិត្តនៅខាងក្រោមនេះ។\n\nWelcome to *FWD Assistant Bot*!\nTo have a better conversation experience, please choose your preferred language below:';
exports.user_name_questionaire_en = `Let's get started!\nKindly provide us your *name* for personalized assistant:`;
exports.user_gender_questionaire_en = `Let's customize your experience!\nKindly choose your *gender* below:`;
exports.user_contact_questionaire_en = 'Would you like to share your contact with us?';
// exports.main_menu_text_en = `
// 🌟 Welcome to LifeInsure Bot! 🌟
// \n\rStep into a new era of insurance with LifeInsure. Our mission is to redefine your insurance experience, making it not just a necessity, but a pathway to security and peace of mind.
// \n\rExplore our interactive quizzes, insightful tips, and personalized guidance on various life insurance options. We're here to simplify the process and help you make informed decisions.
// \n\rFeel free to ask us any questions or share your thoughts. Your journey to a secure future begins now!
// `;

exports.main_menu_text_en = `
🌟 Welcome to LifeInsure Bot! 🌟
\n\rStep into a new era of insurance with LifeInsure. Our mission is to redefine your insurance experience, making it not just a necessity, but a pathway to security and peace of mind.
\n\rExplore our interactive quizzes, insightful tips, and personalized guidance on various life insurance options. We're here to simplify the process and help you make informed decisions.
\n\rFeel free to ask us any questions or share your thoughts. Your journey to a secure future begins now!
`;

// Multiple-Choice Questions To Win Prize
//qap => question answer prize
exports.qap_question_intro_en = `Welcome to our life insurance engagement questionnaire! Your input will help us understand your life insurance preferences and needs. Please take a moment to provide your insights on various aspects of life insurance. Thank you for your participation!`;
exports.qap_question_end_en = `
🎉 *Congratulations*! 🎉 
\nYou're a winner! 
Claim your exclusive reward: an incredible *30%* discount on our *LifeCancerCare* product. 
Use promo code: *ABC001* 
\nDon't miss out! 
Click the link below to unlock your discount and secure your *LifeCancerCare* today.
https://shorturl.at/bmoO4
`;
exports.qap_question_1_en = `Q1/10: What is your primary reason for considering life insurance?`;
exports.qap_question_2_en = `Q2/10: Which life insurance type would you prefer for its simplicity and affordability?`;
exports.qap_question_3_en = `Q3/10: How important is it for you to have cash value accumulation within your life insurance policy?`;
exports.qap_question_4_en = `Q4/10: What is your preferred duration for a life insurance policy?`;
exports.qap_question_5_en = `Q5/10: How comfortable are you with taking a medical examination for a more comprehensive life insurance policy?`;
exports.qap_question_6_en = `Q6/10: Are you interested in additional riders for your life insurance policy, such as critical illness or disability coverage?`;
exports.qap_question_7_en = `Q7/10: How much coverage do you think your family would need in the event of your passing?`;
exports.qap_question_8_en = `Q8/10: Which factor do you consider most important when choosing a life insurance provider?`;
exports.qap_question_9_en = `Q9/10: How often do you review your life insurance policy to ensure it aligns with your current needs?`;
exports.qap_question_10_en = `Q10/10: What level of financial literacy do you currently have regarding life insurance products?`;

//Request agent to join the live chat
exports.live_chat_agent_req_en = `A user is waiting for our agent to join the conversation, are you available?`;
exports.live_chat_agent_accept_en = `Our agent accepted the invitation and will join the conversation with you soon...`;
exports.live_chat_agent_reject_en = `We are sorry, our agents are not available at the moment.`;

//Policy Information
exports.policy_information_input_policy_no_en = `Kindly provide your *policy number* to continue:`;
exports.policy_ifnormation_otp_sent_en = `We've just sent an *OTP* to your mobile. Kindly enter it for verification to ensure the security of your account:`;
exports.policy_information_caption_en = `To check the contract information and use other entertainment content, please download *Omne by FWD* by clicking https://onelink.to/svktyd. Thank you if you have already downloaded *Omne by FWD*.`;

//Agent Role
exports.agent_main_option_button_content_en = (agentName) => {
    return `
Welcome to Demo Bot, *${agentName}*.
What can we assist you today?
    `;
}

exports.agent_customers_info_list_en = async (listCustomers) => {
    return `
Below is the customers list:\n
${await customerListContent(listCustomers)}
    `
}

async function customerListContent(listCustomers) {
    let content = ``;
    for (var i = 0; i < listCustomers.length; i++) {
        content += `${i + 1}. Name: ${listCustomers[i].userName}, Chat Id: ${listCustomers[i].userId}\n`;
    }
    // for (const customer of listCustomers) {
    //     content += `Name: ${customer.userName}, Chat Id: ${customer.userId}\n`;
    // }
    return content;
}