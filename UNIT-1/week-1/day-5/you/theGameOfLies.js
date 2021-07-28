var a = (true && false && !true) || false;
//false
console.log(a);

var b = true || (!false && (true || false));
//true
console.log(b);

var c = false || (true && false) || true;
//true
console.log(c);

var d = true || (false && true) || true;
//true
console.log(d);
