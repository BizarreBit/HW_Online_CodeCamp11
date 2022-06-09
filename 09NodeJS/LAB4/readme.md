Online CodeCamp 11

NodeJS LAB4 Express Routing

1. 
- ให้สร้าง Routing ที่ route path ('/') มี Method เป็น Get
- ให้ส่ง Response กลับไปเป็น tag <h2> มีข้อความว่า 'My First Web App using Express'
- ให้ส่ง Response กลับไปในรูปแบบ JSON มีข้อมูลดังนี้ { ''title'':  ''My First Web App'', ''message'': ''Our Web App API'' }

2.
- ให้สร้าง Routing ที่ path ('/todos') มี Method เป็น GET, POST, PUT, PATCH, DELETE
- ให้ส่ง Response กลับไปในรูปแบบ JSON มีข้อมูลดังนี้ {''message'': ''GET todos'' } โดยคำว่า ''GET'' ให้เปลี่ยนตาม HTTP Request Method
- ทดสอบโดยใช้ Postman

3.
- ให้สร้าง Routing ที่ path ('/redirect') มี Method เป็น GET
- ให้ response redirect ไปที่ https://google.com
- ทดสอบโดยพิมพ์ path ใน browser

4.
- ให้สร้าง Routing ที่ path ('/404') มี Method เป็น GET
- ให้ส่ง Response กลับไปเป็น tag <h1> มีข้อความว่า 'This page is not found' และ Response status code เป็น 404
- ทดสอบโดยพิมพ์ path ใน browser

5.
- ให้สร้าง web server โดยมีเงื่อนไขตาม path ดังนี้
- '/' ให้ render <h1>Welcome To My Website</h1>
- '/home' ให้ render <h1>This is home page</h1>
- หาก path ไม่ตรงดังที่กล่าวมา ให้ render <h1>Page Not Found</h1>
- ทั้งหมดใช้ Method GET
- ให้ส่ง status code ให้ถูกต้องตามหลักการ

6.
- จาก Lab ที่แล้ว ให้ เขียน html code ที่จะ render แบบแยกไฟล์ เช่น path '/' ให้ render ไฟล์ index.html, path '/home'  ให้ render ไฟล์ home.html หากไม่เจอ path ให้ render ไฟล์ notfound.html

7.
- ให้สร้าง web server โดยมี path '/' ให้ render <a>login</a> และ  <a>register</a>
- เมื่อ click login ให้ redirect ไปที่ path '/login', click register ไปที่ path '/register'
- หน้า login ให้สร้าง form login หน้า register ให้ สร้าง form register เมื่อ submit form ให้ redirect ไปที่ path '/submit-login' และ '/submit-register' ตามลำดับ โดย method ใน form ให้ส่งแบบ post โดยให้ response ให้ redirect ไปที่ path '/'