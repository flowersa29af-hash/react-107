import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <h1 className="display-4">Welcome to My Online Store</h1>
      <p className="lead text-secondary">Delicious cakes and desserts!</p>
      <Link className="btn btn-dark btn-lg" to="/catalog">Shop Now</Link>
    </div>
  );
}

export default Home;
