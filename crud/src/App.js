import React from 'react'
import Switch from 'react'

import './App.css';
// import './components/Nav.css';
import { Routes, Route, Link, NavLink} from 'react-router-dom'
import Products from './components/Products';
// import Home from './components/Home';
import { ProductProvider } from './components/context';
import AddProduct from './components/AddProduct';
import AddComponents from './components/AddComponents';
import Product from './components/Product';
import Home from './components/Home';







function App() {
  
  // const state  = {
  //    Products : [
  //     { id: 1, name: "Cap" ,imageurl:"https://m.media-amazon.com/images/I/61iKMREydML._UX569_.jpg",About:"Beautiful",Money:"100"},
  //     { id: 2, name: "Cap" ,imageurl:"https://m.media-amazon.com/images/I/61iKMREydML._UX569_.jpg",About:"Beautiful",Money:"100" },
  //     { id: 3, name: "Cap" ,imageurl:"https://m.media-amazon.com/images/I/61iKMREydML._UX569_.jpg",About:"Beautiful",Money:"100" },
  //   ]
  // };
  

  return(
    
    <div className='App'>
      <ProductProvider>
      <nav >
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Add'>AddProduct</NavLink>
        <NavLink to='/Products'>Products</NavLink>
        {/* <Link to='/contact'>Contact</Link> */}
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Products' element={<Products/>}/>
        <Route path='Add' element={<AddProduct/>}/>
      
      </Routes> 

      </ProductProvider>
 
      {/* <Routes>
        <Route path='/' element={<AddProduct/>}/>
        <Route path='contact' element={<AddProduct/>}/>
      
        <Route path='*' element={<AddProduct/>}/>
      </Routes>



{/* 
      <ProductProvider>
          <Products/>
      </ProductProvider> */}
    </div>
  );


  // const [val, setVal] = useState(0);
  // const decrement = () => {setVal(val - 12)}
  // return (
  //   <div className="App">
  //     <p><button onClick={() => {setVal(val + 1)}}>Inc</button></p>
  //     <p>{val}</p>
  //     <p><button onClick={decrement}>Dec</button></p>
  //   </div>
  // );
    }
  
export default App;
