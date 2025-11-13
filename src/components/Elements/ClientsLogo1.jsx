import React from 'react';
import { NavLink } from 'react-router-dom';

const logos = [
    { image: require('./../../images/client/77.png') },
    { image: require('./../../images/client/78.png') },
    { image: require('./../../images/client/79.png') },
    { image: require('./../../images/client/80.png') },
    { image: require('./../../images/client/81.png') },
    { image: require('./../../images/client/82.png') },
    { image: require('./../../images/client/83.png') },
    { image: require('./../../images/client/84.png') },
    { image: require('./../../images/client/85.png') },
    { image: require('./../../images/client/86.png') },
    { image: require('./../../images/client/87.png') },
    { image: require('./../../images/client/88.png') },
    { image: require('./../../images/client/89.png') },
    { image: require('./../../images/client/90.png') },
    { image: require('./../../images/client/91.png') },
    { image: require('./../../images/client/92.png') },
    { image: require('./../../images/client/93.png') },
    { image: require('./../../images/client/94.png') },
    { image: require('./../../images/client/95.png') },
    { image: require('./../../images/client/96.png') },
    { image: require('./../../images/client/97.png') },
    { image: require('./../../images/client/98.png') },
    { image: require('./../../images/client/99.png') },
    { image: require('./../../images/client/100.png') },
];


var bgimg1 = require('./../../images/background/bg-12.jpg');
var bgimg2 = require('./../../images/background/cross-line2.png');

class ClientsLogo1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0
        };
        this.slidesToShow = 4; // Number of logos to show at once
        this.totalSlides = Math.ceil(logos.length / this.slidesToShow);
        this.slideInterval = null;
    }

    componentDidMount() {
        this.startAutoSlide();
    }

    componentWillUnmount() {
        this.stopAutoSlide();
    }

    startAutoSlide = () => {
        this.slideInterval = setInterval(() => {
            this.setState(prevState => ({
                currentSlide: (prevState.currentSlide + 1) % this.totalSlides
            }));
        }, 2000);
    }

    stopAutoSlide = () => {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
        }
    }

    render() {
        const { currentSlide } = this.state;

        return (
            <>
                <div className="section-full mobile-page-padding  p-t30 p-b30 bg-repeat" >
                    <div className="container">
                        {/* TITLE START */}
                        {/* <div className="section-head">
                            <div className="sx-separator-outer separator-left">
                                <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg2 + ')' }}>
                                    <h3 className="sep-line-one">Our Clients</h3>
                                </div>
                            </div>
                        </div> */}
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="client-carousel-wrapper">
                                <div 
                                    className="client-carousel-track"
                                    style={{
                                        transform: `translateX(-${currentSlide * (100 / this.slidesToShow)}%)`,
                                        transition: 'transform 0.5s ease-in-out',
                                        display: 'flex',
                                        width: `${(logos.length / this.slidesToShow) * 10}%`
                                    }}
                                >
                                    {logos.map((item, index) => (
                                        <div 
                                            key={index}
                                            className="client-logo-slide"
                                            style={{
                                                flex: `0 0 ${100 / this.slidesToShow}%`,
                                                padding: '0 10px',
                                                boxSizing: 'border-box'
                                            }}
                                        >
                                            <NavLink to={"/about"} className="client-logo-pic">
                                                <img 
                                                    src={item.image} 
                                                    alt={`Client logo ${index + 1}`}
                                                    style={{
                                                        width: '100%',
                                                        height: 'auto',
                                                        objectFit: 'contain'
                                                    }}
                                                />
                                                <div>
                                                    {/* <span>View More</span> */}
                                                </div>
                                            </NavLink>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase">
                        {/* <strong>Clients</strong> */}
                    </div>
                </div>

                <style jsx>{`
                    .client-carousel-wrapper {
                        overflow: hidden;
                        position: relative;
                        width: 100%;
                    }
                    
                    .client-carousel-track {
                        display: flex;
                        will-change: transform;
                    }
                    
                    .client-logo-slide {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    
                    .client-logo-pic {
                        display: block;
                        text-align: center;
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .client-logo-pic div {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        // background: rgba(0, 0, 0, 0.7);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        // transition: opacity 0.3s ease;
                        // color: white;
                    }
                    
                    .client-logo-pic:hover div {
                        // opacity: 1;
                    }
                `}</style>
            </>
        );
    }
};

export default ClientsLogo1;