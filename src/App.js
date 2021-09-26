import './App.css';

function App() {
  return (
    <div className="App">
      <h2>My First Card</h2>
      <div className="card-cont">
        <div className="top">
          <div className="product-info">
            <h3>Product Name</h3>
            <p>Thadi Lassi</p>
          </div>
          <div className="product-info">
            <h3>Price</h3>
            <p>70 / Glass</p>
          </div>
          <div className="product-info">
            <h3></h3>
            <p>70 / Glass</p>
          </div>
          <div className="circle">
            <img class="subject-img"src="./lassi.jpg"></img>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}

export default App;
