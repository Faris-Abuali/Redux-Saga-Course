import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from '../../state';
import { Product } from '../../state/types';
import "../styles/Cart.css";
import { removeFromCart } from '../../state/actionCreators';
import { useDispatch } from 'react-redux';

type Props = {}

const Cart = (props: Props) => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart);
    const originalPrice: number = cart?.length && cart.map((product: Product) => product.price).reduce((a: number, b: number) => a + b);
    const discount: number = +(originalPrice / 10).toFixed(2);
    const tax: number = +(0.02 * originalPrice).toFixed(2);



    useEffect(() => {
        // Detecting browser tab closing

        if (cart.length)
            window.addEventListener("beforeunload", beforeUnloadListener, { capture: true });


        return () => {
            window.removeEventListener("beforeunload", beforeUnloadListener, { capture: true });
        }
    }, []);

    const beforeUnloadListener = (event: any) => {
        event.preventDefault();
        return event.returnValue = "Are you sure you want to exit?";
    };

    return (
        <section className="main-container">
            <h1>My Cart</h1>
            <div className="container">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Quantity</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                    {
                        cart.map((product: Product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product?.color ?? "-"}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <img
                                        src={product.url}
                                        alt={product.name}
                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td>
                                    <button onClick={() => removeFromCart(product?.id)(dispatch)}>
                                        <img
                                            src="https://thumbs.dreamstime.com/b/trash-icon-isolated-white-background-photography-collection-trendy-modern-symbol-logo-web-app-ui-simple-sign-flat-183703017.jpg"
                                            alt="trash-icon"
                                            width={40}
                                            height={40}
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </table>
                <div className="price-details">
                    <div className='adjust-price'>
                        <span>Original Price</span>
                        <span>${originalPrice}</span>
                    </div>
                    <div className='adjust-price'>
                        <span>Discount</span>
                        <span>${discount}</span>
                    </div>
                    <div className='adjust-price'>
                        <span>Tax</span>
                        <span>${tax}</span>
                    </div>
                    <div className='adjust-price'>
                        <span>Total</span>
                        <span>${originalPrice - discount + tax}</span>
                    </div>
                </div>
            </div>

            <Link to="/">
                Return to products list
            </Link>
        </section>
    )
}

export default Cart