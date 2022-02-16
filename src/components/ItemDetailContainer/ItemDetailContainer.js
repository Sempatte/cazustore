import React from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemThumbs from '../ItemThumbs/ItemThumbs';

import { getProduct } from '../../asyncmock';


class ItemDetailContainer extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "Nike Shoes",
        "src": [
            "https://home.ripley.com.pe/Attachment/WOP_5/2004279544270/2004279544270_2.jpg",
            "https://home.ripley.com.pe/Attachment/WOP_5/2004279544270/2004279544270-1.jpg",
            "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
            "https://www.upsieutoc.com/images/2020/06/27/img4.jpg"
          ],
        "description": "UI/UX designing, html css tutorials",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 23,
        "colors":["red","black","crimson","teal"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div className="ItemListContainer">
        {
          products.map(item =>(
            <ItemDetail item={item}/>
          ))
        }
      </div>
    );
  };
}

export default ItemDetailContainer;