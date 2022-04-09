Online CodeCamp 11

Advanced JS Exercise 9
1. ให้ arr เป็น Array  สร้าง function ชื่อ unique(arr) ให้คืนค่าเป็น unique items ของ arr
function unique(arr) {
/* your code */
}
let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];
alert( unique(values) ); // Hare, Krishna, :-O
>>
function unique(arr) {
    let set = new Set (arr);
    return Array.from(set).join(', ');
}
let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];
alert( unique(values) );

2. Anagram เป็นตัวอักษรที่มีจำนวนตัวอักษรแต่ละตัวที่เท่ากัน แต่เรียงไม่เหมือนกัน ( Optional )
nap - pan
ear - are - era
cheaters - hectares - teachers
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
>>
function alphaSort(str) {
    //return Array.from(str.toLowerCase()).sort();
    let alphabets = '';
    let arr = Array.from(str.toLowerCase()).sort();
    for (let a of arr) {
        alphabets += a;
    }
    return alphabets
}
function anagramMap(arr) {
    let wordMap = new Map();
    arr.forEach( item => {
        let alphabets = alphaSort(item);
        if (wordMap.has(alphabets)) {
            wordMap.get(alphabets).push(item);
        } else {
            wordMap.set(alphabets, [item]);
        }
    })
    return wordMap;
}
function aclean(arr) {
    let map = anagramMap(arr);
    let answer = []
    for (let i = 0; i < 2; i++) {
        let temp = []
        for (let value of map.values()) {
            temp.push(value[i]);
        }
        answer.push(temp.join(','));
    }
    console.log(`"${answer[0]}" or "${answer[1]}"`)
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
aclean(arr);

3. เราได้ array จาก map.keys() แต่ไม่สามารถใช้ push ได้ เราจะทำยังไงให้ keys.push สามารถทำงานได้
let map = new Map();
map.set("name", "John");
let keys = map.keys();
// Error: keys.push is not a function
keys.push("more");
>>
ทำให้ map.keys() เดิมซึ่งเป็น iterable object ทีไม่มี method push ให้เป็น array จริงๆ ก่อน
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");