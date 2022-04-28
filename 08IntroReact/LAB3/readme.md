Online CodeCamp 11

Intro to React LAB 3 Components and Props
1. 
- ให้สร้าง Component ชื่อ Profile
- ใน Component ประกอบด้วย 
 > tag <h1> แสดงชื่อ John Doe
 > tag <h2> แสดงอายุมีค่าเท่ากับ 27
- ให้ render Profile ในหน้า web
>>
function Profile() {
  return (
    <div>
      <h1>John Doe</h1>
      <h2>27</h2>
    </div>
  );
}
ReactDOM.render(<Profile/>, document.getElementById("root"));

2. โค้ดในบรรทัดที่มี * ให้ผลลัพธ์เป็นอะไรและเพราะอะไร
function Car(props) {
  console.log(props.brand); // *
  console.log(props.price); // **
  console.log(props.color); // ***
  return <div>Car</div>;
}
ReactDOM.render(<Car brand="Honda" price="1000000" />, document.getElementById('root'));
>>
<Car brand="Honda" price="1000000" /> จะทำให้ React เรียกคำสั่ง Car() ขึ้นมา
โดยนำ brand="Honda" price="1000000" ไปสร้างเป็น Object {brand: "Honda", price: "100000"} ป้อนเป็นพารามิเตอร์ props ของฟังก์ชัน
ดังนั้น
* แสดง 'Honda' ตามค่า props.brand 
** แสดง'1000000' ตามค่า props.price
*** แสดง undefined เนื่องจาก props ไม่มี Keys color

3. 
- ให้สร้าง Component ชื่อ ProductItem
- ใน Component แสดงข้อมูลดังนี้
 > tag <h1> แสดงชื่อ product
 > tag <h2> แสดง price ของ product
 > tag <p> แสดง description ของ product
- ชื่อ price และ description ของ product ถูกส่งมาทาง props
- ให้ render ProductItem ในหน้า web โดยให้ส่งค่า props ทั้งสามเป็นค่าอะไรก็ได้ 
>> 
function ProductItem(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <h2>Price: {props.price}.-</h2>
      <p>{props.description}</p>
    </>
  );
}

ReactDOM.render(
  <ProductItem
    name="Product Name"
    price="99"
    description="Product Description."
  />,
  document.getElementById("root")
);

4. 
- จาก Lab ที่แล้วให้ส่ง props เข้าไปได้ค่าเดียว ชื่อ product โดยที่ props ตัวนี้จะมี data type เป็น Object
- ให้แก้ไข Component ProductItem ตาม props ที่เปลี่ยนไป
- ให้ render ProductItem ในหน้า web โดยให้ส่งค่า props ตามเงื่อนไขที่กำหนด
>>
const product = {
  name: "Product Name",
  price: 99,
  description: "Product Description.",
};

function ProductItem(props) {
  return (
    <>
      <h1>{props.product.name}</h1>
      <h2>Price: {props.product.price}.-</h2>
      <p>{props.product.description}</p>
    </>
  );
}

ReactDOM.render(<ProductItem {...product} />, document.getElementById("root"));