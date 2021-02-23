import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const style = {
    color: 'red',
    backgroundColor: 'black'
  }
  const name = ['Bangladesh', 'America', 'Canada', 'Pakistan'];
  const products = [{ name: 'Photoshop', price: '$90.99' },
  { name: 'Illustrator', price: '$60.99' },
  { name: 'PDF Reader', price: '$30.99' }];
  const productNames = products.map(product => product.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={style}>My name is Junayed </p>
        <p>I am {16 + 1}years old</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            name.map(names => <li>{names}</li>)
          }
          {/* <li>{name[0]}</li>
          <li>{name[1]}</li>
          <li>{name[2]}</li> */}
        </ul>
        <Person name={name[0]}></Person>
        <Person name={name[1]}></Person>
        <Person name={name[2]}></Person>
        <Person name={name[2]}></Person>
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1)
  const handleDecrease = () => setCount(count - 1)
  // console.log('clicked');
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}
function Users() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    console.log('calling Effect');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return (
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props) {
  const productStyle = {
    border: '1px solid goldenrod',
    borderRadius: '5px',
    backgroundColor: 'gray',
    height: '300px',
    width: '400px',
    display: 'inline-block'
  }
  // const {name,price}={name:'Photoshop',price:'$90.99'},
  return (
    <div style={productStyle}>
      <h2>{props.name}</h2>
      <h1>{props.price}</h1>
      <button>Buy now</button>
    </div>
  );
}
function Person(props) {
  const personStyle = {
    border: '2px solid red',
    margin: '10px'
  }
  console.log(props);
  return (
    <div style={personStyle}>
      <h1>Hello {props.name}</h1>
      <h3>Hello World</h3>
    </div>
  )
}

export default App;
