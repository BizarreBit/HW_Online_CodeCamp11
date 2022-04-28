function Profile() {
  return (
    <div>
      <h1>John Doe</h1>
      <h2>27</h2>
    </div>
  );
}

function Car(props) {
  console.log(props.brand); // *
  console.log(props.price); // **
  console.log(props.color); // ***
  return <div>Car</div>;
}

function ProductItem(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <h2>Price: {props.price}.-</h2>
      <p>{props.description}</p>
    </>
  );
}

function ProductItemDestructuring({
  name = "Unknown",
  price = "-",
  description = "Unknown",
}) {
  //function ProductItemDestructuring(props) {
  //    const {name = 'Unknown', price = '-', description = 'Unknown'} = props
  return (
    <>
      <h1>{name}</h1>
      <h2>Price: {price}.-</h2>
      <p>{description}</p>
      {/* <SomeComponent name={name} price={price} description={description}/> 
          <SomeComponent {...props} /> */}
    </>
  );
}

const product = {
  name: "Product Name",
  price: 99,
  description: "Product Description.",
};

function ProductItem4(props) {
  return (
    <>
      <h1>{props.product.name}</h1>
      <h2>Price: {props.product.price}.-</h2>
      <p>{props.product.description}</p>
    </>
  );
}

function ProductItem4Destructuring(props) {
    const {name, price, description} = props
    return (
      <>
        <h1>{name}</h1>
        <h2>Price: {price}.-</h2>
        <p>{description}</p>
      </>
    );
  }

function Renderer() {
  return (
    <React.Fragment>
      <Profile />
      <Car brand="Honda" price="1000000" />
      <ProductItem
        name="Product Name"
        price="99"
        description="Product Description."
      />
      <ProductItem4 product={product} />
    </React.Fragment>
  );
}

ReactDOM.render(Renderer(), document.getElementById("root"));


