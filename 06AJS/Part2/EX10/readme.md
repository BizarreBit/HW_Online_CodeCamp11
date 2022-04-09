Online CodeCamp 11

Advanced JS Exercise 10
1. กำหนดให้ salaries เป็น Object
ให้เขียนฟังก์ชัน sumSalaries(salaries) ที่คืนค่าเป็นผลรวมของเงินเดือน ถ้า salaries ไม่มีสมาชิก ให้คืนค่าเป็น 0
let salaries = {
"John": 100,
"Pete": 300,
"Mary": 250
};
alert( sumSalaries(salaries) ); // 650
>>
function sumSalaries(salaries) {
    if (!(Object.keys(salaries).length)) return 0;
    let sum = 0;
    for (let value of Object.values(salaries)) {
        sum += +value;
    }
    return sum
}

let salaries = {
"John": 100,
"Pete": 300,
"Mary": 250
};
alert( sumSalaries(salaries) );


2. ให้เขียนฟังก์ชัน count(obj) ที่คืนค่าเป็นจำนวน properties ใน object
let user = {
name: 'John',
age: 30
};
alert( count(user) ); // 2
>>
function count(obj) {
    return Object.keys(obj).length
}
