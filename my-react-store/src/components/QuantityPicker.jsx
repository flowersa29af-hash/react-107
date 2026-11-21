import "./QuantityPicker.css";

// The parent (Product) owns the quantity; this component only displays it
// and reports changes back through props.onChange.
function QuantityPicker(props) {
    const quantity = props.value;

    function handleDecrease() {
        if (quantity > 1) {
            props.onChange(quantity - 1);
        }
    }

    function handleIncrease() {
        props.onChange(quantity + 1);
    }

    return (
        <div className="quantity-picker">
            <button className="btn-minus" onClick={handleDecrease} disabled={quantity === 1}>-</button>
            <span className="label-qty">{quantity}</span>
            <button className="btn-plus" onClick={handleIncrease}>+</button>
        </div>
    )
}

export default QuantityPicker;
