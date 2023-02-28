import React, { Component } from 'react'
import './card.css';
import './deletebutton.css';
import Card from "./card.js";
import ProductConsumer from './context';

// import dispatch from './context';
export default class Product extends Component {
  
   

//   onClickEvent = (e) => {
//     //this.state.isVisible = !this.state.isVisible;
//     this.setState({
//         isVisible: !this.state.isVisible
//     });
// }



  DeleteProduct = (dispatch, e) => {
          const {id} = this.props;
          dispatch({type: "DELETE", payload:id});
      }

  render() {
    const {name, Money, About,imageurl} = this.props;
    return (

      <ProductConsumer>
      {
        
                value => {
                  const {dispatch} = value;
                  return (
                    
        <div className="container">
        <div className="row">
        <Card
                     title={About}
                              images={imageurl}
                     old_price="9,999"
                    newPrice={Money}
                               dollar={name}
                       alt={About}
                            exp_date="10-08-2022"
          
           />
             
             <button type="button" className="deletebtn"   onClick={this.DeleteProduct.bind(this, dispatch)}>Delete</button>
  

   </div>

  
       </div>
            )
          }
               }
               </ProductConsumer>

// }
// </ProductConsumer>
     
    
    )

    }
  
}
