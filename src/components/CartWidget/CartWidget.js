import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {Link} from 'react-router-dom';

function CartWidget({children}) {
  return (
      <>
          <Link to="/cart"><AiOutlineShoppingCart style={{color: "white"}} />
              <span className="badge badge-primary count">{children}</span >
          </Link>
      </>
  );
}

export default CartWidget;
