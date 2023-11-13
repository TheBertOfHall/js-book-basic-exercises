function evenOrOdd (number) {
  if (number.isInterger() === true){
    if (number % 2 === 0){
      console.log("even");
    } else {
      console.log("false");
    }
  
  } else { 
    console.log("You must enter a number");
  }
}