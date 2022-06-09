Online CodeCamp 11

DOM Lab3 Browser Event
1. คำสั่งใดทำงานได้ เมื่อ button คือ element button 
button.addEventListener('click', () => alert('1'));  // (1)
button.removeEventListener('click', () => alert('1')); // (2)
button.onclick = () => alert(2); // (3)

>> (1) และ (3)
(2) ไม่มีผลให้เห็น 
เนื่องจากตัวแปรฟังก์ชันเป็นตัวแปรที่เก็บที่อยู่อ้างอิง การใช้ Anonymus Fuction ซึ่งจะมีการเปลี่ยนที่อยู่อ้างอิงทุกครั้งที่ใช้ ทำให้ตัวแปรฟังก์ชันที่ addEventListener และ removeEventListener รับเป็น Callback Function ไม่ใช่ตัวแปรฟังก์ชันเดียวกันแม้ว่าจะมีคำสั่งแบบเดียวกัน
คำสั่ง (2) จึงไม่มีผลลบล้างคำสั่ง (1)

2. 
- จงสร้าง Form ที่มี Button สำหรับ submit form และเขียนคำสั่งเพิ่ม Event Handler ลงใน Form เมื่อผู้ใช้กด submit form ให้ Alert คำว่า “Form is submitted” โดยใช้วิธีดังนี้
  -> HTML-attribute
  -> DOM property
  -> Event listener
- จงเขียนคำสั่งยกเลิก Event Handler

3. จงสร้าง Form ที่มี Button สำหรับ submit form และเขียนคำสั่งเพื่อยกเลิกการส่ง request ไปที่ server เมื่อผู้ใช้งานกด submit form

4. 
- จงสร้างลิงค์ <a> Tag มีข้อความว่า “Google”
- เมื่อผู้ใช้ click link ให้ขึ้นคำถามว่า “Leave for https://google.com?”
- ถ้าผู้ใช้กด OK ให้ redirect ไปที่ https://google.com
- ถ้าผู้ใช้กด Cancel ให้ยกเลิก redirect ไปที่ https://google.com

5. 
- จงสร้าง <input> และมี attribute ชื่อ name มีค่าเท่ากับ “nickname”
- จงสร้าง <input> อีกอันให้มี attribute ชื่อ name มีค่าเท่ากับ “job”
- เมื่อผู้ใช้ click ที่ <input> ให้ console.log ค่า attribute name ของ <input>
- เมื่อผู้ใช้พิมพ์ค่าลงใน <input> ให้ console.log ค่าที่ผู้ใช้พิมพ์
Hint: event.target และ oninput event

6. 
- จงสร้าง Button มีข้อความว่า “Click to hide me”
- เมื่อผู้ใช้ click button ให้ซ่อน button
[Click to hide me]

7. 
- จงสร้าง Button มีข้อความว่า “Click to hide text”
- เมื่อผู้ใช้ click button ให้ซ่อน Text
[Click to hide text]
TEXT

8. 
- จงสร้าง Button มีข้อความว่า “Hide”
- เมื่อผู้ใช้ click button ให้ซ่อนข้อความและเปลี่ยนข้อความบน Button เป็น “Show” เมื่อ click button อีกครั้งให้แสดงข้อความและเปลี่ยนข้อความบน Button เป็น Hide
[Hide <--> Show]
lorem text ....

9. จงสร้าง Input และ Button ดังรูปเมื่อผู้ใช้กรอกเบอร์โทรและกด Check
- ถ้าผู้ใช้ไม่กรอกให้ขึ้นข้อความ Phone Number is required
- ถ้าผู้ใช้กรอกค่าที่ไม่ใช่ตัวเลขให้ขึ้นข้อความ Phone Number is invalid
- ถ้าผู้ใช้กรอกค่าที่มีความยาวไม่เท่ากับ 10 ให้ขึ้นข้อความ Invalid length
- ถ้ากรอกถูกต้องให้ Alert “Your number is valid”
[Phone Number           ] [Check]
Phone number is required

10. จงสร้าง Label และ Select ดังรูป
- เมื่อ click <select> ของ Province ให้แสดงรายชื่อจังหวัด
- เมื่อ click <select> ของ District ให้แสดงอำเภอของจังหวัดที่ถูกเลือก
Province: [Select v]
District: [Select v]

11. จงสร้าง Counter มี button การทำงานและตัวเลขดังรูป
- เมื่อผู้ใช้ click + ให้เพิ่มค่าตัวเลขขึ้น 1
- เมื่อผู้ใช้ click - ให้ลดค่าตัวเลขลง 1
- เมื่อผู้ใช้ click Reset ให้ reset ค่าตัวเลขเป็น 0
- ตัวเลขห้ามติดลบ
[+] 0 [-] [Reset]

12. จงสร้าง Todo List ดังรูป
- เมื่อผู้ใช้ click Add ให้เพิ่มรายการ
- เมื่อผู้ใช้ click Edit ให้แก้ไขข้อความ
- เมื่อผู้ใช้ click Del ให้ลบรายการ
- เมื่อผู้ใช้ click ที่รายการใน List ให้ Toggle เส้นที่ขีดค่าข้อความ
[Add]
-Task1- [Edit] [Del]
 Task2  [Edit] [Del]



