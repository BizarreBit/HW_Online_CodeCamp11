Online CodeCamp 11

NodeJS LAB2 CommonJS Modules
1. 
- ให้สร้างไฟล์ index.js
- ให้ import module fs ซึ่งเป็น built-in module ใน Node.js
> const fs = require("fs")

- ให้ install axios และ uuid
> npm i axios uuid

- ให้ import axios และ uuid เข้ามาใช้งาน 
>
const axios = require("axios");
const uuid = requird("uuid")

2.
- ให้สร้างไฟล์ fileService.js
- ให้เขียนฟังก์ชัน readFileJSON(fileName) และ return ค่าเป็น promise ของข้อมูลในไฟล์ที่ทำการ parse แล้ว
- ให้เขียนฟังก์ชัน writeFileJSON(fileName, data) เพื่อ save data เข้าไปในไฟล์
- export ฟังก์ชันทั้งสองออกไปใช้โดยให้ลองเขียน export ทั้ง 2 วิธี
- ลองเรียกใช้ module ที่สร้างในไฟล์ index.js

3.
- ให้สร้างไฟล์ customError.js
- ในไฟล์ที่สร้าง ให้สร้าง class CustomError ให้ inherit จาก class Error
- CustomError ให้มี property ชื่อ statusCode
- instance จาก class CustomError ให้สร้างโดยใช้ syntax: new CustomError(errorMessage, statusCode)
- export class ที่สร้าง
- ลอง import customError และเรียกใช้งาน
