import React from 'react';
import './ItemListContainer.css';
import Item from './Item';

const Products = [
  {
    'id': 0,
    'name': 'Laptop 15.6" Intel Core i7 512 GB 8GB',
    'stars': 5,
    'initial_price': '4,399.00',
    'final_price': '4,099.00',
    'image1': './images/lap1.jpg',
    'image2': './images/lap2.jpg'
  },
  {
    'id': 1,
    'name': 'Laptop Dell Inspiron 15 3505 Ryzen 5-3450U, 15.6", RAM 16GB, SSD 256GB, Win10H',
    'stars': 4,
    'initial_price': '3,599.00',
    'final_price': '3,099.00',
    'image1': './images/dell1.jpg',
    'image2': './images/dell2.jpg'
  }

]

function ItemListContainer({greeting}) {
  return(
    <>
      <h1>{greeting}</h1>
      <div className="container">
        <div className="row">
          {
            Products.map((item) =>(
              <Item key={item.id} name={item.name} stars_count={item.stars} initial_price={item.initial_price} final_price={item.final_price} img1={item.image1} img2={item.image2}/>
            ))
          }

        </div>
      </div>
    </>   
  )
}

export default ItemListContainer;
