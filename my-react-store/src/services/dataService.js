const catalog = [
    {
        "title": "Chocolate Cake",
        "category": "Cake",
        "price": 15.99,
        "image": "chocolate.webp",
        "_id": "1"
    },
    {
        "title": "Red Velvet Cake",
        "category": "Cake",
        "price": 20.99,
        "image": "redvelvet.jpg",
        "_id": "2"
    },
    {
        "title": "Cheesecake",
        "category": "Cheesecake",
        "price": 10.99,
        "image": "cheesecake.avif",
        "_id": "3"
    },
    {
        "title": "Apple Pie",
        "category": "Pie",
        "price": 12.99,
        "image": "applepie.avif",
        "_id": "4"
    }
];

class DataService {
    getProducts() {
        return catalog;
    }
}
export default DataService;
