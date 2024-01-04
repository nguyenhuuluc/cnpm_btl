import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { toggleCart } from '~/reduxModule';

import './Header.css';
import Cart from '~/components/Cart/Cart';

function Header(props) {
    let { ListProduct, toggleCart } = props;
    return (
        <>
            <section className="main_nav_header">
                <div className="HeaderPC container">
                    <div className="logoHeader col-md-2 col-sm-4">
                        <a href="xuongmoc.html">
                            <img src={require('~/assets/Img/logo.png')} alt="" />
                        </a>
                    </div>
                    <div className="menuMain col-md-8 col-sm-9">
                        <ul>
                            <CustomLink to="/">Trang Chủ</CustomLink>
                            <CustomLink to="/gioithieu">Giới Thiệu</CustomLink>
                            <CustomLink to="/sanpham">Sản Phẩm</CustomLink>
                            <CustomLink to="/tintuc">Tin Tức</CustomLink>
                            <CustomLink to="/doitac">Đối Tác</CustomLink>
                            <CustomLink to="/lienhe">Liên Hệ</CustomLink>
                        </ul>
                    </div>
                    <div className="iconHeader col-md-2 col-sm-4">
                        <div className="iconCart" id="turnon" onClick={() => toggleCart(true)}>
                            <button>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </button>
                        </div>
                        <div className="iconUser">
                            <Link>
                                <FontAwesomeIcon icon={faUser} />
                            </Link>
                        </div>
                    </div>
                    <div className="button2 col-sm-4">
                        <div className="span"></div>
                        <div className="span"></div>
                        <div className="span"></div>
                    </div>
                </div>
                {/* <div className="HeaderMobile container">
                    <div className="container">
                        <div className="iconHeader col-md-2 col-sm-4">
                            <div className="iconCart" id="turnon">
                                <FontAwesomeIcon icon={faCartShopping} />
                            </div>
                            <div className="iconUser">
                                <a href="">
                                    <FontAwesomeIcon icon={faUser} />
                                </a>
                            </div>
                        </div>
                        <div className="logoHeader col-md-2 col-sm-4">
                            <a href="xuongmoc.html">
                                <img src={require('~/assets/Img/logo.png')} alt="" />
                            </a>
                        </div>
                        <div className="menuMain col-md-8 col-sm-9">
                            <ul>
                                <li>
                                    <a href="" className="active">
                                        Trang Chủ
                                    </a>
                                </li>
                                <li>
                                    <a href="">Giới Thiệu</a>
                                </li>
                                <li>
                                    <a href="">Sản Phẩm</a>
                                </li>
                                <li>
                                    <a href="">Tin Tức</a>
                                </li>
                                <li>
                                    <a href="">Đối Tác</a>
                                </li>
                                <li>
                                    <a href="">Liên Hệ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="button2 col-sm-4">
                            <div className="span"></div>
                            <div className="span"></div>
                            <div className="span"></div>
                        </div>
                    </div>
                </div> */}
            </section>
            <Cart />
        </>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? 'activeS' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

const mapDispatchToProps = { toggleCart };
const mapStateToProps = (state) => ({
    ListProduct: state.products,
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
