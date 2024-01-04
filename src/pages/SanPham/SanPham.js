import React from 'react';
import { connect } from 'react-redux';
import { dataPrd } from '~/reduxModule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './SanPham.css';
import { Link } from 'react-router-dom';
import { toggleCart, addToCart } from '~/reduxModule';

function SanPham(props) {
    let { productItem, toggleCart, addToCart } = props;
    return (
        <>
            <section>
                <section className="bannersp">
                    <img src={require('~/assets/Img/bannersp.jpg')} alt="Liên hệ" />
                    <div className="container contentSP ">
                        <div className=" boxSP">
                            <h3 className="text-uppercase">
                                {' '}
                                Thế giới nội thất số 1 việt nam <br /> <span> Hoàng hoan </span>{' '}
                            </h3>
                            <a href="/lien-he" className="text-uppercase">
                                {' '}
                                Mua ngay{' '}
                            </a>
                        </div>
                    </div>
                </section>
            </section>
            <div className="khoangtrang"></div>
            <section className="loaisp">
                <div className="content container">
                    <div className="slide">
                        <h5>SẢN PHẨM</h5>
                        <div className="gach">
                            <div className="gach_in"></div>
                            {/* <a>xem tất cả</a> */}
                        </div>
                        <div className="image-sliders row mt-3">
                            {dataPrd.map((productItem) => (
                                <div className="image-itemS col-md-3 col-sm-12 mb-4">
                                    <div className="image">
                                        <img src={productItem.linkImg} alt={productItem.title} />
                                    </div>
                                    <div className="slide_ct">
                                        <h4 className="pt-3">
                                            <Link>{productItem.title}</Link>
                                        </h4>
                                        <div className="star">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        {/* <p>(size lớn trắng sữa)</p> */}
                                        <p className="p_price">{productItem.price} VND</p>
                                        <p className="p_price2">{productItem.price2}</p>
                                        <button onClick={() => addToCart(productItem)} className="them2">
                                            Thêm vào giỏ hàng
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <div className="khoangtrang"></div>
        </>
    );
}

const mapDispatchToProps = { toggleCart, addToCart };

export default connect(null, mapDispatchToProps)(SanPham);
