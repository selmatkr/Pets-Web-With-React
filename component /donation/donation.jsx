import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Donation = () => {
    return (
        <>
    {/* Menu Section */}
    <section className="menu" id="menu">
        <h1 className="heading">our <span>menu for donation</span></h1>
        <div className="box-container">
            <div className="slider-container">
                <div className="slider">
                    <div className="box">
                        <div className="box-head">
                            <img src="/public/menu-4.png" alt="Cat Food" />
                            <span className="menu-category">FOR YOUR CAT</span>
                            <h3>For Cat</h3>
                            <div className="price">
                                $20.99 <span>$40.99</span>
                            </div>
                        </div>
                        <div className="box-bottom">
                            <button className="btn">add to cart</button>
                        </div>
                    </div>

                    <div className="box">
                        <div className="box-head">
                            <img src="/public/menu-5.png" alt="Pet Food Packs" />
                            <span className="menu-category">FRUITS AND VEGGIES</span>
                            <h3>3 packs of pet food</h3>
                            <div className="price">
                                $99.99 <span>$129.99</span>
                            </div>
                        </div>
                        <div className="box-bottom">
                            <button className="btn">add to cart</button>
                        </div>
                    </div>

                    <div className="box">
                        <div className="box-head">
                            <img src="/public/menu-6.png" alt="Dog Food" />
                            <span className="menu-category">FOR YOUR DOG</span>
                            <h3>2 packs of pet food</h3>
                            <div className="price">
                                $59.99 <span>$79.99</span>
                            </div>
                        </div>
                        <div className="box-bottom">
                            <button className="btn">add to cart</button>
                        </div>
                    </div>
                </div>
                <button className="prev" onClick={() => handleSlide('prev')}>
                    &#10094;
                </button>
                <button className="next" onClick={() => handleSlide('next')}>
                    &#10095;
                </button>
            </div>
        </div>
    </section>

    {/* Footer Section */}
    <section className="footer">
        
    <div className="share">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

        <div className="credit">
            created by <span>Selma Toker - Nazlıcan Akyol - Ramazan Ozer - Mustafa Yılmaz - Berkecan Mete</span> | all rights reserved
        </div>
    </section>
</>



    );
};

export default Donation
   