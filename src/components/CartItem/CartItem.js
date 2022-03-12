import React, { useContext } from "react";
import {formatter} from '../../utils/formatter';
import { Link } from 'react-router-dom';
import {  BsFillTrashFill } from "react-icons/bs";
import CartContext from '../../context/CartContext';

function CartItem({image1, id, name, description, option, final_price, initial_price, quantity, total}) {
    const { removeItem } = useContext(CartContext)
    return (
        <div className="ibox-content">
            <div className="table-responsive">
                <table className="table shoping-cart-table">
                    <tbody>
                        <tr>
                            <td width={120}>
                                <img alt={image1} src={image1} width="100%" height="100%" />

                            </td>
                            <td className="desc">
                                <h4>
                                    <Link target="_blank" style={{ textDecoration: 'none' }} to={`/item/${id}`} className="text-navy">
                                        {name}
                                    </Link>
                                </h4>
                                <label > {option.text}</label>
                                <label className="small">
                                    {description}
                                </label>

                                <div className="m-t-sm">
                                    <button onClick={() => removeItem(id, option.value)} type="button" className="btn btn-danger btn-sm"><BsFillTrashFill /></button>
                                </div>
                            </td>
                            <td>
                                {formatter.format(final_price)}
                                &nbsp;<s className="small text-muted"> {formatter.format(initial_price)}</s>
                            </td>
                            <td width={65}>
                                <input type="text" className="form-control text-center" disabled value={quantity} />
                            </td>
                            <td>
                                <h5>
                                    {formatter.format(total)}
                                </h5>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CartItem