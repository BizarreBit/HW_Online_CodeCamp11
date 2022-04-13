Online CodeCamp 11

JS for React Exercise 5 Modern Prototype
1. มี Object dictionary ที่สร้างจาก Object.create(null) เพื่อเก็บ key/value pairs
- ให้เพิ่ม Method dictionary.toString() และคืนค่าเป็น key ทั้งหมดออกมาที่คั้นด้วย comma
let dictionary = Object.create(null);

// your code to add dictionary.toString method

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here
// only apple and __proto__ are in the loop
for(let key in dictionary) {
    alert(key); // "apple", then "__proto__"
}
// your toString in action
alert(dictionary); // "apple,__proto__"
>>
let dictionary = Object.create(null, {
    toString: {
        value() {return Object.keys(this).join(',')}
    }
} );

dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here
// only apple and __proto__ are in the loop
for(let key in dictionary) {
    alert(key); // "apple", then "__proto__"
}
// your toString in action
alert(dictionary); // "apple,__proto__"

2. สร้าง object rabbit ด้วย new keyword
function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function() {
    alert(this.name);
};
let rabbit = new Rabbit("Rabbit");

- คำสั่งทั้งหมดนี้ทำงานเหมือนกันหรือไม่
rabbit.sayHi();
>> แสดงค่า "Rabbit" ซึ่งเป็นต่าของ rabbit.name
Rabbit.prototype.sayHi();
>> แสดงค่า undefined เนื่องจาก Rabbit.prototype ไม่มี Property name
Object.getPrototypeOf(rabbit).sayHi();
>> Object.getPrototypeOf(rabbit) จะคืนค่าเป็น prototype ของ rabbit 
ซึ่งคือ Rabbit.prototype ให้ผลเช่นเดียวกันกับ Rabbit.prototype.sayHi();
rabbit.__proto__.sayHi();
>> ให้ผลเช่นเดียวกันกับ Rabbit.prototype.sayHi()