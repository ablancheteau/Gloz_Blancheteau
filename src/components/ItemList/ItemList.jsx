import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
    if (!products || !Array.isArray(products)) {
        return <div>No hay productos disponibles.</div>;
    }

    return (
        <div className='item-list'>
            <div className='ListGroup'>
                {products.map(prod => prod && prod.category && <Item key={prod.id} {...prod} />)}
            </div>
        </div>
    );
};


export default ItemList;


