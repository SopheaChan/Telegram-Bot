

const INITIAL_PREMIUM = 'INITIAL_PREMIUM';

exports.dynamicHtmlData = async (payment_message_type, policyNo, premium, agentName, agentCode, product, channel) => {
    let decPremium = premium.toFixed(2);
    return `<!DOCTYPE html>
    <html>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
            <style>
                #message-header {
                    background-color: rgb(232, 119, 34);
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    ` + getMessagePadding(payment_message_type) + `
                }
    
                #header-content, #footer-content {
                    display: table;
                    margin: 0 auto;
                }
    
                #message-footer {
                    background-color: rgb(232, 119, 34);
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    ` + getMessagePadding(payment_message_type) + `
                }
    
                #content-container {
                    width: 100%;
                    height: fit-content;
                }
    
                table {
                    margin-bottom: 0px;
                    width: 100%;
                }
    
                th, td {
                    border-top: 1px solid rgb(47, 44, 44);;
                    border-left: 1px solid rgb(47, 44, 44);;
                    border-right: 1px solid rgb(47, 44, 44);;
                    padding-left: 4px;
                    ` + getMessagePadding(payment_message_type) + `
                }
    
                td {
                    border-bottom: 1px solid rgb(47, 44, 44);
                }
            </style>
        </head>
        <body>
            ` + getMessageHeaderContent(payment_message_type) + `
            <div id="content-container" class="table-responsive">
                <table>
                    <thead id="table-head">
                        <th scope="col">Policy Number</th>
                        <th scope="col">Premium Amount</th>
                        ` + isAgentNameTitleValid(agentName) + `
                        ` + isAgentCodeTitleValid(agentCode) + `
                        ` + isProductTitleValid(product) + `
                        ` + isChannelTitleValid(channel) + `
                    </thead>
                    <tbody id="table-body">
                        <tr>
                            <td>${policyNo}</td>
                            <td>${decPremium}</td>
                            ` + isAgentNameDataValid(agentName) + `
                            ` + isAgentCodeDataValid(agentCode) + `
                            ` + isProductDataValid(product) + `
                            ` + isChannelDataValid(channel) + `
                        </tr>
                    </tbody>
                </table>
            </div>
            ` + isFooterValid(payment_message_type) + `
        </body>
    </html>`;
}

function isAgentNameTitleValid(agentName) {
    return agentName != null && agentName != undefined ? `<th scope="col">Agent Name</th>` : '';
}

function isAgentNameDataValid(agentName) {
    return agentName != null && agentName != undefined ? `<td>${agentName}</td>` : '';
}

function isAgentCodeTitleValid(agentCode) {
    return agentCode != null && agentCode != undefined ? `<th scope="col">Agent Code</th>` : '';
}

function isAgentCodeDataValid(agentCode) {
    return agentCode != null && agentCode != undefined ? `<td>${agentCode}</td>` : '';
}

function isProductTitleValid(product) {
    return product != null && product != undefined ? `<th scope="col">Product</th>` : '';
}

function isProductDataValid(product) {
    return product != null && product != undefined ? `<td>${product}</td>` : '';
}

function isChannelTitleValid(channel) {
    return channel != null && channel != undefined ? `<th scope="col">Channel</th>` : '';
}

function isChannelDataValid(channel) {
    return channel != null && channel != undefined ? `<td>${channel}</td>` : '';
}

function isFooterValid(payment_message_type) {
    return payment_message_type != null && payment_message_type != undefined && payment_message_type === INITIAL_PREMIUM 
    ? `<div id="message-footer"><p id="footer-content"><b>Please issue the policy, thanks.</b></p></div>` : '';
}

function getMessageHeaderContent(payment_message_type) {
    return payment_message_type != null && payment_message_type != undefined && payment_message_type === INITIAL_PREMIUM
    ? `<div id="message-header"><p id="header-content"><b>Hi team, we have received an initial premium payment</b></p></div>`
    : `<div id="message-header"><p id="header-content"><b>We have received a renewal payment</b></p></div>`
}

function getMessagePadding(payment_message_type) {
    return payment_message_type != null && payment_message_type != undefined && payment_message_type === INITIAL_PREMIUM
    ? ` padding-top: 11px; padding-bottom: 11px; ` : ` padding-top: 20px; padding-bottom: 20px; `;
}