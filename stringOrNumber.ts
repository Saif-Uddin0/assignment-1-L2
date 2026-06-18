type StringOrNumber = string | Number

const checkType = (val : StringOrNumber ) =>{
    if(typeof val === "number"){
        return (`"Number"`)
    }
    return  (`"String"`)
}


console.log(checkType("Hello")); 
console.log(checkType(42)); 