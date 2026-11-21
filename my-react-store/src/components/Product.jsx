import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import { useState } from "react";


function Product(props) {
    const [quantity, setQuantity] = useState(1);
    const total = props.data.price * quantity;

    function handleQtyChange(newQuantity) {
        setQuantity(newQuantity);
    }

    return (
        <div className="product surface">
            <img src={`/images/${props.data.image}`} alt={props.data.title} />
            <h5>{props.data.title}</h5>
            <span>Price: ${props.data.price.toFixed(2)}</span>
            <span className="total">Total: ${total.toFixed(2)}</span>
            <QuantityPicker value={quantity} onChange={handleQtyChange} />
        </div>
    )
}

export default Product;
