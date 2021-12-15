let str1="aabcc"
let str2="adcaa"
let count = 0

function countStr(str1, str2) {
    const  Str2New= str2.split("");
    for(str of str1){
      let findChar = Str2New.findIndex(item => item === str);
      if(findChar >= 0){
        count++;
        Str2New.splice(findChar, 1);
      }
    }
    return count;
  }
  
  console.log(countStr(str1, str2))