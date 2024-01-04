import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './SlideDT.css';

function SlideDT() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };
    return (
        <div className="slide2 container">
            <Slider {...settings}>
                <div className="image-slider2">
                    <div className="image-item">
                        <div className="image">
                            <img src={require('~/assets/Img/dt-coffee-house.jpg')} alt="" />
                        </div>
                    </div>
                </div>
                <div className="image-slider2">
                    <div className="image-item">
                        <div className="image">
                            <img src={require('~/assets/Img/dt-marvella.jpg')} alt="" />
                        </div>
                    </div>
                </div>
                <div className="image-slider2">
                    <div className="image-item">
                        <div className="image">
                            <img src={require('~/assets/Img/dt-mellisa.jpg')} alt="" />
                        </div>
                    </div>
                </div>
                <div className="image-slider2">
                    <div className="image-item">
                        <div className="image">
                            <img src={require('~/assets/Img/dt-muongthanh.jpg')} alt="" />
                        </div>
                    </div>
                </div>
                <div className="image-slider2">
                    <div className="image-item">
                        <div className="image">
                            <img src={require('~/assets/Img/dt-sharaton.jpg')} alt="" />
                        </div>
                    </div>
                </div>
                <div className="image-slider2">
                    <div className="image-item">
                        <div className="image">
                            <img src={require('~/assets/Img/doitac6.jpg')} alt="" />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default SlideDT;
