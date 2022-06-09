Online CodeCamp 11

DOM Lab 1 Document Object Model

1. จงเขียนคำสั่งเพื่อ access <div>, <ul>, <li> ตัวแรก และ <li> ตัวที่สอง

<html>
<body>
  <div>Users:</div>
  <ul>
    <li>John</li>
    <li>Pete</li>
  </ul>
</body>
</html>

>>
const div = document.querySelector("div");
console.log(div);
const ul = document.querySelector("ul");
console.log(ul);
const firstLi = ul.firstElementChild;  // ul.children[0];
console.log(firstLi);
const secondLi = firstLi.nextElementSibling;
console.log(secondLi);

2. จงเขียนคำสั่งเพื่อ access <h2> โดยใช้วิธีต่อไปนี้
- querySelector
- querySelectorAll
- getElementsByClassName
- getElementsByTagName

<div>
  <h2 class="title-1">List of companies</h2>
  <ul>
    <li id="1">Google</li>
    <li class="active" id="2">Yahoo</li>
    <li id="3">Tencent</li>
  </ul>
</div>

>>
let h2;

h2 = document.querySelector("h2"); //document.querySelector(".title-1");
console.log(h2);

h2 = document.querySelectorAll("h2")[0];
console.log(h2);

h2 = document.getElementsByClassName("title-1")[0];
console.log(h2);

h2 = document.getElementsByTagName("h2")[0];
console.log(h2);

3. จงเขียนคำสั่งเพื่อ access <li> ตัวที่สามตามโค้ดในข้อที่ 2 โดยใช้วิธีต่อไปนี้
- querySelector
- querySelectorAll
- getElementById
- getElementsByTagName

>>
let thirdLi;

thirdLi = document.querySelector("li").nextElementSibling.nextElementSibling;
console.log(thirdLi);
thirdLi = document.querySelector("ul").lastElementChild;
console.log(thirdLi);
thirdLi = ducument.querySelector("ul li:last-child");
console.log(thirdLi);

thirdLi = document.querySelectorAll("li")[2];
console.log(thirdLi);
thirdLi = ducument.querySelectorAll("ul li:last-child")[0];
console.log(thirdLi);

thirdLi = document.getElementById("3");
console.log(thirdLi);

thirdLi = document.getElementsByTagName("li")[2];
console.log(thirdLi);

4. จงเขียนคำสั่งเพื่อ access <li> ตัวที่สองตามโค้ดในข้อที่ 2 โดยใช้วิธีต่อไปนี้
- querySelector
- querySelectorAll
- getElementsByClassName
- getElementById
- getElementsByTagName

>>
let secondLi;

secondLi = document.querySelector("li").nextElementSibling;
console.log(secondLi);
secondLi = document.querySelector(".active")
console.log(secondLi);

secondLi = document.querySelectorAll("li")[1];
console.log(secondLi);
secondLi = document.querySelectorAll(".active")[0]
console.log(secondLi);

secondLi = document.getElementsByClassName("active")[0];
console.log(secondLi);

secondLi = document.getElementById("2");
console.log(secondLi);

secondLi = document.getElementsByTagName("li")[1];
console.log(secondLi);