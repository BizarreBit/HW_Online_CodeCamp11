Online CodeCamp 11

JS for React Exercise 7 การ bind function
1. lab this มีค่าเป็นอะไร
function f() {
    alert( this ); // ?
}
let user = {
    g: f.bind(null)
};

user.g();
>> user.g ถูก bind โดยตั้งค่า this ให้ชื้ไปยัง null นั้นคือ this จะมีค่าเป็น null
แต่เมื่อถูกเรียกใช้ เบราว์เซอร์จะพบว่า this ไม่ได้ชี้ไปยัง Object ที่ถูกต้อง
จึงจะดำเนินการต่อโดยใช้ Global Object window ทดแทนโดยอัตโนมัติ
สุดท้าย alert( this ); จะแสดงค่า [object Window] แทน

2. lab ผลลัพธ์ที่ได้คืออะไร
function f() {
    alert(this.name);
}
f = f.bind( {name: "John"} ).bind( {name: "Ann" } );

f();
>> John
เนื่องจาก bind จะสร้าง Bound function exotic object ซึ่งเป็น Object คล้ายฟังก์ชัน ห่อหุ้มฟังก์ชันเดิมโดยมีการเจาะจงค่าพารามิเตอรไว้ ซึ่งในกรณีนี้คือ this  
โดยที่การเจาะจงค่าพารามิเตอร์นั้นจะทำได้เพียงครั้งแรกที่สร้าง Object ขึ้น ไม่สามารถ bind ซ้ำได้
.bind( {name: "Ann" } ); จึงไม่มีผล
f.bind( {name: "John"} ) จะทำให้ f มี this ชี้ไปยัง Object {name: "John"}
ทำให้ this.name มีค่าเป็น "John"



3. lab ค่าของ value ในฟังก์ชันจะเปลี่ยนไปไหมหลังจาก bind
function sayHi() {
    alert( this.name );
}
sayHi.test = 5;
let bound = sayHi.bind({
    name: "John"
});
>> ไม่เปลี่ยนแปลง
เนื่องจาก bind จะสร้าง Object ใหม่ห่อหุ้มฟังก์ชันเดิม โดยไม่มีการเปลี่ยนแปลงค่าของฟังก์ชันเดิม

alert( bound.test ); // ผลลัพธ์คืออะไร แล้ว ทำไมจึงได้อย่างนั้น
>> undefined
เนื่องจาก bound เป็น Object คนละตัวกับฟังก์ชัน sayHi

4. lab ทำให้ code ด้านล่างนี้ทำงานได้
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}
let user = {
    name: 'John',
    loginOk() {
        alert(`${this.name} logged in`);
    },
    loginFail() {
        alert(`${this.name} failed to log in`);
    },
};

// แก้ไข code ด้านล่างนี้
askPassword(user.loginOk, user.loginFail);
>>
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

5. lab ทำให้ code ด้านล่างนี้ทำงานได้
function askPassword(ok, fail) {
    let password = prompt("Password?",'');
    if (password == "rockstar") ok();
    else fail();
}
let user = {
    name: 'John',
    login(result) {
        alert( this.name + (result ? ' logged in': ' failed to log in') );
    }
};

askPassword(?, ?); // ?
>>
askPassword(user.login.bind(user, true), user.login.bind(user, false));