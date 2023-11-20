//1
let num;
let degree;

while((isNaN(num) || isNaN(degree)) ? true : console.log(pow(num, degree))) {
    num = prompt('Введите число');
    degree = prompt('В какую степень возвести?');
}

function pow(num, degree) {
    if(degree === 0) {
        return 1;
    } else if (degree < 0){
        return 1 / pow(num, -degree);
    } else {
        return num * pow(num, degree - 1);
    }
}

//2
const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement() {
    array.splice(4,1);
    return array;
}

console.log(removeElement());


//3
const symbol = 'abcdefghijklmnopqrstuvwxyz0123456789';
let result = '';

function generateKey(length, item) {
    
    for (let i = 0; i < length; i++) {
        result += item.charAt(Math.random() * symbol.length);
    }
    return result;
}

console.log(generateKey(6, symbol));


