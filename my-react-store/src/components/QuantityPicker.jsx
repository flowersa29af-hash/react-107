import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker() {
    const [quantity, setQuantity] = useState(1);
    //      name       function             initial value

    function handleDecrease() {
        // Logic to decrease quantity
        let prevVal = quantity - 1;
        if (quantity > 1) {
            setQuantity(prevVal);
        }
    }

    function handleIncrease() {
        // Logic to increase quantity
        let nextVal = quantity + 1;
        // Update the state with the new value
        setQuantity(nextVal);

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