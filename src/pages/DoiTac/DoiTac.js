import './DoiTac.css';

function DoiTac() {
    return (
        <>
            <section className="bannerDoiTac">
                <div className="banner_img ">
                    <img src={require('~/assets/Img/doitac.jpg')} alt="" />
                </div>
                <div className="out_doitac ">
                    <div className="row">
                        <div className="doitac  mt-4">
                            <div className="khoangtrang_1"></div>
                            <div className="logo col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                <img src={require('~/assets/Img/VINPEARL_logo.jpg')} alt="" />
                            </div>
                            <div className="contentDT col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                                <h4>Công ty cổ phần VINPEARL</h4>
                                <p>
                                    Vinpearl là thương hiệu dịch vụ du lịch nghỉ dưỡng – giải trí lớn nhất Việt Nam.
                                    Vinpearl sở hữu chuỗi khách sạn, resort và trung tâm hội nghị đẳng cấp 5 sao, các
                                    khu vui chơi giải trí quốc tế tọa lạc tại những danh thắng du lịch nổi tiếng nhất
                                    của Việt Nam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="out_doitac ">
                    <div className="row">
                        <div className="doitac  mt-4">
                            <div className="logo col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                <img src={require('~/assets/Img/logoMuongThanh.jpg')} alt="" />
                            </div>
                            <div className="contentDT col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                                <h4>TẬP ĐOÀN KHÁCH SẠN MƯỜNG THANH</h4>
                                <p>
                                    Tại Mường Thanh, chúng tôi mời bạn cùng khởi hành chuyến đi tìm về không gian thanh
                                    thản chứa đựng những nét văn hóa mang đậm tinh thần bản sắc Việt, nơi con người gắn
                                    kết và thân ái gửi trao nhau tình cảm chân thành.{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="out_doitac ">
                    <div className="row">
                        <div className="doitac  mt-4">
                            <div className="logo col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                <img src={require('~/assets/Img/sheraton_logo.jpg')} alt="" />
                            </div>
                            <div className="contentDT col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                                <h4>Sheraton HanoI HOTEL</h4>
                                <p>
                                    Vinpearl là thương hiệu dịch vụ du lịch nghỉ dưỡng – giải trí lớn nhất Việt Nam.
                                    Vinpearl sở hữu chuỗi khách sạn, resort và trung tâm hội nghị đẳng cấp 5 sao, các
                                    khu vui chơi giải trí quốc tế tọa lạc tại những danh thắng du lịch nổi tiếng nhất
                                    của Việt Nam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="out_doitac ">
                    <div className="row">
                        <div className="doitac  mt-4">
                            <div className="logo col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                <img src={require('~/assets/Img/dt-coffee-house.jpg')} alt="" />
                            </div>
                            <div className="contentDT col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                                <h4>THE COFFEE HOUSE</h4>
                                <p>
                                    Tại The Coffee House, chúng tôi luôn trân trọng những câu chuyện và đề cao giá trị
                                    Kết nối con người. Chúng tôi mong muốn The Coffee House sẽ trở thành “Nhà Cà Phê",
                                    nơi mọi người xích lại gần nhau và tìm thấy niềm vui, sự sẻ chia thân tình bên những
                                    tách cà phê đượm hương, chất lượng.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="out_doitac ">
                    <div className="row">
                        <div className="doitac  mt-4">
                            <div className="logo col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                <img src={require('~/assets/Img/dt-marvella.jpg')} alt="" />
                            </div>
                            <div className="contentDT col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                                <h4>Marvella Hotel Nha Trang</h4>
                                <p>
                                    Marvella một thương hiệu khách sạn 4 sao mới xây dựng theo phong cách tân cổ điển,
                                    sang trọng.
                                </p>
                            </div>
                            <div className="khoangtrang_1"></div>
                        </div>
                    </div>
                </div>
                <div className="khoangtrong2"></div>
            </section>
            <div className="khoangtrong"> </div>
        </>
    );
}

export default DoiTac;
