Online CodeCamp 11

Lab2 : การหาข้อมูล Tag
1. ค้นหาข้อมูลว่าแท็ก <!doctype> มีหน้าที่อะไร? (5 นาที)
2. ถ้าอยากให้มี tooltip ใน tag นั้นต้องใช้ attribute ใด? (3นาที)
    *tooltip คือข้อความเล็กๆ ที่แสดงเมื่อเลื่อน mouse ไปวางบนบริเวณที่ระบุ
3. แท็ก <b>, <i> ต่างจาก <strong>, <em> หรือไม่ อย่างไร? (5 นาที)
4. หา tag ที่สามารถแสดงข้อความกลับหลังได้
    เช่น โปรแกรมเมอร์ แสดงเป็น ร์อมเมรกแรปโ

1. https://www.w3schools.com/tags/tag_doctype.asp
มีหน้าที่ระบุประเภทของเอกสาร (Document Type) ให้เบราว์เซอร์ทราบ

2. https://www.w3schools.com/tags/att_global_title.asp
ใช้ title="ข้อความที่ต้องการให้แสดงเป็น Tooltip" ใน Tag นั้นๆ

3. https://www.w3schools.com/html/html_formatting.asp
https://stackoverflow.com/questions/271743/whats-the-difference-between-b-and-strong-i-and-em
https://webmasters.stackexchange.com/questions/131253/regarding-seo-is-there-difference-between-em-and-i-strong-and-b-tags
Tag ทั้ง 4 ต่างก็ทำให้รูปแบบการแสดงข้อความเปลี่ยนไป โดย <b>, <strong> ทำให้ข้อความถูกแสดงด้วยอักษรตัวหนา และ <i>, <em> ทำให้ข้อความถูกแสดงด้วยอักษรตัวเอียง
อย่างไรก็ตาม <b>, <i> ส่งผลเพียงรูปแบบการแสดงผลเท่านั้น ในขณะที่ <strong>, <em> จะให้ความหมายว่าข้อความนั้นมีความสำคัญหรือถูกเน้นย้ำ เป็น Element ที่มีมีความหมายในทางระบบ (Semantic Elements)
ตัวอย่างระบบที่ใช้ประโยชน์ เช่น ระบบอ่านออกเสียงข้อความที่สามารถอ่านเน้นเสียงข้อความภายใต้ <em> ระบบการค้นหาของ Search Engine และการแสดงผลในบางกรณีของเบราว์เซอร์

4. https://www.w3schools.com/tags/tag_bdo.asp
<bdo dir="rtl">
This text will go right-to-left.
</bdo>