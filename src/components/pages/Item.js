import React from 'react';
import { BsStarFill,BsFillHeartFill } from "react-icons/bs";
import { FaRandom } from "react-icons/fa";

function Item({name, stars_count, initial_price, final_price, img1, img2}) {

    var stars = [];
    for (var i = 0; i < stars_count; i++) {
        stars.push(<BsStarFill />);
    }

    return (
      <div className="col-md-3 col-sm-6">
          <div className="product-grid">
              <div className="product-image">
                  <a href="/" className="image">
                      <img className="pic-1" alt="laptop1" src={img1} />
                      <img className="pic-2" alt="laptop2" src={img2} />
                  </a>
                  <span className="product-sale-label">hot</span>
                  <span className="product-discount-label">-3%</span>
              </div>
              <div className="product-content">
                  <ul className="rating">
                      {stars}
                  </ul>
                  <h3 className="title"><a href="/">{name}</a></h3>
                  <div className="price"><span>S/{initial_price}</span> S/{final_price}</div>
                  <div className="product-button-group">
                      <a className="product-like-icon" href="/"><BsFillHeartFill/></a>
                      <a className="add-to-cart" href="/">AÑADIR AL CARRITO</a>
                      <a className="product-compare-icon" href="/"><FaRandom /></a>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default Item;
