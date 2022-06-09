Online CodeCamp 11

NodeJS LAB8 Middleware
1. 
- ให้เรียกใช้ express.json() ซึ่งเป็น built-in middleware ของ express
- ให้เรียกใช้ middleware cors จาก library cors

2. จงเขียน code เพื่อจัดการ path และ method ที่ไม่เจอบน server โดยให้ return response เป็น { message: 'path not found on this server' }

3. 
- ให้สร้าง Routing ที่ path ('/todos') มี Method เป็น GET, POST, PUT, PATCH, DELETE โดยใช้ Router Middleware
- ให้ส่ง Response กลับไปในรูปแบบ JSON มีข้อมูลดังนี้ {''message'': ''GET todos''' } โดยคำว่า ''GET'' ให้เปลี่ยนตาม HTTP Request Method
- ทดสอบโดยใช้ Postman

4. 
- ให้สร้าง server เพื่อรับ request path: '/dog' method: get แล้วให้ return ค่า random dog "https://dog.ceo/api/breeds/image/random" ออกมา 1 รูป
- ดึงข้อมูลจาก dog api โดยใช้ axios
- สร้าง Error-handling middleware เพื่อจัดการ error ที่อาจเกิดขึ้น

