import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <h1 className="heading">
          about <span>us</span>
        </h1>
        <div className="row">
          <div className="image">
            <img src="public/about1.png" alt="about" />
          </div>
          <div className="content">
            <h3>Who are we and What do we aim for?</h3>
            <p>
              We are here to ensure a safer and more loving life for animals! Our platform is dedicated to protecting animals in need, completing their vaccinations, and helping them find warm, loving homes. By bringing together animal lovers and communities, we make the adoption process easier and
              emphasize the importance of responsible pet ownership. But thats not all! We also provide the opportunity to donate for the health, shelter, and care needs of animals. By contributing, you can change the life of a living being and help them find the loving world they truly deserve...
            </p>
          </div>
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
          created by <span>Selma Toker - Nazlıcan Akyol - Ramazan Ozer - Mustafa Yılmaz - Berkecan Mete</span> | all rigths reserved
        </div>
      </section>
    </div>
  );
};

export default About;
