const exampleAdditionInput = {
  num1: 4,
  num2: 4,
  operation: 'Add',
}


const calculator = function(input){

  if(input.operation === "Add" || input.operation === "+"){
    return input.num1 + input.num2;
  }else if (input.operation === "Subtract" || input.operation === "-"){
    return input.num1 - input.num2;
  }else if (input.operation === "Multiply" || input.operation === "*"){
    return input.num1 * input.num2;
  }else if (input.operation === "Divide" || input.operation === "/"){
    let result = input.num1 / input.num2;
  }

}


const inputValidation = function(input){

  const allOperator = ["Add","+", "Subtract","-", "Multiply", "*", "Divide", "/"]

  if (typeof input.num1 != 'number'){
    console.log(`${input.num1} is not a number, give me a number please!`)
  } else if (typeof input.num2  != 'number'){
    console.log(`${input.num2} is not a number give me a number please!`)
  } else if (allOperator.includes(input.operation) === false){
    console.log('This is not a valid operator');
  } else if (allOperator.includes(input.operation)){
    console.log(calculator(input));
  }

}


inputValidation(exampleAdditionInput)
 
