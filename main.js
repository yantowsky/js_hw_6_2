const array = ['qwerty', false, 3, 5, null, 0, 8, 'hello', 4.5];

function calcAvgNum(array) {
    let sumNum = 0;
    let countNum = 0;

    array.forEach(el => {
        typeof (el) === 'number' && (sumNum += el, countNum++);
    });

    return sumNum / countNum;
}

console.log(calcAvgNum(array));