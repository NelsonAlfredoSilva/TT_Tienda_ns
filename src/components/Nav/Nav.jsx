import { Link } from "react-router-dom";
import "./Nav.css";
export const Nav = () => {
    return (
        <nav>
            <ul className="nav-list">
                <Link to="/"><li>Home</li></Link>
                <Link to="/carrito"><li>Carrito</li></Link>
            </ul>
        </nav>
    );
}