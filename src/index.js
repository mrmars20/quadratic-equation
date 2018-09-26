module.exports = function solveEquation(equation) {
  var arr = equation.split(' '),
  a = arr[0],
  b = arr[4],
  c = arr[8],
  znB = arr[3],
  znC = arr[7];

  
  if(znB === "-"){
    b = b*(-1);
  }
  if(znC === "-"){
    c = c*(-1);
  }
 
  var D = Math.pow(b,2) - 4*a*c,
  x1 = Math.round((-b + Math.sqrt(D))/(2*a)),
  x2 = Math.round((-b - Math.sqrt(D))/(2*a));

  if(x1 > x2) {
    return [x2, x1];
  }
    return [x1,x2];
} 
