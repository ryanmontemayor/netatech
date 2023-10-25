
// variable fr roman numerals
const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

function RomanConvertNumber(data) {
    // split the data to array
    const arr = data.split("");

    // temporary variable
    let temp = 0; let con = false;

    // iterate on array
    for (let i = 0; i < arr.length; i++) {
        // determine if next array is larger than current
        if (con) {
            con = false;
            continue;
        }
        else if (arr[i] == "C" && arr[i+1] == "M") {
            temp += 900;
            con = true;
        } else if (arr[i] == "C" && arr[i+1] == "D") {
            temp += 400;
            con = true;
        } else if (arr[i] == "X" && arr[i+1] == "C") {
            temp += 90;
            con = true;
        } else if (arr[i] == "X" && arr[i+1] == "L") {
            temp += 40;
            con = true;
        } else if (arr[i] == "I" && arr[i+1] == "X") {
            temp += 9;
            con = true;
        } else if (arr[i] == "I" && arr[i+1] == "V") {
            temp += 4;
            con = true;
        } else {
            temp += roman[arr[i]];
        }
    }

    // return temp
    return temp;
}

// output the result
console.log(RomanConvertNumber("MCMXCIV"));

