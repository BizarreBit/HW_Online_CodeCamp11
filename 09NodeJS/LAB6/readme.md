Online CodeCamp 11

NodeJS LAB6 Path Parameter
1. ให้สร้าง Route เพื่อกำหนด path โดยมี parameter ดังนี้
- GET /sum/7/9				Parameter คือ a = 7 และ b = 9
- POST /products/6740			Parameter คือ id = 6740
- GET /users/9471/bookings/8673		Parameter คือ id = 9471 และ bId = 8673

2. จาก file Country ให้สร้าง Route เพื่อกำหนด path โดยมี parameter ดังนี้
- GET /countries/albania มี Parameter ชื่อ commonName มีค่า albania และให้ ส่ง Response ออกไปเป็น { country: object ของ country ที่มีชื่อ common name ตามค่าใน Parameter } 
