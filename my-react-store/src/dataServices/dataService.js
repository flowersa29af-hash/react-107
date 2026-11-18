const catalog = [
    {
        "title": "Chocolate Cake",
        "category": "Dessert",
        "price": 15.99,
        "image": "/images/chocolate.webp",
        "_id": "1"
    },
    {
        "title": "Red Velvet Cake",
        "category": "Dessert",
        "price": 20.99,
        "image": "/images/redvelvet.jpg",
        "_id": "2"
    },
    {
        "title": "Cheesecake",
        "category": "Dessert",
        "price": 10.99,
        "image": "/images/cheesecake.avif",
        "_id": "3"
    },
];

class DataService {
    getProducts() {
        return catalog;
    }
}
export default DataService;
