console.log("************** PRACTICE 116 - ZZCrypt *********************");

// Descifra el siguiente secreto:
var secret = "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

const decrypt = (secret: string) : string => {
  const conversion = {};
  
  for (let i = 0; i<plain.length; i++) {
    conversion[cipher[i]]= plain[i];
  }
  
  let decryptedMessage = ""; 

  for (let char of secret) { 
    if (char in conversion) { 
      decryptedMessage += conversion[char]; 
    } else {
      decryptedMessage += char;
    }
  }
  return decryptedMessage; 
}

console.log(decrypt(secret));
