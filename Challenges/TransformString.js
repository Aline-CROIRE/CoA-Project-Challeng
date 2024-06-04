function transformString(input) {
  let length = input.length;
  let output = "";

  // If the length of the string is divisible by both 3 and 5, perform both operations in order
  if (length % 3 === 0 && length % 5 === 0) {

    input = input.split("").reverse().join("");

  
    for (let i = 0; i < input.length; i++) {
      output += input.charCodeAt(i) + " ";
    }
  }
  // If the length of the string is divisible by 3 Reverse string
  else if (length % 3 === 0 && length%5!==0) {
   
    input = input.split("").reverse().join("");
    output = input;
  }
  // If the length of the string is divisible by 5 Replace each character with its ASCII code
  else if (length % 5 === 0 && length % 3!==0) {
 
    for (let i = 0; i < input.length; i++) {
      output += input.charCodeAt(i) + " ";
    }
  }
  // If none of the conditions are met, keep the string unchanged
  else {
    output = input;
  }

  return output.trim();
}

// Using examples
var input = "alineniyonizera";
var output = transformString(input);
console.log("Input:", input);
console.log("Output:", output);// input is divisible by 5 the output will be ASCII code


var input = "alinen";
var output = transformString(input);
console.log("Input:", input);
console.log("Output:", output);// input is divisible by 3 the output will be rversed string

var input = "alineniyonizera";
var output = transformString(input);
console.log("Input:", input);
console.log("Output:", output);// input is divisible by 5 the output will be ASCII code


