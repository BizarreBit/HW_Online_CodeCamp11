Online CodeCamp 11

Advanced JS Exercise 7 Array Method

1. ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.map()
1.1 array1 = [1, 2, 30, 400]
array2 [2, 4, 60, 800]
>>
let array1 = [1, 2, 30, 400];
let array2 = array1.map( x => x * 2 );

1.2 array1 = [1, 2, 3, 4]
array2 ["1", "2", "3", "4"]
>>
let array1 = [1, 2, 3, 4];
let array2 = array1.map( x => x.toString() );

1.3 array1 = [1, "1", 2, {}]
array2 ["number", "string", "number", "object"]
>>
let array1 = [1, "1", 2, {}];
let array2 = array1.map( x => typeof(x) );

1.4 array1 = ["apple", "banana", "orange"]
array2 ["APPLE", "BANANA", "ORANGE"]
>>
let array1 = ["apple", "banana", "orange"];
let array2 = array1.map( x => x.toUpperCase() );

1.5 array1 = [
{ name: "apple", age: 14 },
{ name: "banana", age: 18 },
{ name: "watermelon", age: 32 }]
array2 ["apple", "banana", "watermelon"]
>>
let array1 = [
{ name: "apple", age: 14 },
{ name: "banana", age: 18 },
{ name: "watermelon", age: 32 }];
let array2 = array1.map( x => x.name );

1.6 array1 = [
{ name: "apple", age: 14 },
{ name: "banana", age: 18 },
{ name: "watermelon", age: 32 }]
array2 [14, 18, 32]
>>
let array1 = [
{ name: "apple", age: 14 },
{ name: "banana", age: 18 },
{ name: "watermelon", age: 32 }];
let array2 = array1.map( x => x.age );

1.7 array1 = [
{ name: "apple", surname: "London" },
{ name: "banana", surname: "Bangkok" },
{ name: "watermelon", surname: "Singapore" }]
array2 ["apple London", "banana Bangkok", "watermelon Singapore"]
>>
let array1 = [
{ name: "apple", surname: "London" },
{ name: "banana", surname: "Bangkok" },
{ name: "watermelon", surname: "Singapore" }];
let array2 = array1.map( x => `${x.name} ${x.surname}` );

1.8 array1 = [1,3,4,5,6,7,8]
array2 ["odd", "odd", "even", "odd", "even", "odd", "even"]
>>
let array1 = [1,3,4,5,6,7,8];
let array2 = array1.map( x => (x%2) ? "odd" : "even" );

1.9 array1 = [1, -3, 2, 8, -4, 5]
array2 [1, 3, 2, 8, 4, 5]
>>
let array1 = [1, -3, 2, 8, -4, 5];
let array2 = array1.map( x => Math.abs(x) );

1.10 array1 = [100, 200.25, 300.84, 400.3]
array2 ["100.00", "200.25", "300.84", "400.30"]
>>
let array1 = [100, 200.25, 300.84, 400.3];
let array2 = array1.map( x => x.toFixed(2).toString());

1.11 array1 = [
{ name: "apple", birth: "2000-01-01" },
{ name: "banana", birth: "1990-10-01" },
{ name: "watermelon", birth: "1985-12-01" }]
array2 [
{ name: "apple", birth: "2000-01-01", age: 19 },
{ name: "banana", birth: "1990-10-01", age: 29 },
{ name: "watermelon", birth: "1985-12-01", age: 33 }]
>>
let array1 = [
{ name: "apple", birth: "2000-01-01" },
{ name: "banana", birth: "1990-10-01" },
{ name: "watermelon", birth: "1985-12-01" }];

function birthdayToAge (birthdayStr) {
    let birthdayTimestamp = Date.parse(birthdayStr);
    let diffTimestamp = new Date (Date.now() - birthdayTimestamp);
    return diffTimestamp.getFullYear() - 1970;
}

let array2 = array1.map( x => {
    let arr = {};
    Object.assign(arr, x)
    arr.age = birthdayToAge(arr.birth)
    return arr;
} );

1.12 array1 = [
{ name: "apple", birth: "2000-01-01" },
{ name: "banana", birth: "1990-10-10" },
{ name: "watermelon", birth: "1985-12-30" }]
array2 [
"<tr> <td>apple</td> <td>01 jan 2000</td> </tr>",
"<tr> <td>banana</td> <td>10 oct 1990</td> </tr>",
"<tr> <td>watermelon</td> <td>30 dec 1985</td> </tr>"]

>>
let array1 = [
{ name: "apple", birth: "2000-01-01" },
{ name: "banana", birth: "1990-10-10" },
{ name: "watermelon", birth: "1985-12-30" }]

function ddMMMyyyy(str) {
    date = new Date(str);
    zeroFilledDate = ('0' + date.getDate()).slice(-2);
    return `${zeroFilledDate} ${date.toLocaleString("default", {month: "short"}).toLowerCase()} ${date.getFullYear()}`;
}

let array2 = array1.map( x => `<tr> <td>${x.name}</td> <td>${ddMMMyyyy(x.birth)}</td> </tr>`);


2. ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.filter()
2.1 array1 = [1, 2, 30, 400]
array2 [30, 400] // filter เลขที่มากกว่า 10
>>
let array1 = [1, 2, 30, 400];
let array2 = array1.filter ( x => x > 10 );

2.2 array1 = [1, 2, 3, 4]
array2 [1, 3] // filter เลขคี่
>>
let array1 = [1, 2, 3, 4]
let array2 = array1.filter ( x => x % 2 );

2.3 array1 = [1, "1", 2, {}]
array2 [1, 2] // filter Number
>>
let array1 = [1, "1", 2, {}];
let array2 = array1.filter ( x => typeof(x) === 'number' );

2.4 array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]
array2 ["pineapple", "watermeon"] // filter ตัวอักษร > 6
>>
let array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]
let array2 = array1.filter ( x => x.length > 6 )

2.5 array1 = [
{ name: "apple", age: 14 },
{ name: "banana", age: 18 },
{ name: "watermelon", age: 32 },
{ name: "pineapple", age: 16 },
{ name: "peach", age: 24 }]
array2 [
{ name: "apple", age: 14 },
{ name: "pineapple", age: 16 },
] // filter age < 18
>>
let array1 = [
{ name: "apple", age: 14 },
{ name: "banana", age: 18 },
{ name: "watermelon", age: 32 },
{ name: "pineapple", age: 16 },
{ name: "peach", age: 24 }];
let array2 = array1.filter ( x => x.age < 18 );

2.6 array1 = [
{ name: "apple", age: 14 },
{ name: "banana", age: 18 },
{ name: "watermelon", age: 32 },
{ name: "pineapple", age: 16 },
{ name: "peach", age: 24 }]
array2 [
{ name: "apple", age: 14 },
{ name: "banana", age: 18 },
{ name: "pineapple", age: 16 },
{ name: "peach", age: 24 },
] // filter ไม่เอาคนที่อายุ 32
>>
let array1 = [
{ name: "apple", age: 14 },
{ name: "banana", age: 18 },
{ name: "watermelon", age: 32 },
{ name: "pineapple", age: 16 },
{ name: "peach", age: 24 }];
let array2 = array1.filter ( x => x.age !== 32 );

2.7 array1 = [1, -3, 2, 8, -4, 5]
array2 [1, 2, 8, 5] // filter เลขบวก
>>
let array1 = [1, -3, 2, 8, -4, 5];
let array2 = array1.filter ( x => x > 0 );

2.8 array1 = [1,3,4,5,6,7,8]
array2 [3, 6] // filter เลขหาร 3 ลงตัว
>>
let array1 = [1,3,4,5,6,7,8];
let array2 = array1.filter ( x => !(x % 3) );

2.9 array1 = ["peach", 1, -3, "2", {}, []]
array2 ["peach", "2"] // filter string
>>
let array1 = ["peach", 1, -3, "2", {}, []];
let array2 = array1.filter ( x => typeof (x) === "string" );

2.10 array1 = ["APPLE", "appLE", "PEACH", "PEach"]
array2 = ["APPLE", "PEACH"] // filter คำที่เป็นอักษรใหญ่ทุกตัว
>>
let array1 = ["APPLE", "appLE", "PEACH", "PEach"];
let array2 = array1.filter ( x => x === x.toUpperCase() );

2.11 array1 = [
{ name: "apple", birth: "2001-01-01" },
{ name: "banana", birth: "1990-10-10" },
{ name: "watermelon", birth: "1985-12-30" },
{ name: "peach", birth: "2002-10-13" }]
array2 [
{ name: "banana", birth: "1990-10-10" },
{ name: "peach", birth: "2002-10-13" },
] // filter คนเกิดเดือน 10
>>
let array1 = [
{ name: "apple", birth: "2001-01-01" },
{ name: "banana", birth: "1990-10-10" },
{ name: "watermelon", birth: "1985-12-30" },
{ name: "peach", birth: "2002-10-13" }];
let array2 = array1.filter ( x => +x.birth.split('-')[1] === 10 );

2.12 array1 = [
{ name: "apple", birth: "2001-01-01" },
{ name: "banana", birth: "1990-10-10" },
{ name: "watermelon", birth: "1985-12-30" },
{ name: "peach", birth: "2002-10-13" }]
array2 [
{ name: "banana", birth: "1990-10-10" },
{ name: "watermelon", birth: "1985-12-30" },
] // filter คนเกิดก่อนปี 2000
>>
let array1 = [
{ name: "apple", birth: "2001-01-01" },
{ name: "banana", birth: "1990-10-10" },
{ name: "watermelon", birth: "1985-12-30" },
{ name: "peach", birth: "2002-10-13" }];
let array2 = array1.filter ( x => +x.birth.split('-')[0] < 2000 );
