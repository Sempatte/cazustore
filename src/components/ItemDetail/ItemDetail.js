import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product }) => {

    const onAdd = (count) => {

        if (count > 1) {
            alert(`Se agregaron ${count} articulos al carrito`);
        } else {
            alert(`Se agrego ${count} articulo al carrito`);
        }

    }

    return (

        <div className="card">
            <div className="row">
                <aside className="col-sm-5 border-right">
                    <article className="gallery-wrap">
                        <div className="img-big-wrap">
                            <div> <img alt={product.image1} src={product.image1} /></div>
                        </div>

                    </article>
                </aside>
                <aside className="col-sm-7">
                    <article className="card-body p-5">
                        <h3 className="title mb-3">{product.name}</h3>
                        <p className="price-detail-wrap">
                            <span className="price h3 text-warning">
                                <span className="currency">S/.</span><span className="num">{product.final_price}</span>
                            </span>
                        </p>
                        <dl className="item-property">
                            <dt>Descripción</dt>
                            <dd>
                                <p>{product.description}</p>
                            </dd>
                        </dl>

                        <dl className="param param-feature">
                            <dt>Color</dt>
                            <dd>{product.color}</dd>
                        </dl>
                        <dl className="param param-feature">
                            <dt>Stock</dt>
                            <dd>{product.stock}</dd>
                        </dl>
                        <hr />
                        <div className="row">
                            <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />

                        </div>
                    </article>
                </aside>
            </div>
        </div>
    )
};

export default ItemDetail;
