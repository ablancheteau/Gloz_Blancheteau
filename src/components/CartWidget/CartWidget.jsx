import icono_carro from './assets/icono_carro.svg'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { cart } = useContext(CartContext)

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'flex' : 'none'}}>
            <img className='carrito' src={icono_carro} alt="cart-widget" />
            <span className='TotalQuantity'>{totalQuantity}</span>
        </Link>
    )
}

export default CartWidget