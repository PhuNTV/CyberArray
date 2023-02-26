// Thêm số vào mảng
var numArray = [];

function addNumToArray() {
    var num = Number(document.querySelector("#addNum").value);
    numArray.push(num);

    document.querySelector("#txtAddNum").innerHTML = numArray;
}

document.querySelector("#btnAddNum").onclick = addNumToArray;

// Tính tổng số dương
function positiveSum() {
    var sum = 0;
    for (var index = 0; index < numArray.length; index++) {
        if (numArray[index] > 0) {
            sum += numArray[index];
        }
    }
    document.querySelector("#txtSum").innerHTML = "Tổng số dương: " + sum;
}

document.querySelector("#btnSum").onclick = positiveSum;

// Đếm số dương
function positiveCount() {
    var count = 0;
    for (var index = 0; index < numArray.length; index++) {
        if (numArray[index] > 0) {
            count += 1;
        }
    }
    document.querySelector("#txtPositiveCount").innerHTML = "Số dương: " + count;
}

document.querySelector("#btnPositiveCount").onclick = positiveCount;


// Tìm số nhỏ nhất
function findMin() {
    var min = numArray[0];
    for (var index = 1; index < numArray.length; index++) {
        if (numArray[index] < min) {
            min = numArray[index];
        }
    }
    document.querySelector("#txtFindMin").innerHTML = "Số nhỏ nhất: " + min;
}

document.querySelector("#btnFindMin").onclick = findMin;


// Tìm số dương nhỏ nhất


function findPositiveMin() {


    var positiveArray = numArray.filter(function(value) {
        return value > 0;
    });
    var minPositive = positiveArray[0];
    for (var index = 1; index < positiveArray.length; index++) {
        if (positiveArray[index] < minPositive) {
            minPositive = positiveArray[index];
        }
    }
    document.querySelector("#txtFindPositiveMin").innerHTML = "Số dương nhỏ nhất: " + minPositive;
}

document.querySelector("#btnFindPositiveMin").onclick = findPositiveMin;


// Tìm số chẵn cuối cùng

function findLastEven() {
    var lastEven = -1;
    for (var index = numArray.length - 1; index >= 0; index--) {
        if (numArray[index] % 2 === 0) {
            lastEven = numArray[index];
            break;
        }
    }
    document.querySelector("#txtFindLastEven").innerHTML = "Số chẵn cuối cùng: " + lastEven;
}

document.querySelector("#btnFindLastEven").onclick = findLastEven;

// Đổi vị trí

function changeIndex() {
    var numArrayCopy = numArray.slice();
    var index1 = Number(document.querySelector("#index1").value);
    var index2 = Number(document.querySelector("#index2").value);

    var curr;
    numArrayCopy[curr] = numArrayCopy[index1];
    numArrayCopy[index1] = numArrayCopy[index2];
    numArrayCopy[index2] = numArrayCopy[curr];

    document.querySelector("#txtChangeIndex").innerHTML = numArrayCopy;
}

document.querySelector("#btnChangeIndex").onclick = changeIndex;


// Sắp xếp

function sortUp() {
    var numArrayCopy2 = numArray.slice();

    numArrayCopy2.sort(function(a, b) {
        return a - b;
    });

    document.querySelector("#txtSortUp").innerHTML = numArrayCopy2;
}

document.querySelector("#btnSortUp").onclick = sortUp;

// Tìm số nguyên tố đầu tiên

function firstPrime() {
    var prime = -1;

    for (var i = 0; i < numArray.length; i++) {
        var curr = numArray[i];
        var isPrime = true;

        if (curr < 2) {
            isPrime = false;
        }
        for (var j = 2; j < Math.sqrt(curr); j++) {
            if (curr % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime == true) {
            prime = curr;
            break;
        }
    }

    document.querySelector("#txtFirstPrimeNumber").innerHTML = "Số nguyên tố đầu tiên: " + prime;
}

document.querySelector("#btnFirstPrimeNumber").onclick = firstPrime;


// Thêm mảng số thực
var newNumArray = [];

function addNewNumToArray() {
    var num = Number(document.querySelector("#addNewNum").value);
    newNumArray.push(num);

    document.querySelector("#txtAddNewNum").innerHTML = newNumArray;
}

document.querySelector("#btnAddNewNum").onclick = addNewNumToArray;

function countInt() {
    var countInter = 0;
    for (let index = 0; index < newNumArray.length; index++) {
        var curr2 = newNumArray[index];
        if (Number.isInteger(curr2)) {
            countInter++;
        }

    }
    document.querySelector("#txtCountInt").innerHTML = "Số nguyên: " + countInter;
}

document.querySelector("#btnCountInt").onclick = countInt;

//  So sánh số lượng số âm và dương
function comparePosAndNeg() {

    var posArray = numArray.filter(function(value) {
        return value > 0;
    });
    var negArray = numArray.filter(function(value) {
        return value < 0;
    });

    if (posArray.length > negArray.length) {
        document.querySelector("#txtCompare").innerHTML = "Số dương > Số âm ";
    } else if (posArray.length < negArray.length) {
        document.querySelector("#txtCompare").innerHTML = "Số dương < Số âm ";
    } else {
        document.querySelector("#txtCompare").innerHTML = "Số dương = Số âm ";
    }

}

document.querySelector("#btnCompare").onclick = comparePosAndNeg;