function Filter_lis(l){
    
    let val = []

    l.map((item)=>{
        
        if(typeof item != "string"){
            val.push(item)
        }
       
    })
    return val
}
console.log(Filter_lis([1, "2", 3,"4"])) 