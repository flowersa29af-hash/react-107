import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker(props) {
    const [quantity, setQuantity] = useState(1);
    //      name       function             initial value

    function handleDecrease() {
        // Logic to decrease quantity
        let prevVal = quantity - 1;
        if (quantity > 1) {
            setQuantity(prevVal);
            props.onChange(prevVal); // tell the Product about the new quantity
        }
    }

    function handleIncrease() {
        // Logic to increase quantity
        let nextVal = quantity + 1;
        // Update the state with the new value
        setQuantity(nextVal);
        props.onChange(nextVal); // tell the Product about the new quantity

    }

    return (
        <div className="quantity-picker">
            <button className="btn-minus" onClick={handleDecrease}>-</button>
            <label className="label-qty">{quantity}</label>
            <button className="btn-plus" onClick={handleIncrease}>+</button>
        </div>
    )
}

export default QuantityPicker;