import React from 'react'

function ItemDetail(item) {

    
  return (
      <div className="details" key={item._id}>
          <div className="big-img">
              <img src={item.src[index]} alt="" />
          </div>

          <div className="box">
              <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
              </div>

              <p>{item.description}</p>
              <p>{item.content}</p>

              <ItemThumbs images={item.src} tab={handleTab} myRef={myRef} />
              <button className="cart">Add to cart</button>

          </div>
      </div>
  )
}

export default ItemDetail