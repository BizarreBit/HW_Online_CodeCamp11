Online CodeCamp 11

JS for React Exercise 1 Part 1
1. ถ้าเรามี Object
let user = {
name: "John",
years: 30
};
ให้เขียน Destrcutring assignment ที่ให้
- property ที่ชื่อ name ไปอยู่ในตัวแปร name
- property ที่ชื่อ years ไปอยู่ในตัวแปร age
- property ที่ชื่อ isAdmin ไปอยู่ในตัวแปร isAdmin (ให้เป็น false ถ้าไม่มีค่าให้กำหนด)
>>
let user = {
name: "John",
years: 30
};
let {name, years: age, isAdmin = false} = user;

2. ถ้าเรามี Object ชื่อ salaries
let salaries = {
"John": 100,
"Pete": 300,
"Mary": 250
};
ให้สร้าง function topSalary(salaries) ที่คืนค่าชื่อคนที่มีเงินเดือนสูงสุด
- ถ้า salaries ไม่มีข้อมูลให้คืนค่าเป็น null
- ถ้าสูงสุดมีหลายคน ก็ให้คืนใครก็ได้สักคน
>>
let salaries = {
"John": 100,
"Pete": 300,
"Mary": 250
};
function topSalary(salaries) {
    let lastMax = 0;
    let nameMax = null;
    for (let name in salaries) {
        if (salaries[name] > lastMax) {
            lastMax = salaries[name];
            nameMax = name;
        }
    }
    return nameMax
}