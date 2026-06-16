const filterEvenNumbers= (array : number[]): number[] =>{
    return array.filter(element => 
        element % 2 === 0
    );
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])) 