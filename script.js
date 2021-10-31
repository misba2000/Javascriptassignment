
// ==>write a function to print whether a given number is odd or even<==

function oddorEven(num) {
  if(num%2==0) {
    return "Even number";
  }
  else{
    return "Odd number";
  }
  
  
}  
 var res = oddorEven(7);
 console.log(res);


//  ==>write a function to calculate percentage of the total marks<==
var totalmarks=800;
function percent(Eng,Mat,Kan,Hin,Chemistry,Biology,Physics,Social) {
  var sum=Eng+Mat+Kan+Hin+Chemistry+Biology+Physics+Social;
  return sum;
}
var res=percent(60,70,59,96,83,89,85,95);
var percentage=(res*100/totalmarks);
console.log(percentage);

// ==>write a function to reverse the string<==

function reverseString(str) {
  return str
  .split("")
  .reverse()
  .join("")
}
var res=reverseString("ENGINEERING");
console.log(res);
