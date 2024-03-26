import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase/firebaseConfig';
import { collection, doc, getDocs, query, where, writeBatch, addDoc } from 'firebase/firestore';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);
  const { cart, getTotalQuantity, getTotal, clearCart } = useContext(CartContext);
  const totalQuantity = getTotalQuantity();
  const total = getTotal();

  const createOrder = async (formData) => {
    setLoading(true);
    try {
      const outOfStock = await checkStockAvailability(cart);
      if (outOfStock.length === 0) {
        await updateStock(cart);
        const orderId = await placeOrder(formData);
        clearCart();
        setOrderCreated(orderId);
      } else {
        console.log("Hay productos que están fuera de stock:", outOfStock);
      }
    } catch (error) {
      console.error("Error al crear la orden:", error);
    } finally {
      setLoading(false);
    }
  };

  const checkStockAvailability = async (cart) => {
    const outOfStock = [];
    const ids = cart.map((item) => item.id);
    const productRef = collection(db, 'products');
    const productsAddedFromFirestore = await getDocs(
      query(productRef, where('id', 'in', ids))
    );
    productsAddedFromFirestore.forEach((doc) => {
      const product = cart.find((item) => item.id === doc.id);
      if (product.quantity > doc.data().stock) {
        outOfStock.push({ id: doc.id, name: doc.data().name });
      }
    });
    return outOfStock;
  };

  const updateStock = async (cart) => {
    const batch = writeBatch(db);
    cart.forEach((item) => {
      const docRef = doc(collection(db, 'products'), item.id);
      batch.update(docRef, { stock: item.stock - item.quantity });
    });
    await batch.commit();
  };
  
  const placeOrder = async (formData) => {
    const orderRef = collection(db, 'orders');
    const order = {
      buyer: formData,
      items: cart,
      totalQuantity: totalQuantity,
      total,
      date: new Date(),
    };
    const docRef = await addDoc(orderRef, order);
    return docRef.id;
  };

  if (loading) {
    return <h1>Se está generando su orden...</h1>;
  }

  if (orderCreated) {
    return <h1>La orden fue creada correctamente. ID de su orden: {orderCreated}</h1>;
  }

  return (
    <>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </>
  );
};

export default Checkout;