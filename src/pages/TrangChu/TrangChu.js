import './TrangChu.css';
import SlideTC from '~/components/GlobalStyles/Slide/SlideTC/SlideTC';
import SlideDT from '~/components/GlobalStyles/Slide/SlideDT/SlideDT';
import { Link } from 'react-router-dom';

function TrangChu() {
    return (
        <>
            <section className="banner">
                <div className="banner_in container">
                    <h3>THế Giới Nội Thất Số 1 Việt Nam</h3>
                    <h3>Hoàng Hoan</h3>
                    <p>
                        {' '}
                        Sứ mệnh của chúng tôi là kết hợp hài hòa giữa ý tưởng và mong muốn của khách hàng, đem lại những
                        phút giây thư giãn tuyệt vời bên gia đình và những người thân yêu.
                    </p>
                    <button>Liên Hệ Ngay</button>
                </div>
                <div className=" len">
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 whites">
                            <div className="item">
                                <div className="img">
                                    <img src={require('~/assets/Img/phong-ngu.png')} alt="sp1.png" className="w-100" />
                                </div>
                                <div className="len_p">
                                    <p>Phòng Khách</p>
                                </div>
                            </div>
                            {/* <!-- <p> Phòng Ngủ</p> --> */}
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 whites">
                            <div className="item">
                                <div className="img">
                                    <img
                                        src={require('~/assets/Img/phong-khach.png')}
                                        alt="sp1.png"
                                        className="w-100"
                                    />
                                </div>
                                <div className="len_p">
                                    <p>Phòng Ngủ</p>
                                </div>
                            </div>
                        </div>
                        <div className=" col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 whites">
                            <div className="item">
                                <div className="img">
                                    <img src={require('~/assets/Img/phong-bep.png')} alt="sp1.png" className="w-100" />
                                </div>
                                <div className="len_p">
                                    <p>Phòng Bếp</p>
                                </div>
                            </div>
                        </div>
                        <div className=" col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 whites">
                            <div className="item">
                                <div className="img">
                                    <img src={require('~/assets/Img/phong-tam.png')} alt="sp1.png" className="w-100" />
                                </div>
                                <div className="len_p">
                                    <p>Phòng Tắm</p>
                                </div>
                            </div>
                        </div>
                        <div className=" col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 whites">
                            <div className="item">
                                <div className="img">
                                    <img src={require('~/assets/Img/tre-em.png')} alt="sp1.png" className="w-100" />
                                </div>
                                <div className="len_p">
                                    <p>Trẻ Em</p>
                                </div>
                            </div>
                        </div>
                        <div className=" col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 whites">
                            <div className="item">
                                <div className="img">
                                    <img src={require('~/assets/Img/van-phong.png')} alt="sp1.png" className="w-100" />
                                </div>
                                <div className="len_p">
                                    <p>Văn Phòng</p>
                                </div>
                            </div>
                        </div>
                        <div className=" col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 whites">
                            <div className="item">
                                <div className="img">
                                    <img src={require('~/assets/Img/cau-thang.png')} alt="sp1.png" className="w-100" />
                                </div>
                                <div className="len_p">
                                    <p>Cầu Thang</p>
                                </div>
                            </div>
                        </div>
                        <div className=" col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 whites">
                            <div className="item">
                                <div className="img">
                                    <img
                                        src={require('~/assets/Img/den-trang-tri.png')}
                                        alt="sp1.png"
                                        className="w-100"
                                    />
                                    <div className="len_p">
                                        <p>Đồ Trang Trí</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="sanphamnb">
                    <h2>Sản Phẩm Nổi Bật</h2>
                    <div className="bottomSpnb"></div>
                </section>
                <SlideTC />
            </section>
            <section className="about_us  mt-3">
                <div className="overlay"></div>
                <div className="over_text">
                    <div className="about_us_in">
                        <section className="sanphamnb">
                            <h2>Về Chúng Tôi</h2>
                            <div className="bottomSpnb"></div>
                        </section>
                    </div>
                </div>
                <div className="about_cover ">
                    <div className="about_mid">
                        <div className="about_mid_l">
                            <img src={require('~/assets/Img/ve-chung-toi.jpg')} alt="" />
                        </div>
                        <div className="about_mid_r">
                            <h5>Nội Thất</h5> <h5>Hoàng Hoan</h5>
                            <h5> Uy Tín song hành chất lượng</h5>
                            <p>
                                Nội thất Hoàng Hoan chúng tôi tự hào là đứa con tinh thần ra đời sau hơn 30 năm hoạt
                                động trong lĩnh vực kinh doanh đồ gỗ nội thất với thương hiệu đồ gỗ HOÀNG HOAN nổi
                                tiếng.
                            </p>
                            <p>
                                Tài nguyên của chúng tôi là đội ngũ kiến trúc sư tốt nghiệp ĐH Kiến Trúc Hà Nội với
                                nhiều năm kinh nghiệm, luôn tràn đầy nhiệt huyết và sức sáng tạo của tuổi trẻ. Thế mạnh
                                của chúng tôi là sở hữu xưởng nội thất hơn 10.000m2 tại Hà Nội sản xuất đa dạng các sản
                                phẩm với giá cả luôn cạnh tranh.
                            </p>
                            <div className="about_m_r_b">
                                <img src={require('~/assets/Img/tintuc-1.png')} alt="TinTuc1" />
                                <img src={require('~/assets/Img/tintuc-2.png')} alt="TinTuc2" />
                                <img src={require('~/assets/Img/tintuc-3.png')} alt="TinTuc3" />
                                <img src={require('~/assets/Img/tintuc-4.png')} alt="TinTuc4" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about_us_in2">
                    <section className="sanphamnb">
                        <h2>Tại Sao Nên Chọn Hoàng Hoan</h2>
                        <div className="bottomSpnb"></div>
                    </section>

                    <div className="about_b">
                        <div className="about_b_l ">
                            <div className="about_br_top mb-4">
                                <div className="us_out">
                                    <img src={require('~/assets/Img/chon-1.jpg')} alt="" />
                                    <div className="text_bt_about">
                                        <h4>chính sách giá</h4>
                                        <p>tốt nhất và công khai giá trên website </p>
                                    </div>
                                </div>
                            </div>
                            <div className="about_br_top mb-4">
                                <div className="us_out">
                                    <img src={require('~/assets/Img/chon-3.jpg')} alt="" />
                                    <div className="text_bt_about">
                                        <h4>Chất Lượng</h4>
                                        <p>Cam kết chất lượng và tiến độ thi công </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about_b_r">
                            <div className="about_br_top mb-4">
                                <div className="us_out">
                                    <img src={require('~/assets/Img/chon-2.jpg')} alt="" />
                                    <div className="text_bt_about">
                                        <h4>Sản Xuất</h4>
                                        <p>Trực tiếp sản xuất bởi đội ngũ hàng đầu</p>
                                    </div>
                                </div>
                            </div>
                            <div className="about_br_top mb-4">
                                <div className="us_out">
                                    <img src={require('~/assets/Img/chon-4.jpg')} alt="" />
                                    <div className="text_bt_about">
                                        <h4>Bảo Hành</h4>
                                        <p>Dịch vụ bảo hành sản phẩm tốt nhất khu </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tintuc">
                <section className="sanphamnb mb-4">
                    <h2 className="mt-4">Tin Tức</h2>
                    <div className="bottomSpnb"></div>
                </section>
                <div className="about_b">
                    <div className="tintucl ">
                        <img src={require('~/assets/Img/tt-0.png')} alt="" />
                    </div>
                    <div className="tintucr ">
                        <div className="ttr">
                            <div className="ttrl">
                                <img src={require('~/assets/Img/tt-1.png')} alt="" />
                            </div>
                            <div className="ttrr">
                                <h6>Trang trí phòng khách cho thêm năng động</h6>
                                <p>
                                    Home furniture, interior design furniture, bedroom furniture, wooden furniture -
                                    find photography of them all in our gallery of furniture photos. Everything is
                                    licensed under the free Pexels license. Find the best stock free photos here.
                                </p>
                            </div>
                        </div>
                        <div className="ttr">
                            <div className="ttrl">
                                <img src={require('~/assets/Img/tt-2.png')} alt="" />
                            </div>
                            <div className="ttrr">
                                <h6>Cập nhật xu hướng phòng khách phong cách tối giản</h6>
                                <p>
                                    Home furniture, interior design furniture, bedroom furniture, wooden furniture -
                                    find photography of them all in our gallery of furniture photos. Everything is
                                    licensed under the free Pexels license. Find the best stock free photos here.
                                </p>
                            </div>
                        </div>
                        <div className="ttr">
                            <div className="ttrl">
                                <img src={require('~/assets/Img/tt-3.png')} alt="" />
                            </div>
                            <div className="ttrr">
                                <h6>Cách bố trí nhà bếp ,bàn ăn một cách rộng rãi</h6>
                                <p>
                                    Home furniture, interior design furniture, bedroom furniture, wooden furniture -
                                    find photography of them all in our gallery of furniture photos. Everything is
                                    licensed under the free Pexels license. Find the best stock free photos here.
                                </p>
                            </div>
                        </div>
                        <Link className="xthem" to="">
                            {' '}
                            Xem thêm <i className="fa-sharp fa-solid fa-arrow-right"></i>{' '}
                        </Link>
                    </div>
                </div>
                <section className="sanphamnb mb-4">
                    <h2 className="mt-5">Đối Tác</h2>
                    <div className="bottomSpnb"></div>
                </section>
                <SlideDT />
            </section>
            <div className="add_tt">
                <div className="ghe">
                    <img src={require('~/assets/Img/ghe.png')} alt="" />
                </div>
                <div className="add_tt_in">
                    <div className="text_l">
                        <p>Trải nghiệm dịch vụ</p>
                        <h6>Cùng Hoàng Hoan ngay</h6>
                        <div className="bottomSpnb"></div>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td className="nhaptt" width="200px">
                                    Nhập thông tin
                                </td>
                            </tr>
                            <tr>
                                <td className="input1">
                                    {' '}
                                    <input
                                        type="text"
                                        size="30"
                                        name="userName"
                                        id="userName"
                                        placeholder="Emai/Số điện thoại"
                                    />
                                </td>
                                <td>
                                    {' '}
                                    <input type="submit" name="" id="" value="Gửi" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default TrangChu;
