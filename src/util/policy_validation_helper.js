
exports.isValidCambodianPhoneNumber =  (phoneNumber) => {
    // Regular expression for Cambodian phone numbers
    const regex = /^(?:\+855|0)[1-9]\d{7,8}$/;
  
    const pattern = new RegExp(regex);
    const isMatch = pattern.test(phoneNumber);
  
    return isMatch;
}

exports.extractPhoneNumber = (input) => {
    // Regular expression to match a phone number
    const regex = /([0-9]+)/;

    const pattern = new RegExp(regex);
    const match = pattern.exec(input);

    if (match) {
        // Extract the first match, which is the phone number
        return match[1];
    } else {
        // No phone number found in the input
        return null;
    }
} 

exports.isValidOTP = (input) => {
    // Regular expression for a 6-digit number
    const regex = /^[0-9]{6}$/;

    const pattern = new RegExp(regex);
    const isMatch = pattern.test(input);

    return isMatch;
}