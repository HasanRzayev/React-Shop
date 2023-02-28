import React, { Component } from 'react'
// import { useState } from 'react';
import Product from './Product'
import ProductConsumer from './context';
import AddComponents from './AddComponents';

import  "./card.js";
// import AddProduct from './AddProduct.js';/



export default class Products extends Component {
        

  render() {
   
   
    return (
        <ProductConsumer>
            {
                value => {
                    const {products} = value;
                    return (
                        <>
                            {/* <AddComponents></AddComponents> */}
                           <div className="container">
                            {
                                
                                products.map((product)=>(
                                    <Product  id = {product.id}   name={product.name}  About={product.About}  Money={product.Money}  imageurl={product.imageurl}></Product>
                                ))
                            }
                            
                        </div>
                        </>
                     
                      
                    
                    )
                }
            }
        </ProductConsumer>
    )

        
  }
}
