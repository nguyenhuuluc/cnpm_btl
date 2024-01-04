import './GioiThieu.css';

function GioiThieu() {
    return (
        <>
            <section className="header_banner">
                <div className="banner_img ">
                    <img src={require('~/assets/Img/gioithieu.jpg')} alt="" />
                </div>
            </section>

            <section className="content-center">
                <div className="container">
                    <div className="establish">
                        <h2 className="title-border">Thành lập & Phát triển</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <div className="content-img">
                                <img src={require('~/assets/Img/gt_1.jpg')} alt="" />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="establish-content">
                                <p>
                                    Nội thất Hoàng Hoan được xây dựng dựa trên tình yêu, đam mê của tôi đối với nghề mộc
                                    và khao khát mang những sản phẩm nội thất đẹp của mình đến với khách hàng thân yêu.
                                </p>
                                <p>
                                    Cả 1 quá trình từ 1 người thợ phụ rồi được làm thợ mộc chính, tự tạo ra cho mình 1
                                    phân xưởng nhỏ đến phát triển và hiện tại Hoàng Hoan đã là 1 trong những công ty có
                                    dịch vụ thiết kế và thi công nội thất uy tín chất lượng với giá tốt nhất tại Hà Nội
                                    với sứ mệnh "đem đến cho khách hàng không gian nội thất hoàn hỏa".
                                </p>
                                <p>
                                    Hoàng Hoan luôn nỗ lực để tạo ra không gian đẹp cho khách hàng theo nhiều gam màu
                                    sắc khác nhau và phong cách đa dạng, theo đúng sở thích, lứa tuổi và phong thủy của
                                    khách hàng.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>

                    <h2 className="title-border">Tầm nhìn</h2>

                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 vision">
                            <div className="vision-img">
                                <img src={require('~/assets/Img/gt_tamNhin.jpg')} alt="" />
                            </div>
                            <div className="vision-content">
                                <p>
                                    Chúng tôi luông hướng đến việc tạo ra các sản phẩm nội thất trên triết lý tôn trọng
                                    và giữ gìn những gì tự nhiên đã ban tặng cho con người. Chúng tôi luôn tìm tòi và
                                    ứng dụng các giải pháp sản phẩm và công nghệ tiên tiến nhất, hợp tác với các đối tác
                                    công nghệ hàng đầu thế giới, tìm kiếm và phát triển các vùng nguyên liệu tự nhiên
                                    được thiên nhiên chọn lọc, ưu đãi trong nước lẫn nước ngoài, tất cả nhằm tạo ra các
                                    sản phẩm nội thất tự nhiên gần gữi cho người khách hàng Việt Nam.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>

                    <h2 className="title-border">Sứ mệnh</h2>
                    <div className="row pb-3">
                        <div className="col-md-6">
                            <div className="mission">
                                <div className="mission-img">
                                    <img src={require('~/assets/Img/sumenh1.jpg')} alt="" />
                                </div>
                                <div className="mission_content">
                                    <h6>Với xã hội</h6>
                                    <p>
                                        Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, tích cực cùng cộng đồng xây
                                        dựng môi trường sống bền vững
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mission">
                                <div className="mission-img">
                                    <img src={require('~/assets/Img/sumenh2.jpg')} alt="" />
                                </div>
                                <div className="mission_content">
                                    <h6>Với nhân viên</h6>
                                    <p>Xây dựng môi trường làm việc chuyên nghiệp, năng động, sáng tạo và nhân văn.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mission">
                                <div className="mission-img">
                                    <img src={require('~/assets/Img/sumenh3.jpg')} alt="" />
                                </div>
                                <div className="mission_content">
                                    <h6>Với đối tác</h6>
                                    <p>
                                        Đề cao tinh thần hợp tác cùng phát triển, cam kết trở thành "Người đồng hành số
                                        1" của các đối tác.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mission">
                                <div className="mission-img">
                                    <img src={require('~/assets/Img/sumenh4.jpg')} alt="" />
                                </div>
                                <div className="mission_content">
                                    <h6>Với với thị trường</h6>
                                    <p>
                                        Cung cấp các sản phẩm với chất lượng quốc tế và phù hợp với con người Việt Nam.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default GioiThieu;
