import './App.css';
import {useState} from 'react';
import Axios from 'axios';

function App() {

  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState(0)

  const [productsList, setProductList] = useState([])

  const displayInfo = () => {
    console.log(productName, productPrice)
  }

  const addProduct = () => {
    Axios.post('http://localhost:3001/create', 
    {
      product_name: productName, 
      product_price: productPrice
    }).then(() => {
      setProductList([
        ...productList, 
        {
          product_name: productName,
          product_price: productPrice
        },
      ]);
    });
  };    

  const productList = () => {
    Axios.get('http://localhost:3001/products').then((res) => {
      setProductList(res.data)  
    })
  }

  return (
    <div className='App'>
      <div className='input'>
        <label>Product Name:</label>
        <input type='text' onChange={(event) => {setProductName(event.target.value)}}/>
        <label>Product Price:</label>
        <input type='number' onChange={(event) => {setProductPrice(event.target.value)}}/>
        <button onClick={addProduct}>Add Product</button>
      </div>
      <div className='output'>
        <button onClick={productList}>Show Products</button>
      
        {productsList.map((val, key) => {
          return (
          <div className='products'>
            <div className='List'>
              <h3>Product Name: {val.product_name}</h3><br></br>
              <h3>Product Price: {val.product_price}</h3>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;