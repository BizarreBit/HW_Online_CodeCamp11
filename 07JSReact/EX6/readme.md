Online CodeCamp 11

JS for React Exercise 6 Decorator, Call, and Apply
1. Lab ให้สร้าง decorator ฟังก์ชัน ชื่อ spy(func) โดยทำให้ work ที่รับ argument เข้าไป return ค่า ออกมาเป็น “call : argument1, argument2”
function work(a, b) {
    console.log( a + b ); // work จะเป็น ฟังก์ชัน หรือ method ก็ได้
}
work = spy(work);
work(1, 2); // 3
work(4, 5); // 9
for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
>>
function spy(func) {
    function wrapper() {
        wrapper.calls.push([...arguments]);
        func.apply(this, arguments);  
    }
    wrapper.calls = [];
    return wrapper;
}
function work(a, b) {
    console.log( a + b ); // work จะเป็น ฟังก์ชัน หรือ method ก็ได้
}
work = spy(work);
work(1, 2); // 3
work(4, 5); // 9
for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

2. Lab ให้สร้าง decorator ฟังก์ชัน ชื่อ delay() รับค่า argument 2 ตัว เป็น f และเวลาในการ delay เป็นหน่วยมิลลิวินาที
function f(x) {
    alert(x);
}
// ให้สร้าง decorator ฟังก์ชันที่ ครอบ f ฟังก์ชัน
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);
f1000("test"); // แสดง "test" หลังจาก 1000ms
f1500("test"); // แสดง "test" หลังจาก 1500ms
>>

function delay(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms)
    };
}
function f(x) {
    alert(x);
}
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);
f1000("test"); // แสดง "test" หลังจาก 1000ms
f1500("test"); // แสดง "test" หลังจาก 1500ms