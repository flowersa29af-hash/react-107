import Product from "../components/Product";
import DataService from "../dataServices/dataService";
import "./Catalog.css";

function Catalog() {
    const products = new DataService().getProducts();

    return (
        <div className="catalog">
            {products.map((prod) => (
                <Product key={prod._id} data={prod} />
            ))}
        </div>
    );
}

export default Catalog;
