import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import { useState } from "react";


function Product(props) {
    const [quantity, setQuantity] = useState(1);
    const total = props.data.price * quantity;

    function handleQtyChange(newQuantity) {
        console.log("quantity: " + newQuantity);
        setQuantity(newQuantity);
    }

    return (
        <div className="product card">
            <img src={`/images/${props.data.image}`} alt={props.data.title} />
            <h5>{props.data.title}</h5>
            <label>Price: ${props.data.price.toFixed(2)}</label>
            <label>Total: ${total.toFixed(2)}</label>
            <QuantityPicker onChange={handleQtyChange} />
        </div>
    )
}

export default Product;
