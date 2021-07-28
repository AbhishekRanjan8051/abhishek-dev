function numToHex(data) {
    var hexaValue = data.toString(16);
    return hexaValue;
}

function rgbToHex(rgbArr) {
    var r = rgbArr[0]
    var g = rgbArr[1]
    var b = rgbArr[2]
    return numToHex(r) + numToHex(g) + numToHex(b);
}

var rgbArr = [45, 0, 210]
var result = rgbToHex(rgbArr)
console.log(result);

var rgbArr = [0, 255, 0]
var result = rgbToHex(rgbArr)
console.log(result);

var rgbArr = [12, 24, 36]
var result = rgbToHex(rgbArr)
console.log(result);
