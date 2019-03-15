import Crypto from "crypto-js"
export default {
  encode(data,psd){
    const codeType=Crypto.AES.encrypt(data,psd).toString();
    return codeType
  },
  decode(key,psd){
    const bytes=Crypto.AES.decrypt(key,psd);
    const original=bytes.toString(Crypto.enc.Utf8);
    return original;
  }
}
