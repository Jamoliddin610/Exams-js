// problem 2

let num = [-2, 5, -10, 1, -12, 4, -5]
let first = [];
let second = [];
if (num[0] < 0 && num[1] > 0) {
    for (let i = 0; i < num.length; i++) {
        if (i % 2 == 0) {
            first.push(num[i])
        }
        else {
            second.push(num[i])
        }
    }
    if (first.every((res) => res < 0) && second.every((res) => res > 0)) {
        console.log(true);
    }
    else if (!(second.every((res) => res > 0))) {
        second.forEach((item) => {
            num.forEach((elem, i) => {
                if (item < 0) {
                    if (elem == item) {
                        console.log(i);
                    }
                }
            })
        })
    }
    else if (!(first.every((res) => res < 0))) {
        first.forEach((item) => {
            num.forEach((elem, i) => {
                if (item > 0) {
                    if (elem == item) {
                        console.log(i);
                    }
                }
            })
        })
    };
} else {
    console.log('ok');
    for (let i = 0; i < num.length; i++) {
        if (i % 2 != 0) {
            first.push(num[i])
        }
        else {
            second.push(num[i])
        }
    }
    if (first.every((res) => res < 0) && second.every((res) => res > 0)) {
        console.log(true);
    }
    else if (!(second.every((res) => res > 0))) {
        second.forEach((item) => {
            num.forEach((elem, i) => {
                if (item < 0) {
                    if (elem == item) {
                        console.log(i);
                    }
                }
            })
        })
    }
    else if (!(first.every((res) => res < 0))) {
        first.forEach((item) => {
            num.forEach((elem, i) => {
                if (item > 0) {
                    if (elem == item) {
                        console.log(i);
                    }
                }
            })
        })
    };
}


