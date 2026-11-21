import Product from "../components/Product";
import DataService from "../services/dataService";
import "./Catalog.css";
import { useState } from "react";

function Catalog() {
    // load the products once, when the component is first created
    const [products] = useState(() => new DataService().getProducts());

    // STEP 1: remember if the "cheap cakes only" switch is on (true) or off (false)
    const [showCheap, setShowCheap] = useState(false);

    // CATEGORY STEP 1: remember which category is picked ("All" = no filter)
    const [selectedCategory, setSelectedCategory] = useState("All");

    // CATEGORY STEP 2: build the button list from the cakes themselves
    //   map -> ["Cake", "Cake", "Cheesecake"]
    //   Set -> removes repeats -> "Cake", "Cheesecake"
    //   result -> ["All", "Cake", "Cheesecake"]
    const categories = ["All", ...new Set(products.map((prod) => prod.category))];

    // STEP 2 + CATEGORY STEP 3: the strainer. Each cake must pass BOTH questions.
    const visibleProducts = products.filter((prod) => {
        // Question 1: price. Switch ON and cake is $16 or more? Throw it out.
        if (showCheap && prod.price >= 16) {
            return false;
        }
        // Question 2: category. A category is picked and this cake isn't in it? Throw it out.
        if (selectedCategory !== "All" && prod.category !== selectedCategory) {
            return false;
        }
        return true; // passed both questions, so keep it
    });

    return (
        <div>
            {/* STEP 3a: the button flips the switch on/off */}
            <button className="btn btn-dark" onClick={() => setShowCheap(!showCheap)}>
                {showCheap ? "Show All Cakes" : "Show Cakes Under $16"}
            </button>

            {/* CATEGORY STEP 4: the cookie machine turns each category word into a button */}
            <div className="d-flex justify-content-center flex-wrap gap-2 mt-3">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={cat === selectedCategory ? "btn btn-dark" : "btn btn-outline-dark"}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

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
