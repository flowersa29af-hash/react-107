import Product from "../components/Product";
import DataService from "../dataServices/dataService";
import "./Catalog.css";
import { useState, useEffect } from "react";

function Catalog() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const service = new DataService();
        const data = service.getProducts();
        setProducts(data);
        //setProducts(service.getProducts());
    }, []); // empty array = load only once
    // const produce 
    

    return (
        <div className="catalog">
            {products.map((prod) => (
                <Product key={prod._id} data={prod} />
            ))}
        </div>
    );
}

export default Catalog;
