function toCamelCase(str){
    const parts = str.split(/-|_/); 
    let FirstWord = parts[0];
      if(parts && parts[0].toUpperCase() != parts[0]){
            let updatedStr = parts.slice(1,parts.length).map((words)=>{
            return words[0].toUpperCase()+words.slice(1,words.length)
          })
          updatedStr.unshift(FirstWord)
          updatedStr = updatedStr.join("")
          console.log(updatedStr);
      }else{
        let updatedStr = parts.map((words)=>{
            return words[0].toUpperCase()+words.slice(1,words.length)
        })
        updatedStr = updatedStr.join("")
      }
      
}

toCamelCase("the-stealth-warrior")

var words = "hello world"

const reverseStr = words.split("").reverse().join("")
console.log(reverseStr);