import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
    const allSameCategory = products.every((prod, index, arr) => prod.category === arr[0].category);

    const category = allSameCategory ? products[0].category : null;

    return (
        <div className='item-list'>
            {category && <h1>Mundo {category}</h1>}
            <div className='ListGroup'>
                {products.map(prod => <Item key={prod.id} {...prod} />)}
            </div>
        </div>
    );
};

export default ItemList;

