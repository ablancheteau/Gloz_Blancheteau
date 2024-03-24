
const CartItem = ({ id, title, quantity, price }) => {
    return (
        <div className="cart-item">
            <h4>{title}</h4>
            <p>Cantidad: {quantity}</p>
            <p>Precio: ${price}</p>
            <p>Total: ${quantity * price}</p>
        </div>
    );
};

export default CartItem;
