Online CodeCamp 11

NodeJS LAB5 Query String
1. ให้เขียนโค้ดเพื่อส่ง Response ตาม Request ที่เข้ามาดังนี้
- GET /sum?a=2&b=6			Response: { sum: 8 }
- GET /sum?a=1&b=4&c= …		Response: { sum: ผลรวมของทั้งหมด }
- GET /sum?arr=[1, 2, 4]			Response: { sum: 7 }

2. ให้ Download ไฟล์ Country จาก https://drive.google.com/file/d/1NM2jd7sD9VCR4doHHVtDbCm-qJLdw-I_/view แล้วเขียนโค้ดเพื่อส่ง Response ดังนี้
- GET /countries?region=Asia
Response: { countries: [ object ของ country ที่ region เป็น Asia ] }
- GET /countries?nameinclude=land		
Response: { countries: [ object ของ country ที่ name มีคำว่า land ] }
- GET /countries?limit=10&offset=40		
Response: { countries: [ object ของ country 10 อัน ตั้งแต่อันที่ 41 ] }
