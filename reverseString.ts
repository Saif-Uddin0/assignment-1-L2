const reverseString= (str : string): string =>{
        const changeToCharacter = str.split("").reverse().join("")
        return changeToCharacter;
        
    };

console.log(`"${reverseString("typescript")}"`);