import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Blog= () => {
    return (
                <>
                    <section className="blogs" id="blogs">
                        <h1 className="heading">our <span>blog</span></h1>
                        <div className="box-container">
                            <div className="box">
                                <div className="image">
                                    <img src="public/blog-1.jpg" alt="blog" />
                                </div>
                                <div className="content">
                                    <a href="#" className="title">the process of cats adjusting to a new home</a>
                                    <span>by admin / 10st may, 2021</span>
                                    <p>
                                        Cats are creatures that are attached to their living spaces and enjoy routines. Because of these traits, moving to a new home can be a very stressful process for them. With proper planning and a patient approach, you can help your cat easily adapt to its new home!
                                    </p>
                                    <a href="#" className="btn">read more</a>
                                </div>
                            </div>
        
                            <div className="box">
                                <div className="image">
                                    <img src="public/blog-2.jpg" alt="blog" />
                                </div>
                                <div className="content">
                                    <a href="#" className="title">How should our friends be cared for in cold weather?</a>
                                    <span>by admin / 23st march, 2024</span>
                                    <p>
                                        Thick and matted fur does not provide enough protection for your dogs skin against extreme cold. If your dog spends a lot of time outdoors, regularly check its ears and paws for signs of frostbite. 
                                    </p>
                                    <a href="#" className="btn">read more</a>
                                </div>
                            </div>
        
                            <div className="box">
                                <div className="image">
                                    <img src="public/blog-3.jpg" alt="blog" />
                                </div>
                                <div className="content">
                                    <a href="#" className="title">pet care and 10 issues to consider</a>
                                    <span>by admin / 17st november, 2023</span>
                                    <p>
                                        Regular Check-ups: Just as early diagnosis is crucial for human health, it is equally important for our pets. During regular check-ups, your cat or dogs weight gain, oral and dental health, ear, eye, and skin examinations are typically performed.
                                    </p>
                                    <a href="#" className="btn">read more</a>
                                </div>
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
                            created by <span>Selma Toker - Nazlıcan Akyol - Ramazan Ozer - Mustafa Yılmaz - Berkecan Mete</span> | all rights reserved
                        </div>
                    </section>
                </>
            );
        };
export default Blog;