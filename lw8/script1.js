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

