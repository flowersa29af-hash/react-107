import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import productImage from "../assets/hero.png";

function Product() {

    return (
        <div className="product card">
            <img src={productImage} alt="Product" />
            <h5>Title</h5>
            <label>Price</label>
            <label>Total</label>
            <QuantityPicker />
        </div>
    )
}

export default Product;