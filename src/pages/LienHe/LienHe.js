import './LienHe.css';
function LienHe() {
    return (
        <>
            <section className="bannerLH">
                <div className="banner_main">
                    <div className="banner_imgLH">
                        <img src={require('~/assets/Img/logo-trang.png')} alt="" />
                    </div>
                    <div className="banner_title">
                        <h1>LIÊN HỆ</h1>
                    </div>
                </div>
            </section>

            <section className="lienheLH">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6 pt-5 pb-5">
                            <div className="lienhe_left">
                                <img src={require('~/assets/Img/sp-1.png')} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 pt-5 pb-5">
                            <div className="lienhe_right">
                                <h4>Liên hệ với chúng tôi</h4>
                                <div className="mt-3">
                                    <label for=""></label>
                                    <input type="text" placeholder="Họ tên" />
                                </div>
                                <div className="mt-3">
                                    <label for=""></label>
                                    <input type="text" placeholder="Email" />
                                </div>
                                <div className="mt-3">
                                    <label for=""></label>
                                    <input type="text" placeholder="Số điện thoại" />
                                </div>
                                <div className="mt-3">
                                    <label for=""></label>
                                    <input type="text" placeholder="Nội dung" />
                                </div>
                                <div className="mt-3">
                                    <button> Gửi </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LienHe;
