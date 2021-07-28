var p = 5000; // This is the Principal Amount
var r = 0.05; // This is the Rate
var n = 12; //Number of Interest is Compoundes per Time
var t = 10; // Number of Time Periods in Years

/* Compound Interest
Formula 
Compound Interest = P (1+r/n)^t
*/
var rbn = r / n;

var CI = p * (1 + rbn) ** (t * n);
console.log(CI);
