
// Define the product form component
import React, { useContext, useState } from "react";
import ProductConsumer from './context';
import './AddProduct.css';

import ProductContext from './context';

const   AddProduct = () => {
  const { dispatch } = useContext(ProductContext);
  const [name, setname] = useState("");
  const [Money, setMoney] = useState("");
  const [imageurl, setimageurl] = useState("");
  const [id, setid] = useState("");
  const [About, setAbout] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_PRODUCT",
      payload: { id:id, name: name, Money: Money ,About: About, imageurl: imageurl},
    });
    setname("");
    setMoney("");
    setimageurl("");
    setid("");
    setAbout("");
  };

  
  return (
    // <ProductConsumer>
    // {
      
    //           value => {
    //             const {dispatch} = value;
    //             return (
      <>
          <form   onSubmit={handleSubmit}>
        <h3>Create Product</h3>
        <div className="mb-3">
          <label>Id</label>
          <input
             type="id"
             className="form-control"
             value={id}
             onChange={(e) => setid(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Product Name</label>
          <input
        type="text"
        className="form-control"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
        </div>
        <div className="mb-3">
          <label>Product About</label>
          <input
        type="text"
        className="form-control"
        value={About}
        onChange={(e) => setAbout(e.target.value)}
      />
        </div>
        <div className="mb-3">
          <label>Product  Price</label>
          <input
        type="text"
        className="form-control"
        value={Money}
        onChange={(e) => setMoney(e.target.value)}
      />
           </div>
        <div className="mb-3">
          <label>Product  imageurl</label>
          <input
        type="text"
        className="form-control"
        value={imageurl}
        onChange={(e) => setimageurl(e.target.value)}
      
      />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
       
      </form>
      {/* <form onSubmit={handleSubmit}>
      <input
        type="id"
        value={id}
        onChange={(e) => setid(e.target.value)}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
       <input
        type="text"
        value={imageurl}
        onChange={(e) => setimageurl(e.target.value)}
      />
      <input
        type="text"
        value={About}
        onChange={(e) => setAbout(e.target.value)}
      />
        <input
        type="text"
        value={Money}
        onChange={(e) => setMoney(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form> */}
      </>
   
    )
              // }
              //      }
              //      </ProductConsumer>
  // );
};

export default  AddProduct