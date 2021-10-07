const CryptoJS = require('crypto-js');
const configSecurity = {
  mode: CryptoJS.mode.ECB,
  padding: CryptoJS.pad.Pkcs7
};
const keyPromise = CryptoJS.enc.Utf8.parse("@syreiasdp");

module.exports = {
  AESDecrypt: (data) => {
    data = CryptoJS.enc.Base64.parse(data);
    const decrypt = CryptoJS.AES.decrypt(
      {
        ciphertext: data,
        salt: ''
      },
      keyPromise,
      configSecurity
    );
    return JSON.parse(decrypt.toString(CryptoJS.enc.Utf8));
  },
  AESEncrypt: (data) => {
    const message = JSON.stringify(data);
    return CryptoJS.AES.encrypt(message, keyPromise, configSecurity).toString();
  },
};