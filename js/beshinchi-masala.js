let obj = { x: 1, y: 2 };

function arr(obj) {
    let arr = [];
    for (let i in obj) {
        let num = [i, obj[i]];
        arr.push(num);
    }
    console.log(arr);
}
arr(obj);