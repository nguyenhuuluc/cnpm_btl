import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { deleteProd, plusQuantity, minusQuantity } from '~/reduxModule';
import './CartItem.css';

function CartItem(props) {
    let { product, deleteProd, plusQuantity, minusQuantity } = props;
    return (
        <>
            <div className="miniCart-item mb-5">
                <div className="cartItem-img">
                    <img src={product.linkImg} alt="" />
                    <button onClick={() => deleteProd(product.id)}>
                        <FontAwesomeIcon style={{ fontSize: 15, paddingTop: 2, paddingLeft: 4 }} icon={faXmark} />
                    </button>
                </div>
                <div className="cartItem-box">
                    <div className="cartItem-boxInfo">
                        <h3 className="cartItem-infoName">{product.title}</h3>
                        <div className="cartItem-infoPrice">
                            <p className="cartItem-newPrice">{product.price} VND</p>
                            <p className="cartItem-oldPrice">{product.price2}</p>
                        </div>
                    </div>
                    <div className="cartItem-itemOption">
                        <div className="cartItem-btnQuantity">
                            {/* <p className="cartItem-option">{product.size}MM</p> */}
                            <button onClick={() => minusQuantity(product.id, product.quantity)}>
                                <FontAwesomeIcon style={{ paddingBottom: 2, paddingLeft: 2 }} icon={faMinus} />
                            </button>
                            <p className="quantity-text">Qty:{product.quantity}</p>
                            <button onClick={() => plusQuantity(product.id, product.quantity)}>
                                <FontAwesomeIcon style={{ paddingBottom: 2, paddingLeft: 2 }} icon={faPlus} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapDispatchToProps = { deleteProd, plusQuantity, minusQuantity };
export default connect(null, mapDispatchToProps)(CartItem);
