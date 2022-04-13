Online CodeCamp 11

JS for React Exercise 4 Native Prototype
1. ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน โดย Method นี้
จะทำหน้าที่ alert ข้อความออกมาหลังจากผ่านไป ms
function f() {
alert("Hello!");
}
f.defer(1000); // แสดง "Hello!" หลังจากผ่านไป 1 วินาที
>>
Function.prototype.defer = function(ms) {
    setTimeout(this, ms)
}

2. ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน โดย Method นี้
จะทำหน้าที่ return Function ให้ alert(a+b) เมื่อผ่านไป ms
function f(a, b) {
alert( a + b );
}
f.defer(1000)(1, 2); // แสดง 3 หลังจากผ่านไป 1 วินาที
>>
Function.prototype.defer = function(ms) {
    let f = this
    return function(a, b) {
        setTimeout( () => f(a, b), ms)
    };
}
function f(a, b) {
alert( a + b );
}
f.defer(1000)(1, 2); // แสดง 3 หลังจากผ่านไป 1 วินาที