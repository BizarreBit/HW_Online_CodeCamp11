Online CodeCamp 11

JS for React Exercise 2 Prototypal Inheritance
1. ในบรรทัดที่มีเลข 1 2 และ 3 จะได้ค่าออกมาเป็นอะไร
let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};
alert( rabbit.jumps ); // ? (1)
delete rabbit.jumps;
alert( rabbit.jumps ); // ? (2)
delete animal.jumps;
alert( rabbit.jumps ); // ? (3)
>>
(1) true จากค่าของคีย์ jumps ใน rabbit
(2) null จากค่าของคีย์ jumps ใน animal
(3) undefined ไม่มีการกำหนดค่า 

2. ใช้ __proto__ ในการกำหนด prototype object ดังนี้ pockets → bed → table → head. ?????
let head = {
    glasses: 1
};
let table = {
    pen: 3
};
let bed = {
    sheet: 1,
    pillow: 2
};
let pockets = {
    money: 2000
};
>>
?????
bed.__proto__ = pockets;
table.__proto__ = bed;
head.__proto__ = table;

3. การเขียนโค๊ดแบบนี้ object ไหนจะเป็นคนได้ property full ไป
let animal = {
    eat() {
        this.full = true;
    }
};
let rabbit = {
    __proto__: animal
};
rabbit.eat();
>>
rabbit เนื่องจาก rabbit เรียก Method eat ทำให้ this หมายถึง rabbit 
this.full = true ตามคำสั่ง rabbit.eat(); จึงที่เทียบเท่ากับ rabbit.full = true

4. การเขียนโค๊ดแบบนี้ กระเพาะจะถูกแชร์กันจะแก้ไขยังไงดี
let hamster = {
    stomach: [],
    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple
>>
เนื่องจากทั้ง speedy และ lazy ต่างไม่มี property stomach เป็นของตัวเอง
แต่ใช้ Prototypal Inheritance จาก Object hamster ซึ่งมี property stomach 
คำสั่ง speedy.eat("apple"); จึงถูกเก็บ "apple" ไว้ใน property stomach ใน Object hamster
และคำสั่ง alert( speedy.stomach ); และ alert( lazy.stomach ); ต่างก็นำค่าจาก property stomach ใน Object hamster ที่เดียวกัน

การแก้ไขทำได้โดยให้ speedy และ lazy มี property stomach แยกกันเป็นของตนเอง
let hamster = {
    eat(food) {
        if (!(this.hasOwnProperty('stomach'))) this.stomach = [];
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

speedy.eat("apple");
alert( speedy.stomach ); // apple
alert( lazy.stomach ); // undefined
lazy.eat("carrot");
alert( lazy.stomach ); // carrot