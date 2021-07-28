//Game Of Booleans

//Part :- 1 (Output = False) ; Result = Not Possible
console.log(true || false || (false && false));
console.log(true || true || (false && false));

// part :- 2 (Output = True) ; Result = true;
console.log(true || (true && false) || true);
console.log(false || (true && false) || true);
console.log(true || (true && false) || false);

//part :- 3 (Output = false) ; Result = Not Possible
console.log(false || true || false || (false && true));

// part :- 4 (Output = True); Result = true
console.log((false && true) || true || (true && false));

// part :- 5 (Output = false) ; Result =
console.log(false || false || (false && true) || false);
