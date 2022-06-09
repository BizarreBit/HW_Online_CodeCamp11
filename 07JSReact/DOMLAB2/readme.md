Online CodeCamp 11

DOM Lab 2 Modifying the Document

1. จงเขียนคำสั่งเพื่อ Alert ค่าที่อยู่ใน <li> ทุกตัว
<ul>
  <li>Cows</li>
  <li>Donkeys</li>
  <li>Dogs</li>
  <li>Tigers</li>
</ul>

2. จงสร้าง <ul>
- เขียนคำสั่ง prompt เพื่อรับข้อความ
- นำข้อความที่ได้มาสร้าง <li> และ เพิ่มเข้าไปใน <ul>
- เพิ่มไปเรื่อยๆจนกว่าผู้ใช้จะกด Cancel หรือ พิมพ์ข้อความว่าง

3. จงเขียนฟังก์ชัน clear(elem) เพื่อลบ <li> ภายใน <ol> ทั้งหมด
<ol id="elem">
  <li>Hello</li>
  <li>World</li>
</ol>
<script>
  function clear(elem) { /* your code */ }
  clear(elem); // clears the list
</script>

4. จงเขียนคำสั่งเพื่อเปลี่ยนสีพื้นหลังของ button ให้เป็นสีแดงเมื่อเวลาผ่านไป 3 วินาที หลังจากนั้นอีก 3 วินาทีให้เปลี่ยนสีพื้นหลังกลับมาเหมือนเดิม
- ใช้วิธีเปลี่ยน property style ของ element object
- ใช้วิธีเพิ่มลด class
<button class="btn">Submit</button>
