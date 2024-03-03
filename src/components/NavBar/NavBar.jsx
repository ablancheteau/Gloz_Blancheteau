import './NavBar.css'
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
    return (
            <nav className="NavBar">
                <Link to={'/'}>
                    <h3>Gloz</h3>
                </Link>
                <div className="Categories">
                    <NavLink to={'/category/Aros'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Aros</NavLink>
                    <NavLink to={'/category/Collares'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Collares</NavLink>
                    <NavLink to={'/category/Pulseras'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pulseras</NavLink>
                </div>
                <CartWidget />
            </nav>
    )

}

export default NavBar