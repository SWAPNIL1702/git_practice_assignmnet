function isPrime(number) {
    if (number <= 1) {
      return false; 
    }
  
    //error here
  
    //if the number is divisible by 2 or 3
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
  
    // Check for prime by testing factors up to the square root of the number
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Testing the function
  const given_number = 17;
  if (isPrime(given_number)) {
    console.log(`${given_number} is prime.`);
  } else {
    console.log(`${given_number} is not prime.`);
  }