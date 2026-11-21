import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="text-center">
            <h1 className="display-4">404 - Page Not Found</h1>
            <p className="lead text-secondary">Sorry, the page you are looking for does not exist.</p>
            <Link className="btn btn-dark btn-lg" to="/">Go Back Home</Link>
        </div>
    );
}

export default NotFound;
