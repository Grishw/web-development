//------------ task 1 -----------
function isPrimeNumber(inVal) {
  let isPrime = true;

  if (Array.isArray(inVal) == false) {
    inVal = [inVal];
  }
  
  for (let n in inVal) {
    isPrime = true;
    
    for (let i = 2; i <= inVal[n]; i++) {
      if ( inVal[n] % i == 0) {
        isPrime = false;
        break;
      }
    }
    
    let resultMessagePart =  isPrime ? '' : ' not';
    console.log(inVal[n] + ' is' + resultMessagePart + ' prime number');
  }
}
//------------ task 2 -----------

function isError(n){
  if (n != undefined) {
    return true; 
  } else {
    return false;
  }
}

function checkErrors(n) {
  if (n != undefined) {
    let massage = '';
    switch (n) {
      case 1:
        massage = ' Unexpected ) ';
        break;
      case 2:
        massage = ' Not anough operation ';
        break;
      case 3:
        massage = ' Not anough )';
        break;
      case 4:
        massage = ' Not anough operads ';
        break;
      case 5:
        massage = ' Unexpected char ';
        break;
    }
    
    
    console.log(massage);
    return true;
  } else {
    return false;
  }
}


function performOperation(num1, num2, stack, stackTop) {
  let result = 0;
  switch (stack[stackTop]) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }
  
  return result;
}


function calc(inString) {
  let stringLength = inString.length;
  let counter = 0;
  let errorNumber = undefined;
  
  let bracketStack = [''];
  let bracketStackTop = 0;  
  
  let stack = [''];
  let stackTop = 0;
  let isNumber = true;
  
  let num1 = null;
  let num2 = null; 
  
  while (counter < stringLength) {

    isNumber = true;
    
    switch (inString[counter]) {
      case '+':
      case '-':
      case '*':
      case '/':
        isNumber = false;
        stackTop += 1;
        stack[stackTop] = inString[counter];
        break;
      case '(':
        isNumber = false;
        bracketStackTop += 1;
        bracketStack[bracketStackTop] = inString[counter];
        break;
      case ')':
        isNumber = false;
        if (bracketStack[bracketStackTop] != '(') {
            errorNumber = 1;
        } else {
          bracketStack[bracketStackTop] = undefined;
          bracketStackTop -= 1;
        }
        break;
      case ' ':
        isNumber = false;
        break;
    }

    if(isNumber) {
      if (!( 48 <= inString[counter].charCodeAt(0) &&
          inString[counter].charCodeAt(0) <= 57)) {
        isNumber = false;
        errorNumber = 5;
      }
    }
    
    if (isNumber) {
      num2 = num2*10 + parseInt(inString[counter]);  
    } else if (num2 != null) {
        if (num1 == null) {
          num1 = num2;
          num2 = null;
        } else if (stackTop != 0) {       
            num1 = performOperation(num1, num2, stack, stackTop);
            stack[stackTop] = undefined;
            stackTop -= 1;
            num2 = null;
          } else {
            errorNumber = 2;
          }   
      }    
    
    
    if (isError(errorNumber)) {
      break;
    }
    counter += 1;
  }
  
  
  
  if (!(isError(errorNumber))) {
    if (isNumber) {
      if (stackTop != 0) {
        num1 = performOperation(num1, num2, stack, stackTop);
        stack[stackTop] = undefined;
        stackTop -= 1;
        num2 = 0;
      } else {
        errorNumber = 2;
      }
    }
  
    if (bracketStackTop != 0) {
      errorNumber = 3
    }
    if (stackTop != 0) {
      errorNumber = 4
    }
  }
  
  if(checkErrors(errorNumber) == false){
    return num1;
  }
  
  
}
