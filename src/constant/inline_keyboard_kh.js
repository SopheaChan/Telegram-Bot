
exports.user_gender_answer_button = {
    parse_mode: 'Markdown',
    reply_markup: {
        inline_keyboard: [
            [
                {text: 'ស្រី', callback_data: 'female'},
                {text: 'ប្រុស', callback_data: 'male'}
            ]
        ]
    }
}

exports.main_menu_button_option_kh = {
    parse_mode: 'Markdown',
    caption: '',
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Main Menu', callback_data: 'main_menu' },
        ],
      ],
    }
};

exports.main_menu_option_kh = {
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [
        [
            {text: 'Prize Challenge', callback_data: 'prize_challenge'},
            {text: 'Policy Information', callback_data: 'policy_info'},
        ],
        [
            {text: 'Insurance Products', callback_data: 'product'},
            {text: 'Purchase Insurance', callback_data: 'purchase'},
        ],
        [
            {text: 'Educational Resources', callback_data: 'education'},
            {text: 'Connect With Agent', callback_data: 'talk_to_agency'},
        ],
      ],
    }
};

exports.product_option_button_kh = {
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'LifeCancerCare', callback_data: 'product_life_cancer_care' },
          { text: 'FWD Protects Me', callback_data: 'product_protect_me' },
        ],
        [
          { text: 'FWD Short Savings', callback_data: 'product_short_saving' },
          { text: 'FWD Loan Protection', callback_data: 'product_loan_protection' },
          
        ],
        // [
        //   { text: 'FWD Full Loan Protection', callback_data: 'product_full_loan_protection' },
        //   { text: 'Critical Illness Add-on Plans', callback_data: 'product_critical_illness_add_on_plan' },
        // ],
        [
          { text: 'Main Menu', callback_data: 'main_menu' },
        ],
      ],
    }
};

exports.product_short_savings_option_kh = {
    caption: '',
    parse_mode: 'Markdown',
    reply_markup: {
        inline_keyboard: [
            [
              { text: 'FWD Short Savings 10/5', callback_data: 'product_short_saving_10_5' },
              { text: 'FWD Short Savings 15/10', callback_data: 'product_short_saving_15_10' },
            ],
            [
              { text: 'FWD Short Savings 20/10', callback_data: 'product_short_saving_20_10' },
            ],
            [
              {text: 'Insurance Products', callback_data: 'product'},
              { text: 'Main Menu', callback_data: 'main_menu' },
            ],
        ],
    }
};

exports.multiple_choice_answers_kh = {
  //qap => Question Answer Prize
  qap_question_start: {
      caption: '',
      parse_mode: 'Markdown',  
      reply_markup: {
        inline_keyboard: [
            [
                {text: `Let's Start`, callback_data: 'qap_question_start'},
                {text: 'Discard', callback_data: 'qap_question_discard'},
            ]
        ]
      }
  },
  qap_question_completed: {
      caption: '',
      parse_mode: 'Markdown',
      reply_markup: {
          inline_keyboard: [
              [
                
              ]
          ]
      }
  },
  qap_question_1: {
      caption: '',
      parse_mode: 'Markdown',
      reply_markup: {
          inline_keyboard: [
              [
                {text: 'Family protection', callback_data: 'question_1_answer_a'},
                {text: 'Income replacement', callback_data: 'question_1_answer_b'},
              ],
              [
                {text: 'Mortgage or debt coverage', callback_data: 'question_1_answer_c'},
                {text: 'Retirement planning', callback_data: 'question_1_answer_d'},
              ]
          ],
      }
  },
  qap_question_2: {
      caption: '',
      parse_mode: 'Markdown',
      reply_markup: {
          inline_keyboard: [
              [
                {text: 'Term life insurance', callback_data: 'question_2_answer_a'},
                {text: 'Whole life insurance', callback_data: 'question_2_answer_b'},
              ],
              [
                {text: 'Universal life insurance', callback_data: 'question_2_answer_c'},
                {text: 'Variable life insurance', callback_data: 'question_2_answer_d'},
              ]
          ],
      }
  },
  qap_question_3: {
      caption: '',
      parse_mode: 'Markdown',
      reply_markup: {
          inline_keyboard: [
              [
                {text: 'Very important', callback_data: 'question_3_answer_a'},
                {text: 'Somewhat important', callback_data: 'question_3_answer_b'},
              ],
              [
                {text: 'Not important', callback_data: 'question_3_answer_c'},
                {text: `I'm not sure`, callback_data: 'question_3_answer_d'},
              ]
          ],
      }
  },
  qap_question_4: {
      caption: '',
      parse_mode: 'Markdown',
      reply_markup: {
          inline_keyboard: [
              [
                {text: '10 years', callback_data: 'question_4_answer_a'},
                {text: '20 years', callback_data: 'question_4_answer_b'},
              ],
              [
                {text: '30 years', callback_data: 'question_4_answer_c'},
                {text: 'Lifetime coverage', callback_data: 'question_4_answer_d'},
              ]
          ],
      }
  },
  qap_question_5: {
      caption: '',
      parse_mode: 'Markdown',
      reply_markup: {
          inline_keyboard: [
              [
                {text: 'Very comfortable', callback_data: 'question_5_answer_a'},
                {text: 'Somewhat comfortable', callback_data: 'question_5_answer_b'},
              ],
              [
                {text: 'Not comfortable', callback_data: 'question_5_answer_c'},
                {text: `I'm not sure`, callback_data: 'question_5_answer_d'},
              ]
          ],
      }
  },
  qap_question_6: {
      caption: '',
      parse_mode: 'Markdown',
      reply_markup: {
          inline_keyboard: [
              [
                {text: 'Yes, definitely', callback_data: 'question_6_answer_a'},
                {text: 'Maybe, depending on the cost', callback_data: 'question_6_answer_b'},
              ],
              [
                {text: 'No, not interested', callback_data: 'question_6_answer_c'},
                {text: `I'm not sure what riders are`, callback_data: 'question_6_answer_d'},
              ]
          ],
      }
  },
  qap_question_7: {
      caption: '',
      parse_mode: 'Markdown',
      reply_markup: {
          inline_keyboard: [
              [
                {text: '1-3 times my annual income', callback_data: 'question_7_answer_a'},
                {text: '4-6 times my annual income', callback_data: 'question_7_answer_b'},
              ],
              [
                {text: '7-10 times my annual income', callback_data: 'question_7_answer_c'},
                {text: 'More than 10 times my annual income', callback_data: 'question_7_answer_d'},
              ]
          ],
      }
  },
  qap_question_8: {
      caption: '',
      parse_mode: 'Markdown',
      reply_markup: {
          inline_keyboard: [
              [
                {text: 'Reputation and financial stability', callback_data: 'question_8_answer_a'},
                {text: 'Low premium rates', callback_data: 'question_8_answer_b'},
              ],
              [
                {text: 'Customer service and support', callback_data: 'question_8_answer_c'},
                {text: 'Variety of policy options', callback_data: 'question_8_answer_d'},
              ]
          ],
      }
  },
  qap_question_9: {
      caption: '',
      parse_mode: 'Markdown',
      reply_markup: {
          inline_keyboard: [
              [
                {text: 'Annually', callback_data: 'question_9_answer_a'},
                {text: 'Every few years', callback_data: 'question_9_answer_b'},
              ],
              [
                {text: 'Rarely', callback_data: 'question_9_answer_c'},
                {text: `I haven't reviewed it yet`, callback_data: 'question_9_answer_d'},
              ]
          ],
      }
  },
  qap_question_10: {
      caption: '',
      parse_mode: 'Markdown',
      reply_markup: {
          inline_keyboard: [
              [
                {text: 'Very knowledgeable', callback_data: 'question_10_answer_a'},
                {text: 'Moderately knowledgeable', callback_data: 'question_10_answer_b'},
              ],
              [
                {text: 'Limited knowledge', callback_data: 'question_10_answer_c'},
                {text: 'No knowledge', callback_data: 'question_10_answer_d'},
              ]
          ],
      }
  },
};


exports.live_chat_agent_response_kh = {
  caption: '',
  parse_mode: 'Markdown',
  reply_markup: {
      inline_keyboard: [
          [
            {text: `Yes, I'm in`, callback_data: 'live_chat_agent_yes'},
            {text: `No, I'm busy`, callback_data: 'live_chat_agent_no'},
          ]
      ],
  }
};

// Inline keyboards for Agent Role
exports.agent_main_option_button_kh = {
  caption: '',
  parse_mode: 'Markdown',
  reply_markup: {
    inline_keyboard: [
      [
        {text: 'Customers List', callback_data: 'agent_get_customer_list'},
      ]
    ]
  }
}

exports.agent_customer_list_option_button_kh = {
  caption: '',
  parse_mode: 'Markdown',
  reply_markup: {
    inline_keyboard: [
      [
        {text: 'Connect With Customer', callback_data: 'agent_connect_with_customer'},
        {text: 'Message All Customers', callback_data: 'agent_send_message_to_all_customers'},
      ]
    ]
  }
}