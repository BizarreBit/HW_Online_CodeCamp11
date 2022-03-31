Online CodeCamp 11

Basic JS Excercise 9
เปลี่ยน if-else ข้างล่างให้อยู่ในรูปของ Ternary Operators

let age = promt('How old are you?');
let price;
if (age < 18){
    price = 2000;
} else {
    price = 3500;
}

>>
let age = prompt('How old are you?');
let price = (age < 18) ? 2000 : 3500;