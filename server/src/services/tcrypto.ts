
import env from '@/config';
import Crypto from 'crypto-js';

export default {
  cipher(value : number) : string {
    return Crypto.AES.encrypt(value.toString(), env.CRYPTO_KEY).toString();
  },

  decipher(value : string) : number {
    return parseInt(Crypto.AES.decrypt(value, env.CRYPTO_KEY).toString(Crypto.enc.Utf8));    
  },

  obfuscate(value : string) : string{
    return Crypto.SHA256(value).toString();
  }
}