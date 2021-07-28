function runProgram(input) {
   var n = Number(input);

   for(var i = 0;i < n; i++){
       var result = "";
       for(var j = 0; j < n; j++){
           if(i == 0 || i == n-1 || j == n-1){
               result += "* ";
           } else {
               result += "  ";
           }
       }
       console.log(result);

   }


}
if (process.env.USERNAME === "abhis") {
  runProgram(`5`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
