Online CodeCamp 11

Advanced JS Exercise 3 Methods ของ Object
1. การทำงานของ code ดังกล่าวจะได้อะไรออกมา
let user = {
  name: "John",
  go: function() { alert(this.name) }
}

(user.go)()

>> เกิด error แนะนำให้ใส่ semi colon ท้ายคำสั่งทุกครั้ง
let user = {
  name: "John",
  go: function() { alert(this.name) }
};

(user.go)()

2. การทำงานของ code ดังกล่าวจะได้อะไรออกมา
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // What's the result?
แหล่งที่มาของโจทย์: https://javascript.info/task/object-property-this

>>
คีย์เวิร์ด this ใน Method อ้างอิงถึง Object ที่เรียก Method นั้น
ในกรณีนี้มีการเรียกฟังก์ชัน makeUser() โดยไม่ได้ผ่าน Object ภายในโค้ดเลย
ฟังก์ชัน makeUser() จึงถูกเรียกเป็น Method ด้วย Global Object "window" ของเบราว์เซอร์
this ในกรณีนี้จึงอ้างอิงถึง Object "window" นี้ 
ซึ่งจะมี Property ชื่อ name ที่มีค่าตั้งต้นต่างกันไปตามแต่ละเบราว์เซอร์ 
เช่น '', undefied, CodePen

ดังนั้น user.ref.name
ซึ่งคือ this.name
จึงคือ window.name
ซึ่งมีค่าเช่น '', undefied, CodePen

นั้นคือ alert( user.ref.name ); ในโค้ดดังกล่าวจะแสดงค่าเช่น '', undefied, CodePen ออกมา

3. สร้าง object calculator จาก 3 methods นี้
- read() ใช้ prompts สำหรับรับค่ามา 2 ค่าและเก็บเป็น object properties.
- sum() คืนค่าผลบวกของ 2 ค่านั้น.
- mul() คืนค่าผลคูณของ 2 ค่านั้น.

let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

>>
let calculator = {
  read() {
    this.term1 = +prompt("Enter a number for the first term.");
    this.term2 = +prompt("Enter a number for the second term.");
  },
  sum() {
    return this.term1 + this.term2
  },
  mul() {
    return this.term1 * this.term2
  }
};

4. กำหนดให้ Object ชื่อ ladder มี method ขึ้น และ ลง ดังนี้
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};
โดยที่ Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
จงดัดแปลง Object ชื่อ ladder ให้สามารถเรียก function แบบนี้ได้
ladder.up().up().down().showStep(); // 1

>>
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
  }
};

