// function expressionMatter(a, b, c) {
//     return // highest achievable result
//   }


// My solution

function expressionMatter(a, b, c) {
    let output = [];
    output.push(a *(b + c));
    output.push(a * b * c);
    output.push(a + b * c);
    output.push((a + b) * c);
    output.push(a+b+c);
      return Math.max(...output);
  }



//   new
va
terString = function(value) {
  
  }
// My solution 

var FilterString = function(value) {
    return parseInt(value.replace(/[^\d]/g, ""))
  }


// second 
function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ? true : false;
}
