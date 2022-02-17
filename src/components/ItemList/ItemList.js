import React from 'react';
import './ItemList.css';
import Item from '../ItemCard/ItemCard';

export const ItemList = ({products}) => {
	return (
		<>			
			{
				products.map((product) => (
					<Item key={product.id} product={product} />
				))
			}
				
		</>
	)
}
