function sumTwoSmallestNumbers(numbers) {  
    let Min 
    let SecondMin
     
      numbers.forEach((item,index)=>{
        if(index == 0){
            Min  = item
        }
        if(item < Min){
            Min = item
          }
      })
    
      let DupArr = numbers.filter(item => item !== Min);

      console.log(DupArr);
      DupArr.forEach((item,index)=>{
        if(index == 0){
            SecondMin  = item
        }
        if(item < SecondMin){
          SecondMin = item
        }
      })
      
      const sum  = Min + SecondMin
      return sum
  }

  console.log(sumTwoSmallestNumbers([1,2,3,45,100]));

// shortest
  function sumTwoSmallestNumbers(numbers) {  
    var [ a, b ] = numbers.sort((a, b) => a - b)
    return a + b
  }