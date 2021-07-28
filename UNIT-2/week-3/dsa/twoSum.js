function findTwosUM(arr, k) {

    var start = 0;
    var end = arr.length - 1;

    var sum = 0;
    var temp = false
    while (start < end) {
        sum = arr[start] + arr[end];
        if (sum == k) {
            temp = true
            console.log('start, end:', start, end);
            break;
        } else if (sum > k) {
            end--;
        } else if (sum < k) {
            start++;
        }
    }
    if (temp == false) {
        console.log(-1, -1);
    }
}

var arr = [4, 5, 6, 7, 8, 9];
var k = 18;

findTwosUM(arr, k);