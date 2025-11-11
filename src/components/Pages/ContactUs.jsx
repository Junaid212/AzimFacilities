import React from 'react';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import GoogleMapReact from 'google-map-react';
import Header2 from '../Common/Header2';

var bnrimg = require('./../../images/azim/23.png');

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ContactUs extends React.Component {
    render() {
        const defaultProps = {
            center: {
              lat: 34.073280,
              lng: -118.251410
            },
            zoom: 12
        };
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title="Contact Us" pagename="Contact us" description=" We’re always here to assist you and provide answers to your questions." bgimage={bnrimg}/>
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* GOOGLE MAP & CONTACT FORM */}
                            <div className="section-content">
                                {/* CONTACT FORM*/}
                                <div className="row">
                                    <div className="col-lg-8 col-md-12 col-sm-12">
                                        <form className="contact-form cons-contact-form  p-a30" method="post" action="#" style={{backgroundColor:'#E0892E'}}>
                                            <div className="contact-one">
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <div className="sx-separator-outer separator-left">
                                                        <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(images/background/cross-line2.png)' }}>
                                                            <h3 className="sep-line-one">Form</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                <div className="form-group">
                                                    <input name="username" type="text" required className="form-control" placeholder="Name" />
                                                </div>
                                                <div className="form-group">
                                                    <input name="email" type="text" className="form-control" required placeholder="Email" />
                                                </div>
                                                <div className="form-group">
                                                    <textarea name="message" rows={4} className="form-control " required placeholder="Message" defaultValue={""} />
                                                </div>
                                                <div className="text-right">
                                                    <button name="submit" type="button" value="Submit" className="site-button btn-half"><span> submit</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        <div className="contact-info block-shadow bg-white bg-center p-a40" style={{ backgroundImage: 'url(images/background/bg-map.png)' }}>
                                            <div>
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <div className="sx-separator-outer separator-left">
                                                        <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(images/background/cross-line2.png)' }}>
                                                            <h3 className="sep-line-one">Info</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                <div className="sx-icon-box-wraper left p-b30">
                                                    <div className="icon-xs"><i className="fa fa-phone" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0">Phone number</h5>
                                                        <p>+ 974 4480 2851</p>
                                                        <p>+ 974 7704 7248</p>
                                                    </div>
                                                </div>
                                                <div className="sx-icon-box-wraper left p-b30">
                                                    <div className="icon-xs"><i className="fa fa-envelope" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0">Email address</h5>
                                                        <p>afms@azimgroup.qa</p>
                                                    </div>
                                                </div>
                                                <div className="sx-icon-box-wraper left">
                                                    <div className="icon-xs"><i className="fa fa-map-marker" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0">Address info</h5>
                                                        <p>NBK Building, #805, 8th Floor, Doha-Qatar</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gmap-outline">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                            >
                            <AnyReactComponent lat={34.073280} lng={-118.251410} text={<i className="fa fa-map-marker" />}                                        />
                        </GoogleMapReact>                        
                    </div>
                    {/* SECTION CONTENT END */}
                </div>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.3517147155994!2d51.5274698!3d25.279608399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c5bf1c5b1b51%3A0x643fc6f5ecc3e715!2sAzim%20Facilities%20Management%20%26%20Services!5e1!3m2!1sen!2sin!4v1762862807058!5m2!1sen!2sin" width="100%" height="450"  style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>

                <Footer />
            </>
        );
    };
};

export default ContactUs;