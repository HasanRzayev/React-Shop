import React, {Component} from 'react' 



const ProductContext = React.createContext();



const reducer = (state, action) => {
  switch(action.type) {
    case "DELETE":
      return {
        ...state,
        products: state.products.filter(product => action.payload !== product.id)
      }
    case "ADD_PRODUCT":
        return {
          ...state,
          products: [...state.products, action.payload]
        };
    default:
      return state
  }
}


export class ProductProvider extends Component {
    state = {
      products : [
        { id: 1, name: "Cap" ,imageurl:"https://cdn.dsmcdn.com/ty346/product/media/images/20220301/16/60731787/347539583/1/1_org_zoom.jpg",About:"CLIPMAN Erkek Slim Fit Basic T-shirt 5'li 2844unya",Money:"419,90 "},
        { id: 2, name: "Tshirt" ,imageurl:"https://cdn.dsmcdn.com/ty328/product/media/images/20220209/10/47387517/380740662/2/2_org_zoom.jpg",About:"CLIPMAN Erkek Slim Fit Basic T-shirt 3'li 2844unya",Money:"381.71" },
        { id: 3, name: "Tshirt-3" ,imageurl:"https://cdn.dsmcdn.com/ty460/product/media/images/20220624/20/129631028/506081058/1/1_org_zoom.jpg",About:"COMBİNE MİCHAİL Standart Kalıp Basic 5'li Paket T-shirt 1000",Money:"100" },
        { id: 4, name: "Tshirt-5" ,imageurl:"https://cdn.dsmcdn.com/ty439/product/media/images/20220524/15/115922727/486871353/1/1_org_zoom.jpg",About:"COMBİNE MİCHAİL Standart Kalıp Basic 5-li Paket T-shirt 1000 ",Money:"419,90 "},
        { id: 5, name: "Tshirt-8" ,imageurl:"https://cdn.dsmcdn.com/ty468/product/media/images/20220707/21/136668799/516255695/1/1_org_zoom.jpg",About:"COMBİNE MİCHAİL Standart Kalıp Basic 5'li Paket T-shirt 1000",Money:"381,90 "},
        { id: 6, name: "Tshirt-12" ,imageurl:"https://m.media-amazon.com/images/I/61iKMREydML._UX569_.jpg",About:"Beautiful",Money:"100" }

      ],
      
        dispatch: action => {
          this.setState(state => reducer(state,action))
        }
      };
  render() {
    return (
      <ProductContext.Provider value={this.state}>
          {this.props.children}
      </ProductContext.Provider>
    )
  }
}



const ProductConsumer = ProductContext.Consumer;


export default ProductConsumer;

