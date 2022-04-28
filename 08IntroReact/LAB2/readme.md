Online CodeCamp 11

Intro to React LAB 2 JSX
1. 
- ให้สร้างตัวแปรชื่อ fullName เก็บชื่อจริง นามสกุลของตัวเอง
- ให้สร้างตัวแปรชื่อ birthYear เก็บปีที่เกิดของตัวเอง
- ให้ render หน้า web โดยใช้ JSX ดังนี้
 > แสดงชื่อ fullName ใน tag <h1>
 > แสดงอายุใน tag <p> (ให้เอาปีปัจจุบันลบด้วยปีเกิด)
>> main.js
const fullName = 'Myname Mysurname';
const birthYear = 999;
const root = (
    <div>
        <h1>{fullName}</h1>
        <p>{new Date().getFullYear() - birthYear}</p>
    </div>
);
ReactDOM.render(root, document.getElementById('root'));

2. 
- ให้สร้างตัวแปรชื่อ height และ weight เก็บข้อมูลส่วนสูงและน้ำหนักตามลำดับ
- ให้สร้างฟังก์ชัน calcBMI เพื่อคำนวณค่า BMI
- ให้ render หน้า web เพื่อแสดงค่า BMI ใน tag <h1>
>> main.js
const height = 199.5;
const weight = 99.1;
function calcBMI(height, weight) {
    return weight/(height/100)**2;
}
const root = (
    <div>
        <h1>{"BMI: " + calcBMI(height, weight)}</h1>
    </div>
);
ReactDOM.render(root, document.getElementById('root'));

3. 
- ให้สร้าง tag <label> และ <input>
- tag <input> มี class ชื่อ username มี id คือ username และมี attribute ชื่อ name ให้มีค่าเท่ากับ username
- tag <label> ให้ใส่ข้อความ Username และมี attribute ชื่อ for ให้มีค่าเท่ากับ id ของ tag <input>
- ให้ render หน้า web เพื่อแสดง tag ทั้งสองในแบบ JSX
>> main.js
const root = (
    <div>
        <label htmlFor='username'>Username </label>
        <input id='username' className='username' name='username'/>
    </div>
);
ReactDOM.render(root, document.getElementById('root'));

4. โค้ดด้านล่างทำงานได้หรือไม่ เพราะอะไร
function App() {
  return (
    <h1>Welcome to Thailand</h1>
    <h2>Land of smile</h2>
  );
}
>> ไม่ได้ เพราะ JSX ต้องมี root element เพียงอันเดียว

5. โค้ดด้านล่างทำงานได้หรือไม่ เพราะอะไร
function App() {
  return (
    <div>
      <span>My name is John.</span>
      <br>
      <span>I'm 27 years old.</span>
    </div>
  );
}
>>
ไม่ได้ เพราะ JSX ต้องมีการปิด tag เสมอ
<br> ควรแก้ไขเป็น <br></br> หรือ <br/>

6. 
- ให้สร้างตัวแปร 6 ตัวเก็บค่าอะไรก็ได้ แต่จะต้องมี data type เป็น String Number Boolean null undefined และ object
- ให้ render ตัวแปรทั้ง 6 ออกมาในหน้า web
>> main.js