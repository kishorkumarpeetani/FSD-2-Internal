const arr = (...numbers:number[]):number=>{
    let total:number = 0;
    for(let num of numbers){

        total += num;
    }
    return total;
}

console.log(arr(1,2,3,45,54));