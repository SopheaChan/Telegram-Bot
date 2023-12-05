const { v4:uuidv4 } = require("uuid");
const nodeHtmlToImage = require('node-html-to-image');
const fs = require('fs');
var policyInfoHtmlForm = require('../constant/policy_info_html_form');
var policyInfoHtml = require('../constant/policy_info_html');
var shortSavingsDef = require('../constant/short_savings_definition');
var fullLoanProtectionDef = require('../constant/full_loan_protection_definition');

exports.policy_info_image = async (req, res) => {
    const { payment_message_type, policy_no, premium, agent_name, agent_code, product, channel } = req;
    var file_name = uuidv4();
    var tempImageDir = `../fwd-telegram-bot/src/public/image/${file_name}.png`;

    await nodeHtmlToImage({
        output: tempImageDir,
        html: await policyInfoHtmlForm.dynamicHtmlData(payment_message_type, policy_no, premium, agent_name, agent_code, product, channel)
    })
    .then(() => {
            console.log('The image was created successfully!');
        }
    );

    // const imgBase64 = await new Buffer.from(fs.readFileSync(tempImageDir)).toString('base64');

    return file_name;
}

exports.policy_info_image_1 = async () => {
    var file_name = uuidv4();
    var tempImageDir = `../fwd-telegram-bot/src/public/image/${file_name}.png`;

    await nodeHtmlToImage({
        output: tempImageDir,
        html: await policyInfoHtml.policy_info()
    })
    .then(() => {
            console.log('The image was created successfully!');
        }
    );

    // const imgBase64 = await new Buffer.from(fs.readFileSync(tempImageDir)).toString('base64');

    return file_name;
}

exports.short_savings_definition = async (req, res) => {
    var file_name = uuidv4();
    var tempImageDir = `../fwd-telegram-bot/src/public/image/${file_name}.png`;

    await nodeHtmlToImage({
        output: tempImageDir,
        html: await shortSavingsDef.short_savings_definition_page()
    })
    .then(() => {
            console.log('The image was created successfully!');
        }
    );

    // const imgBase64 = await new Buffer.from(fs.readFileSync(tempImageDir)).toString('base64');

    return file_name;
}

exports.full_loan_protection_definition_page = async (req, res) => {
    var file_name = uuidv4();
    var tempImageDir = `../fwd-telegram-bot/src/public/image/${file_name}.png`;

    await nodeHtmlToImage({
        output: tempImageDir,
        html: await fullLoanProtectionDef.full_loan_protection_definition_page()
    })
    .then(() => {
            console.log('The image was created successfully!');
        }
    );

    // const imgBase64 = await new Buffer.from(fs.readFileSync(tempImageDir)).toString('base64');

    return file_name;
}
