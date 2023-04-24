import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <h2>Bienvenido a EL TALLER</h2>

        <nav>
            <ul>
            <li>
            <NavLink to={`/categoria/1`}> Jardin </NavLink>
            </li> 
                <li>
                <NavLink to={`/categoria/2`}> Maquinas </NavLink>
                </li>
                <li> 
                <NavLink to={`/categoria/3`}> Construccion </NavLink>
                </li>
                <li> Contacto </li>
            </ul>
{/*             <div>
                <button> Productos </button>
                <button> Carrito </button>
                <button> Contacto </button>

            </div> */}
            <CartWidget />
            

        </nav>
        </header>
    )
}

export default NavBar