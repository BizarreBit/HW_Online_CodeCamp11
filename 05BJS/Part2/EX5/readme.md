Online CodeCamp 11

Basic JS Exercise 5 ตัวดำเนินการแบบตรรกะ
1. คำสั่งต่อไปนี้จะแสดงค่าเป็นอะไร
- alert( null || 2 || undefined );
≡ alert( 2 || undefined );
≡ alert(2);
>> 2

- alert( alert(1) || 2 || alert(3) );
≡ alert(1); alert( 2 || alert(3) );
≡ alert(1); alert(2);
>> 1 ตามด้วย 2

- alert( 1 && null && 2 );
≡ alert( null && 2 );
≡ alert(null);
>> null

- alert( alert(1) && alert(2) );
≡ alert(1); alert( undefined && alert(2) );
≡ alert(1); alert(undefined);
>> 1 ตามด้วย undefined

- alert( null || 2 && 3 || 4 );
≡ alert( null || 3 || 4 );
≡ alert( 3 || 4 );
≡ alert(3);
>> 3

2. เขียนคำสั่ง if ที่เช็คอายุว่า "อยู่" ระหว่าง 18 - 60
>> if (age > 18 && age < 60){}

3. เขียนคำสั่ง if ที่เช็คอายุว่า "ไม่อยู่" ระหว่าง 18 - 60
>> if (!(age > 18 && age < 60)){}
>> if (age <= 18 || age >= 60){}

4. คำสั่ง alert ไหนที่จะถูกรันบ้าง
- if (-1 || 0) alert( 'first' );
≡ if (-1) alert( 'first' );
≡ alert( 'first' );
>> รัน

- if (-1 && 0) alert( 'second' );
≡ if (-1 && 0) alert( 'second' );
≡ if (0) alert( 'second' );
≡ if (false) alert( 'second' );
>> ไม่รัน

- if (null || -1 && 0) alert( 'third' );
≡ if (null || 0) alert( 'third' );
≡ if (false) alert( 'third' );
>> ไม่รัน

5. ให้เขียนระบบ login
- ให้ใช้ prompt ในการถามใครเป็นคน login

- ถ้าผู้ใช้กรอกว่า “Admin” ให้ใช้ prompt ถาม password
-- วิธีเช็ค Password
-- ถ้า string นั้นเป็น “codecamp#11” ให้ alert “ยินดีต้อนรับ”
-- ถ้า string เป็นอย่างอื่นให้ alert เป็น “รหัสผ่านผิด”
-- ถ้าเป็น string ว่าง หรือ กด cancel ให้ alert ว่า “ยกเลิก”

- ถ้าผู้ใช้กรอกอย่างอื่นที่ไม่ใช่ “Admin” ให้ alert ว่า “ฉันไม่รู้จักคุณ”

- ถ้าผู้ใช้กรอก input เป็น string ว่าง หรือกด Esc ให้ alert ว่า “ยกเลิก”

>>EX5-5.html
