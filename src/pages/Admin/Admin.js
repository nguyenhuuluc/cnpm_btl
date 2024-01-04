import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDashboard,
    faStore,
    faChartLine,
    faUser,
    faGear,
    faCircleArrowLeft,
    faBars,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Admin.css';
import { dataPrd } from '~/reduxModule';
function Admin() {
    const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

    sideLinks.forEach((item) => {
        const li = item.parentElement;
        item.addEventListener('click', () => {
            sideLinks.forEach((i) => {
                i.parentElement.classList.remove('active');
            });
            li.classList.add('active');
        });
    });

    // addEventListener(sideBar.classList.toggle('close'));

    return (
        <>
            <div className="sidebar">
                <i class="bx bx-code-alt"></i>
                <Link href="#" className="logo">
                    <div className="logo-name">
                        <span>Admin</span>
                    </div>
                </Link>
                <ul className="side-menu">
                    <li>
                        <Link href="#">
                            <FontAwesomeIcon icon={faDashboard} />
                            Dashboard
                        </Link>
                    </li>
                    <li className="active">
                        <Link href="#">
                            <FontAwesomeIcon icon={faStore} />
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <FontAwesomeIcon icon={faChartLine} />
                            nalytics
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <FontAwesomeIcon icon={faUser} />
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <FontAwesomeIcon icon={faGear} />
                            Settings
                        </Link>
                    </li>
                </ul>
                <ul className="side-menu">
                    <li>
                        <Link href="#" className="logout">
                            <FontAwesomeIcon icon={faCircleArrowLeft} />
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="content">
                <nav>
                    <div className="bx bx-menu">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <form action="#">
                        <div className="form-input">
                            <input type="search" placeholder="Search..." />
                            <button className="search-btn" type="submit">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </form>

                    <Link href="#" className="profile">
                        <img src={require('~/assets/Img/logo.png')} />
                    </Link>
                </nav>

                <main>
                    <div className="header">
                        <div className="left">
                            <h1>Dashboard</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <Link href="#">Shop</Link>
                                </li>
                                /
                                <li>
                                    <Link href="#" className="active">
                                        Products
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link href="#" className="report">
                            <i className="bx bx-cloud-download"></i>
                            <span>Download CSV</span>
                        </Link>
                    </div>

                    <div className="bottom-data">
                        <div className="orders">
                            <div className="header">
                                <i className="bx bx-receipt"></i>
                                <h3>All Products</h3>
                                <i className="bx bx-filter"></i>
                                <i className="bx bx-search"></i>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Images</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataPrd.map((item) => (
                                        <tr>
                                            <td>
                                                <p>{item.id}</p>
                                            </td>
                                            <td>
                                                <img src={item.linkImg} alt={item.title} />
                                            </td>
                                            <td>
                                                <h6>{item.title}</h6>
                                            </td>
                                            <td>
                                                <p>{item.price}</p>
                                            </td>
                                            <td className="statusfix">
                                                <span className="status completed">Sửa</span>
                                                <span className="status process">Xóa</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Admin;
