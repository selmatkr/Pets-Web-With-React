import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <>
        <section className="contact" id="contact">
            <h1 className="heading">contact <span>us</span></h1>
            <div className="row">
                <iframe
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12037.852231349814!2d28.985091699999998!3d41.03700175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zVGFrc2ltIE1leWRhbsSxLCBHw7xtw7zFn3N1eXUsIDM0NDM1IEJleW_En2x1L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1652655842555!5m2!1str!2str"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                ></iframe>
               <form>
                        <h3>get in touch for adoption</h3>
                        <div className="inputBox">
                            <input type="text" placeholder="name" />
                        </div>
                        <div className="inputBox">
                            <input type="text" placeholder="email" />
                        </div>
                        <div className="inputBox">
                            <input type="text" placeholder="phone number" />
                        </div>
                        <button type="submit" className="btn">contact now</button>
                    </form>
            </div>
        </section>

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

export default Contact