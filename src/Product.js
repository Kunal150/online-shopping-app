import React from 'react';
import './Product.css';
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    console.log('this is the basket >>> ', basket);

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id:id,
                title: title,
                image: image,
                price: price,
           },
       });
    };

    return(
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>Rs</small>
                <strong>{price}</strong>
            </p>
            
         </div>
         <img src={image}
         />

         <button onClick={addToBasket}>ADD TO BASKET</button>
         </div>
         );
}

export default Product;