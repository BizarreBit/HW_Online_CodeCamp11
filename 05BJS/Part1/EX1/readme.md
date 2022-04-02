Online CodeCamp 11

Basic JS Exercise 1 ตัวแปรและประเภทของข้อมูล

1. ผลลัพธ์ของ console.log ทั้งสามคืออะไร

let name = "CodeCamp";
console.log(`hello ${1}`);
>> hello 1

console.log(`hello ${"name"}`);
>> hello name

console.log(`hello ${name}`);
>> hello CodeCamp

2. ให้กำหนดตัวแปรดังต่อไปนี้
2.1 กำหนดตัวแปรสำหรับเก็บ "ชื่อ" และกำหนดค่าเริ่มต้นเป็นชื่อของผู้เรียน
2.2 กำหนดตัวแปรสำหรับเก็บ "อายุ" และกำหนดค่าเริ่มต้นเป็นอายุของผู้เรียน
2.3 กำหนดตัวแปรสำหรับเก็บ "ที่อยู่" และกำหนดค่าเริ่มต้นเป็นที่อยู่ของผู้เรียน
2.4 กำหนดตัวแปรสำหรับเก็บ "ประวัติ" ของผู้เรียน โดยใช้ตัวแปรทั้ง 3 ตัวด้านบน ประกอบการเขียนประวัตินี้ด้วย
>> 
let name = "myname";
let age = 99;
let address = "No. Rd. district province 00000";
let profile = `Name: ${name}, Age: ${age}, Address: ${address}`;