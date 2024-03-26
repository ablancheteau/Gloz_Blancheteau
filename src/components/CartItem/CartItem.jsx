import './CartItem.css';
const CartItem = ({ id, name, quantity, price }) => {
    return (
        <div className="cart-item">
            <h4>{name}</h4>
            <p>Cantidad: {quantity}</p>
            <p>Precio: ${price}</p>
            <p>Subtotal: ${quantity * price}</p>
        </div>
    );
};

export default CartItem;
