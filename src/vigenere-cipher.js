class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }
  encrypt(message, key) {
    let result = '';
    message = message.toUpperCase();
    key = key.repeat(Math.ceil(message.length / key.length)).toUpperCase();
    for (let i = 0; i < message.length; i++) {
      let messageCode = message.charCodeAt(i);
      let keyCode = key.charCodeAt(i);
      if (messageCode >= 65 && messageCode <= 90) {
        let resultCode = keyCode + messageCode - 65;
        if (resultCode > 90) {
          resultCode -= 26;
        }
        result += String.fromCharCode(resultCode);
      } else {
        result += message[i];
        key = key.slice(0, i) + message[i] + key.slice(i);
      }
    }
    return this.type == false ? result.split('').reverse().join('') : result;
  }    
  decrypt(encryptedMessage, key) {
    let result = '';
    key = key.repeat(Math.ceil(encryptedMessage.length / key.length)).toUpperCase();
    for (let i = 0; i < encryptedMessage.length; i++) {
      let encryptedMessageCode = encryptedMessage.charCodeAt(i);
      let keyCode = key.charCodeAt(i);
      if (encryptedMessageCode >= 65 && encryptedMessageCode <= 90) {
        let resultCode = encryptedMessageCode - keyCode + 65;
        if (resultCode < 65) {
          resultCode += 26;
        }
        result += String.fromCharCode(resultCode);
      } else {
        result += encryptedMessage[i];
        key = key.slice(0, i) + encryptedMessage[i] + key.slice(i);
      }
    }
    return this.type == false ? result.split('').reverse().join('') : result;
  }
};

module.exports = VigenereCipheringMachine;
