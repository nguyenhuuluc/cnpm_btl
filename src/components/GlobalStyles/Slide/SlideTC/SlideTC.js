import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { dataPrd } from '~/reduxModule';

import './SlideTC.css';

function SlideTC(props) {
    // let { productItem } = props;
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="slide container">
            <div className="image-slider">
                <Slider {...settings}>
                    {dataPrd.map((item) => (
                        <div className="image-item">
                            <div className="image">
                                <img src={item.linkImg} alt={item.title} />
                            </div>
                            <div className="slide_ct">
                                <h4>{item.title}</h4>
                                <div className="star">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                {/* <p>(size lớn trắng sữa)</p> */}
                                <p className="p_price">{item.price} VND</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default SlideTC;
