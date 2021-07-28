function TwoSortedArrays(arr1, arr2, n) {

    arr1.sort(function (a, b) { return a - b });
    arr2.sort(function (a, b) { return a - b });

    var i = 0;
    var j = 0;
    var count = 0;

    while (i < n && j < n) {

        if (arr1[i] == arr2[j]) {
            count++
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++
        } else {
            j++;
        }
    }

    return count;

}

function runProgram(input) {

    var Input = input.split("\n");
    var testCases = Number(Input[0]);

    for (var i = 1; i <= testCases; i++) {

        var arr1 = Input[i * 2 + i - 1].trim().split(" ").map(Number);
        var arr2 = Input[i * 2 + i].trim().split(" ").map(Number);
        var n = Number(Input[i * 2 + i - 2])

        var ans = TwoSortedArrays(arr1, arr2, n);
        console.log(ans);
    }

}

if (process.env.USERNAME === "abhis") {
    runProgram(`6
    1
    1
    5
    1
    3
    7
    5
    1 2 5 7 8
    8 7 6 6 3
    5
    1 4 4 5 5
    9 5 5 5 2
    4
    1 3 3 9
    8 6 5 4
    6
    1 2 3 4 5 7
    9 8 6 5 3 2`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}