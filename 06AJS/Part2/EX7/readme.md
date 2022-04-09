Online CodeCamp 11

Advanced JS Exercise 7 Array
1. ผลลัพธ์ของความยาว array คืออะไร
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
alert( fruits.length ); // ?
>> 4 
เนื่องจาก Array เป็น Object ตัวแปรที่ถูกประกาศให้เก็บ Object นั้นจะเก็บค่าที่อยู่อ้างอิงของ Object ไม่ใช่ค่าของ Object การให้ค่าตัวแปรดังกล่าวแก่ตัวแปรอื่น จึงเป็นการให้ค่าที่อยู่อ้างอิงของ Object นั้น 
ตัวแปรทุกตัวที่เก็บค่าที่อยู่อ้างอิงของ Object เดียวกัน จะสามารถเข้าถึงการเปลี่ยนแปลงได้เช่นเดียวกันแม้ Object นั้นถูกเปลี่ยนค่าไปผ่านตัวแปรใดก็ตาม

2. ให้ทำตามขั้นตอนต่อไปนี้
- สร้าง array ชื่อ styles ที่มี items ชื่อ “Jazz” และ “Blues”
- เพิ่ม “Rock-n-Roll” ต่อท้าย
- นำค่า Classics ไปทับค่าตรงกลางของ Array
- นำ items ตัวแรกออกมาและลบ items ตัวนั้นออกจาก array
- เพิ่ม “Rap” และ “Reggae” ไปข้างหน้าของ Array
>>
let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[1] = 'Classics';
styles.unshift('Rap','Reggae');


3. เขียนฟังก์ชัน sumInput() ที่
- ใช้ prompt รับ value มาเก็บใน array
- หยุดถามเมื่อเจอค่าที่ไม่ใช่ ตัวเลข
- คำนวณผลรวมของตัวเลขทั้งหมดใน Array
>>
function sumInput(){
    let arr = [];
    let sum = 0;

    while(true) {
        arr.push(+prompt('value?'));
        
        if (isNaN(arr[arr.length - 1])) {
            arr.pop();
            break;
        }
    }

    for (let n of arr) {
        sum += n;
    } 

    return sum;
}

4. Maximal contiguous subarray (**Optional**)
ให้เขียนฟังก์ชัน getMaxSubSum(arr) ที่ return ผลรวมของ subarray ที่มากที่สุดที่ติดกัน

getMaxSubSum([-1, 2, 3, -9]) == 5           // [2, 3]
getMaxSubSum([2, -1, 2, 3, -9]) == 6        // [2, -1, 2, 3]
getMaxSubSum([-1, 2, 3, -9, 11]) == 11      // [11]
getMaxSubSum([-2, -1, 1, 2]) == 3           // [1, 2]
getMaxSubSum([100, -9, 2, -3, 5]) == 100    // [100]
getMaxSubSum([1, 2, 3]) == 6                // [1, 2, 3] (take all)
>>
function getMaxSubSum(arr) {
    let currentSum 
    let lastMaxSum = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1 + i; j <= arr.length; j++) {
            currentSum = getSum(arr.slice(i, j));

            if (currentSum > lastMaxSum) lastMaxSum = currentSum;
        }
    }
    return lastMaxSum;
}

function getSum(arr) {
    let sum = 0;
    for (let n of arr) {
        sum += n;
    }
    return sum;
}
