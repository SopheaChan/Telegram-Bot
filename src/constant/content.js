const contentKH = require('../constant/content_kh');
const contentEN = require('../constant/content_en');

exports.content = {
    lang_kh: {
        welcome_message: contentEN.welcome_message_en,
        user_name_questionaire: contentKH.user_name_questionaire_kh,
        user_gender_questionaire: contentKH.user_gender_questionaire_kh,
        user_contact_questionaire: contentKH.user_contact_questionaire_kh,
        main_menu_text: contentKH.main_menu_text_kh,
        qap_question_intro: contentKH.qap_question_intro_kh,
        qap_question_end: contentKH.qap_question_end_kh,
        qap_question_1: contentKH.qap_question_1_kh,
        qap_question_2: contentKH.qap_question_2_kh,
        qap_question_3: contentKH.qap_question_3_kh,
        qap_question_4: contentKH.qap_question_4_kh,
        qap_question_5: contentKH.qap_question_5_kh,
        qap_question_6: contentKH.qap_question_6_kh,
        qap_question_7: contentKH.qap_question_7_kh,
        qap_question_8: contentKH.qap_question_8_kh,
        qap_question_9: contentKH.qap_question_9_kh,
        qap_question_10: contentKH.qap_question_10_kh,
        talk_to_agency: contentKH.live_chat_agent_req_kh,
        talk_to_agency_accepted: contentKH.live_chat_agent_accept_kh,
        talk_to_agency_rejected: contentKH.live_chat_agent_reject_kh,
        policy_information_input_policy_no: contentKH.policy_information_input_policy_no_kh,
        policy_ifnormation_otp_sent: contentKH.policy_ifnormation_otp_sent_kh,
        policy_information_caption: contentKH.policy_information_caption_kh,

    },
    lang_en: {
        welcome_message: contentEN.welcome_message_en,
        user_name_questionaire: contentEN.user_name_questionaire_en,
        user_gender_questionaire: contentEN.user_gender_questionaire_en,
        user_contact_questionaire: contentEN.user_contact_questionaire_en,
        main_menu_text: contentEN.main_menu_text_en,
        qap_question_intro: contentEN.qap_question_intro_en,
        qap_question_end: contentEN.qap_question_end_en,
        qap_question_1: contentEN.qap_question_1_en,
        qap_question_2: contentEN.qap_question_2_en,
        qap_question_3: contentEN.qap_question_3_en,
        qap_question_4: contentEN.qap_question_4_en,
        qap_question_5: contentEN.qap_question_5_en,
        qap_question_6: contentEN.qap_question_6_en,
        qap_question_7: contentEN.qap_question_7_en,
        qap_question_8: contentEN.qap_question_8_en,
        qap_question_9: contentEN.qap_question_9_en,
        qap_question_10: contentEN.qap_question_10_en,
        talk_to_agency: contentEN.live_chat_agent_req_en,
        talk_to_agency_accepted: contentEN.live_chat_agent_accept_en,
        talk_to_agency_rejected: contentEN.live_chat_agent_reject_en,
        policy_information_input_policy_no: contentEN.policy_information_input_policy_no_en,
        policy_ifnormation_otp_sent: contentEN.policy_ifnormation_otp_sent_en,
        policy_information_caption: contentEN.policy_information_caption_en,
    }
}

exports.agent_content = (params) => {
    return {
        lang_kh: {
            agent_main_option_button_content: contentKH.agent_main_option_button_content_kh(params),
            agent_customer_list_content: contentKH.agent_customers_info_list_kh(params),
        },
        lang_en: {
            agent_main_option_button_content: contentEN.agent_main_option_button_content_en(params),
            agent_customer_list_content: contentEN.agent_customers_info_list_en(params),
        }
    }
}