import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    getTotalQuantity: () => 0,
    getTotal: () => 0,
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const getTotalQuantity = () => {
        let accu = 0;
        cart.forEach((prod) => {
            accu += prod.quantity;
        });
        return accu;
    };


    const getTotal = () => {
        let accu = 0;
        cart.forEach((item) => {
            accu += item.quantity * item.price;
        });
        return accu;
    };


    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart((prev) => [...prev, { ...item, quantity }]);
        } else {
            console.error("El producto ya fue agregado");
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter((prod) => prod.id !== itemId);
        setCart(cartUpdated);
    };


    const clearCart = () => {
        setCart([]);
    };


    const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId);
    };

    return (
        <CartContext.Provider
            value={{ cart, addItem, removeItem, clearCart, getTotalQuantity, getTotal }}
        >
            {children}
        </CartContext.Provider>
    );
};
