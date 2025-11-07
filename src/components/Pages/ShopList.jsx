import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import ShopSidebar from '../Elements/ShopSidebar';
import Blog2 from '../Elements/Blog2';
import OwlCarousel from 'react-owl-carousel';

// const products = [
//     {
//         image: require('./../../images/products/pic-1.jpg'),
//         title: 'Happy Ninja',
//         description: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam.',
//         sale: 'no',
//         cutprice: '',
//         price: '36.00'
//     },
//     {
//         image: require('./../../images/products/pic-2.jpg'),
//         title: 'Flying Ninja',
//         description: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam.',
//         sale: 'yes',
//         cutprice: '45.00',
//         price: '36.00'
//     },
//     {
//         image: require('./../../images/products/pic-3.jpg'),
//         title: 'Half White',
//         description: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam.',
//         sale: 'no',
//         cutprice: '',
//         price: '29.00'
//     },
//     {
//         image: require('./../../images/products/pic-4.jpg'),
//         title: 'Woo Ninja',
//         description: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam.',
//         sale: 'no',
//         cutprice: '',
//         price: '59.00'
//     },
//     {
//         image: require('./../../images/products/pic-5.jpg'),
//         title: 'Woo logo',
//         description: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam.',
//         sale: 'yes',
//         cutprice: '45.00',
//         price: '36.00'
//     },
//     {
//         image: require('./../../images/products/pic-6.jpg'),
//         title: 'Happy Ninja',
//         description: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam.',
//         sale: 'no',
//         cutprice: '',
//         price: '99.00'
//     },
//     {
//         image: require('./../../images/products/pic-7.jpg'),
//         title: 'Woo Ninja',
//         description: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam.',
//         sale: 'no',
//         cutprice: '',
//         price: '45.00'
//     },
//     {
//         image: require('./../../images/products/pic-8.jpg'),
//         title: 'Danger black',
//         description: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam.',
//         cutprice: '',
//         price: '29.00'
//     },
//     {
//         image: require('./../../images/products/pic-1.jpg'),
//         title: 'Happy Ninja',
//         description: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam.',
//         sale: 'no',
//         cutprice: '',
//         price: '59.00'
//     },
//     {
//         image: require('./../../images/products/pic-2.jpg'),
//         title: 'Flying Ninja',
//         description: 'Asperiores, tenetur, blanditiis, quaerat odit exercitationem pariatur quibus dam veritatis quisquam laboriosam.',
//         sale: 'no',
//         cutprice: '',
//         price: '45.00'
//     }
// ]

var bnrimg = require('./../../images/banner/5.jpg');

class ShopList extends React.Component {

    render() {
        const options = {
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            margin: 30,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items: 1,
            dots: false,
            animateOut: 'fadeOut',
        };
        return (
            <>
                <Header4 />
                <div className="page-content">
                <Banner title="Shop list Style" pagename="Shop List Style" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg} />
                    {/* SHOP SECTION START */}
                    <div className="section-full mobile-page-padding bg-gray p-t80 p-b50">
                                        <div className="container">
                                            {/* TITLE START */}
                                            {/* <div className="section-head">
                                                <div className="sx-separator-outer separator-center">
                                                    <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }}>
                                                        <h3 className="sep-line-one">Blog</h3>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* TITLE END */}
                                            {/* IMAGE CAROUSEL START */}
                                            <div className="section-content">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                                        {/* COLUMNS 2 */}
                                                        <div className="blog-post blog-lg date-style-3 block-shadow">
                                                            <div className="sx-post-media sx-img-effect zoom-slow">
                                                                <div className="sx-thum-bx sx-img-overlay1 sx-img-effect yt-thum-box">
                                                                    <img src="https://img.youtube.com/vi/Oy2QIiSQT2U/0.jpg" alt="" />
                                                                    {/* <NavLink to={"#"} className="play-now" data-toggle="modal" data-target="#myModal2">
                                                                        <i className="icon fa fa-play" />
                                                                        <span className="ripple" />
                                                                    </NavLink> */}
                                                                </div>
                                                            </div>
                                                            <div className="sx-post-info  bg-white">
                                                                <div className="sx-post-meta ">
                                                                    {/* <ul>
                                                                        <li className="post-date"> <strong>20 </strong> <span>Sep 2022</span> </li>
                                                                        <li className="post-author"><NavLink to={"/blog-single"}>By <span>John</span></NavLink> </li>
                                                                        <li className="post-comment"><NavLink to={"/blog-single"}>0 Comments</NavLink> </li>
                                                                    </ul> */}
                                                                </div>
                                                                <div className="sx-post-title ">
                                                                    <h4 className="post-title"><NavLink to={"/blog-single"} style={{color:'#E18A2E'}}>Our Vision</NavLink></h4>
                                                                </div>
                                                                <div className="sx-post-text">
                                                                    <p>We aim to be Qatar’s leading force in collaborative excellence, inspiring innovation and shaping industry benchmarks. Our vision is a future where our group of companies flourishes while creating meaningful impact across industries and society.</p>
                                                                </div>
                                                                <div className="clearfix">
                                                                    <div className="sx-post-readmore pull-left">
                                                                        {/* <NavLink to={"/blog-single"} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink> */}
                                                                    </div>
                                                                    <div className="widget_social_inks pull-right">
                                                                        {/* <ul className="social-icons social-square social-dark m-b0">
                                                                            <li><a href="https://www.facebook.com" target="_blank" className="fa fa-facebook" /></li>
                                                                            <li><a href="https://twitter.com" target="_blank" className="fa fa-twitter" /></li>
                                                                            <li><a href="https://rss.com" target="_blank" className="fa fa-rss" /></li>
                                                                            <li><a href="https://www.youtube.com" target="_blank" className="fa fa-youtube" /></li>
                                                                            <li><a href="https://www.instagram.com" target="_blank" className="fa fa-instagram" /></li>
                                                                        </ul> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                                        {/* COLUMNS 3 */}
                                                        <div className="blog-post blog-lg date-style-3 block-shadow">
                                                            <div className="sx-post-media">
                                                                {/*Fade slider*/}
                                                                <OwlCarousel className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right" {...options}>
                                                                    <div className="item">
                                                                        <div className="aon-thum-bx">
                                                                            <img src={require('./../../images/blog/default/thum1.jpg')} alt="" />
                                                                        </div>
                                                                    </div>
                                                                    {/* <div className="item">
                                                                        <div className="aon-thum-bx">
                                                                            <img src={require('./../../images/blog/default/thum2.jpg')} alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="item">
                                                                        <div className="aon-thum-bx">
                                                                            <img src={require('./../../images/blog/default/thum3.jpg')} alt="" />
                                                                        </div>
                                                                    </div> */}
                    
                                                                </OwlCarousel>
                                                                {/*fade slider END*/}
                                                            </div>
                                                            <div className="sx-post-info  bg-white">
                                                                <div className="sx-post-meta ">
                                                                    {/* <ul>
                                                                        <li className="post-date"> <strong>20 </strong> <span>Sep 2022</span> </li>
                                                                        <li className="post-author"><NavLink to={"/blog-single"}>By <span>John</span></NavLink> </li>
                                                                        <li className="post-comment"><NavLink to={"/blog-single"}>0 Comments</NavLink> </li>
                                                                    </ul> */}
                                                                </div>
                                                                <div className="sx-post-title ">
                                                                    <h4 className="post-title" ><NavLink to={"/blog-single"} style={{color:'#E18A2E'}}>Our Mission</NavLink></h4>
                                                                </div>
                                                                <div className="sx-post-text">
                                                                    <p>Our mission at AZIM Group is to provide outstanding services driven by collaboration, innovation, and unwavering commitment. We strive to surpass client expectations, influence industry standards, and actively support Qatar’s development.</p>
                                                                </div>
                                                                <div className="clearfix">
                                                                    <div className="sx-post-readmore pull-left">
                                                                        {/* <NavLink to={"/blog-single"} title="READ MORE" rel="bookmark" className="site-button-link">Read More</NavLink> */}
                                                                    </div>
                                                                    <div className="widget_social_inks pull-right">
                                                                        <ul className="social-icons social-square social-dark m-b0">
                                                                            {/* <li><NavLink to={{ pathname: "https://www.facebook.com" }} target="_blank" className="fa fa-facebook" /></li>
                                                                            <li><NavLink to={{ pathname: "https://twitter.com" }} target="_blank" className="fa fa-twitter" /></li>
                                                                            <li><NavLink to={{ pathname: "https://rss.com" }} target="_blank" className="fa fa-rss" /></li>
                                                                            <li><NavLink to={{ pathname: "https://www.youtube.com" }} target="_blank" className="fa fa-youtube" /></li>
                                                                            <li><NavLink to={{ pathname: "https://www.instagram.com" }} target="_blank" className="fa fa-instagram" /></li> */}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hilite-title text-left p-l50 text-uppercase">
                                            <strong>Vision</strong>
                                        </div>
                                    </div>
                    {/* SHOP SECTION END */}
                </div>

                <Footer />
            </>
        );
    };
};

export default ShopList;