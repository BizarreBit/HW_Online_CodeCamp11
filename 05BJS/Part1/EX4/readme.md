Online CodeCamp 11

Basic JS Excercise 4 การเขียนเงื่อนไข
1. Browser จะแสดงข้อความ "Hello CodeCamp" ไหม
if ("0"){
    alert('Hello CodeCamp');
}

>> แสดงเนื่องจาก "0" เป็น string ที่มีความยาวมากกว่า 0 ซึ่งถูกตีค่าเป็น true

2. ใช้ if else ในการเขียน "ถามชื่อ" ของคุณ
- ถ้าตอบ "ถูก" ให้แสดงคำว่า "เก่งมาก"
- ถ้าตอบ "ผิด" ให้แสดงคำว่า "คุณไม่รู้จักชื่อฉัน"

>>EX4-2.html

3. ใช้ prompt ในการรับคะแนนมาคำนวณเกรด
- ถ้าคะแนน "มากกว่าเท่ากับ 80" ได้ A
- ถ้าคะแนน "อยู่ระหว่าง 70 -79" ได้ B
- ถ้าคะแนน "อยู่ระหว่าง 60 -69" ได้ C
- ถ้าคะแนน "อยู่ระหว่าง 50 -59" ได้ D
- ถ้าคะแนน "น้อยกว่า 50" ได้ F

>>EX4-3.html

4. เปลี่ยน if-else ข้างล่างให้อยู่ในรูปของ Ternary Operators

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