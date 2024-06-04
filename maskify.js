// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc){
    let Masked  
    var len = cc.length 
    Masked  =   len <= 4 ?  cc : cc.slice(0,len-4).replace(/./g, '#') + cc.slice(len-4)
     console.log(Masked); 

}

var words = "11111"

maskify(words)

function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }

  function maskify(cc) {
    return cc.slice(-4).padStart(cc.length,'#')
  }