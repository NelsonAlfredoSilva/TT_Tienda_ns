import { Link } from "react-router-dom";
import logo from "../../assets/box.png";
import { Nav } from "../Nav/Nav";
import "./Header.css"
export const Header = () => {
    return (
        <header>
            <div>
                <Link to="/">
                    <img src={logo} alt="Compañia Bulk LogoTipo" className="encabezado-img"/>
                </Link>
                <span>Bulk</span>
            </div>
            <Nav/>
        </header>
    );
};