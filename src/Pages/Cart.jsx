import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

function Cart() {
    // Getting data from the store
    const itemsInCart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const handleRemove = (productId) => {
        dispatch(remove(productId))
    }

    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {
                    itemsInCart.map((product) => (
                        <div className="cartCard" key={product.id}>
                            <img src={product.image} alt="" />
                            <h4>{product.title}</h4>
                            <h5>${product.price}</h5>
                            <button onClick={()=>handleRemove(product.id)} className="btn">Remove Item</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Cart;
