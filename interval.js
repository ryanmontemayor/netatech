
// function to merge all overlapping
function OverLapping(data) {
    // sort inner value
    data = data.map(d => d.sort((a, b) => a-b));
    // sort outer value
    data = data.sort((a, b) => a[0] - b[0]);

    // temporary array variable
    let arr = [];
    // iterate
    while (data.length) {
        // check if last array value and check if current array is less than next array
        if (data.length == 1 || data[0][1] < data[1][0]) {
            // push value to array
            arr.push(data.shift());
        } else {
            // get the current array
            const d = data.shift();
            const n = data.shift();
            // push overlapped array
            arr.push([d[0], n[1]]);
        }
    }

    // return value
    return arr;
}

const arr = [[1, 3], [2, 6], [8, 10], [15, 18]];
//const arr = [[1, 4], [4, 5]];
console.log(OverLapping(arr));