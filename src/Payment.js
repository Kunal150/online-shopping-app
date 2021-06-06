import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Payment() {
    const [{basket,user},dispatch] = useStateValue();
    return (
        <div className='payment'>

            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length}  item</Link>
                    )
                </h1>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>Agra</p>
                        <p>UP</p>


                    </div>


                    </div>

                    <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(items => (
                        <CheckoutProduct
                        id={items.id}
                        title={items.title}
                        image={items.image}
                        price={items.price}
                        />



                        ))}
                    </div>

                   
                </div>
                <div  className='payment__section'>
                <div className='payment__title'>
                        <h3>Payment Methood</h3>
                    </div>


                  </div>
            </div>
            
        </div>
    )
}

export default Payment
