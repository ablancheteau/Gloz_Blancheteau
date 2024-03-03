import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <div className='CartWidget'>
            <img src={cart} className='carrito' alt="cart-widget" />
            0
        </div>
    )
}

export default CartWidget