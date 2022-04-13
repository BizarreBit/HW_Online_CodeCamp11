Online CodeCamp 11

JS for React Exercise 3 F.Prototype
1. จากโค๊ดต่อไปนี้มีการสร้าง new Rabbit() ขึ้นมา
function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();
/*บรรทัดสีเหลือง*/
alert( rabbit.eats ); // true

ถ้ามีการเปลี่ยนบรรทัดสีเหลืองจะเป็นอย่างไร
- กรณี (1)
Rabbit.prototype = {};
alert( rabbit.eats ); // ?
>> ยังคงเป็น true ไม่เปลี่ยนแปลง
เนื่องจาก Rabbit.prototype จะถูกใช้อ้างอิงขณะมีการเรียก new Rabbit() เท่านั้น
Object rabbit จะยังคงอ้างอิง Rabbit.prototype ตัวเดิมอยู่
การเปลี่ยนแปลงตัว Rabbit.prototype ของ function Rabbit() ไม่ส่งผลย้อนหลังต่อ Object rabbit

- กรณี (2)
Rabbit.prototype.eats = false;
alert( rabbit.eats ); // ?
>> เปลี่ยนเป็น false
เนื่องจากคำสั่ง Rabbit.prototype.eats = false; เปลี่ยนแปลงค่าโดยไม่เปลี่ยนแปลงตัวของ Rabbit.prototype
rabbit ซึ่งยังคงอ้างอิง Rabbit.prototype ตัวเดียวกันนี้ จึงมีค่า rabbit.eats ที่เปลี่ยนไปตาม

- กรณี (3)
delete rabbit.eats;
alert( rabbit.eats ); // ?
>> ยังคงเป็น true ไม่เปลี่ยนแปลง
เนื่องจาก Object rabbit ไม่ได้มี Property eats เป็นของตัวเอง
แต่สามารถเรียกใช้ Property eats ได้ผ่าน Prototypal Inheritance
คำสั่ง delete rabbit.eats จึงไม่มีผล

- กรณี (4)
delete Rabbit.prototype.eats;
alert( rabbit.eats ); // ?
>> เปลี่ยนเป็น undefined
ด้วยเหตุเช่นเดียวกับกรณี (2)

2. ถ้าเราต้องการสร้างใช้ constructor ของ obj เราสามารถเขียนแบบนี้ได้ไหม
let obj2 = new obj.constructor();
>> หากยังไม่เปลี่ยนเปลง obj.prototype ซึ่งจะมีค่าเป็น constructor ของ obj อยู่แล้ว จะสามารถเรียกใช้ obj.constructor() ได้