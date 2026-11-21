import Product from "../components/Product";
import DataService from "../services/dataService";
import "./Catalog.css";
import { useState } from "react";

function Catalog() {
    // load the products once, when the component is first created
    const [products] = useState(() => new DataService().getProducts());

    // STEP 1: remember if the "cheap cakes only" switch is on (true) or off (false)
    const [showCheap, setShowCheap] = useState(false);

    // STEP 2: the strainer. Ask each cake a yes/no question.
    const visibleProducts = products.filter((prod) => {
        if (showCheap) {
            return prod.price < 16; // switch ON: only keep cakes under $16
        }
        return true;                // switch OFF: keep every cake
    });

    return (
        <div>
            {/* STEP 3a: the button flips the switch on/off */}
            <button className="btn btn-dark" onClick={() => setShowCheap(!showCheap)}>
                {showCheap ? "Show All Cakes" : "Show Cakes Under $16"}
            </button>

            {/* STEP 3b: the cookie machine. Turn each visible cake into a card */}
            <div className="catalog">
                {visibleProducts.map((prod) => (
                    <Product key={prod._id} data={prod} />
                ))}
            </div>
        </div>
    );
}

export default Catalog;
