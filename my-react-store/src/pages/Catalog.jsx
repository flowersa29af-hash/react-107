import Product from "../components/Product";
import DataService from "../services/dataService";
import "./Catalog.css";
import { useState } from "react";

function Catalog() {
    // load the products once, when the component is first created
    const [products] = useState(() => new DataService().getProducts());

    return (
        <div className="catalog">
            {products.map((prod) => (
                <Product key={prod._id} data={prod} />
            ))}
        </div>
    );
}

export default Catalog;
