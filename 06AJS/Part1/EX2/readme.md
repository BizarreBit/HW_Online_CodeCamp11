Online CodeCamp 11

Advanced JS Exercise 2 Object

1.1. ให้สร้าง Object แบบ Object Iteral โดยให้กำหนดตัวแปรชื่อ human โดยมี Properties ทั้ง 5 อย่าง
- ชื่อของผู้เรียน เป็น String
- อายุของผู้เรียนเป็น number
- บ้านของตัวเองเป็น String
- โสดหรือไม่โสดเป็น boolean
- คะแนนความฉลาดของตัวเองเป็น number (เต็ม 10)

let human = {
  name : 'MyName',
  age : 99,
  address : 'No. Rd. district province 00000',
  isSingle : true,
  intel : 10
}

2.1. ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop และนำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น console.log() object นั้นออกมา
>> 
let key;
let object = {};
while (true){
  key = prompt("key?");
  if (key === "stop") break;
  object[key] = prompt("value?");
}
console.log(object)


2.2. ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number) โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย
>>
let fruit;
let value;
let object = {};
while (true){
  fruit = prompt("Enter the fruit's name:");
  if (fruit === "stop") break;

  value = +prompt(`Enter the number of ${fruit}:`);
  if (value > 1) fruit += 's';

  object[fruit] = value;
}
console.log(object)


3.1 ให้ทำตามคำสั่งต่อไปนี้
- สร้าง Object เปล่าขึ้นมา
- เพิ่ม properties name เข้าไปและให้ value เป็น “Sonter”
- เพิ่ม properties surname เข้าไปและให้ value เป็น “Pakorn”
- เปลี่ยน properties name เป็น “Boy”
- ลบ properties name ออกจาก Object

>>
let obj = {};
obj.name = "Sontor";
obj.surname = "Pakorn";
obj.name = "Boy";
delete obj.name;


3.2 ให้เขียนฟังก์ชันชื่อ isEmpty(obj) โดยจะมี parameters เป็น obj และ ฟังก์ชันนี้จะเช็คว่า obj นี้มี properties ไหม ถ้ามีให้คืนค่า false ถ้าไม่มีให้คืนค่า true
>>
function isEmpty(obj){
    for (let key in obj){
        return false;
    }
    return true;
}

3.3 การเขียนข้างล่างต่อไปนี้ Error  ไหม
const user = {
  name: "John"
};

// does it work?
user.name = "Pete";

>> ไม่ Error 
ตัวแปร Object เก็บเพียงค่าที่อยู่ reference ของตัวมันเอง แต่ไม่ได้เก็บ property 
ดังนั้นการเปลี่ยนแปลงค่าของ name จึงทำได้ เนื่องจากไม่ได้ทำให้ที่อยู่ reference ของ const user เปลี่ยนแปลง

3.4 จงเขียนฟังก์ชัน sum(obj) ที่รับ obj ที่เก็บ properties โดยมี key เป็นชื่อพนักงานและมี value เป็นเงินเดือน ให้ฟังก์ชันคืนค่าเป็นผลรวมของเงินเดือนพนักงานทั้งหมด
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
>>
function sum(obj){
    let result = 0;
    for (let name in obj){
        result += obj[name];
    }
    return result;
}

3.5 จงเขียนฟังก์ชัน multiplyNumeric(obj, times) โดยถ้า properties นั้นมี value เป็น number ให้คุณ value นั้นด้วย times ถ้าข้อมูลเเป็นอย่างอื่นไม่ต้องทำอะไร
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu, 2);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

>>
function multiplyNumeric(obj, times){
    for (let key in obj){
        if (+obj[key]) obj[key] *= times;
    }
}