import './Cart.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Carrito = () => {
    
    const { cart, clearCart, getTotalQuantity, getTotal } = useContext(CartContext);
    const totalQuantity = getTotalQuantity();

    if (totalQuantity === 0) {
        return (
            <div>
                <h3>No hay productos en el carrito</h3>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(item => <CartItem key={item.id} {...item}/>)}
            <h3>Total: ${getTotal()}</h3>
            <button onClick={clearCart} className='Button'>Vaciar carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Carrito;
