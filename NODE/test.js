function doMath(num1,num2,op){
    let operators = {
    '+': (num1,num2)=>num1+num2,
    '-': (num1,num2)=>num1-num2,
    'x': (num1,num2)=>num1*num2,
    '/': (num1,num2)=>num1/num2
    }
    return operators[op](num1,num2);
}

// console.log(doMath(2,4,"+"))

console.log(doMath(parseFloat(process.argv[2]),parseFloat(process.argv[4]),process.argv[3]))