import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <h2>Bienvenido a EL TALLER</h2>

        <nav>
            <ul>
                <li> Productos </li>
                <li> Carrito </li>
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