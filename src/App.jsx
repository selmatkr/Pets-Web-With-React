import Card from "../component/card/card";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>WHAT DID YOU DO TODAY TO BE A GOOD PERSON?</h3>
          <p>Helping A Stray Animal Might Not Change The World, But It Will Definitely Change Their World.</p>
          <button 
            className="donation-button"
            onClick={() => navigate('/donationsystem')}
          >
            Donation
          </button>
        </div>
      </section>

      <section className="friends" id="friends">
        <h1 className="heading">
          our <span>friends</span>
        </h1>

        <div className="box-container">
          {/* Use Card component for each animal */}
          <Card img="/friends1.png" alt="friends" desc="IT 2 YEARS OLD AND WAS ABANDONED." name="Romeo" />
          <Card img="/friends2.png" alt="friends" desc="THE DOG WAS FOUND HUNGRY AND COLD BY THE SİDE OF A DUMPSTER. NOW, IT HAS REGAİNED HEALTH. IT 3 YEARS OLD" name="Cooper" />
          <Card img="/friends3.png" alt="friends" desc="THE CAT WAS BEATEN BY ITS OWNER AND LEFT STARVİNG FOR DAYS. WHEN IT WAS FOUND, IT HAD TO LOSE AN EYE DUE TO AN INFECTİON BUT NOW, ITS HEALTH IS VERY GOOD; IT ONLY FEARS PEOPLE. IT 1 YEARS OLD." name="Bessie" />
          <Card
            img="public/friends4.jpg"
            alt="friends"
            desc="THE DOG WAS FOUND AFTER BEİNG HİT BY A CAR AND A FRACTURE WAS DETECTED IN ITS HİND PAW BECAUSE OF THİS, IT HAS A TREMBLİNG ISSUE. AFTER COMPLETİNG ITS TREATMENT, IT WİLL BE ADOPTED BY A FAMİLY WHO CAN TAKE GOOD CARE OF IT. THE DOG 4 YEARS OLD."
            name="Hero"
          />
        </div>
      </section>

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

      <section className="comments" id="comments">
        <h1 className="heading">
          benefactor <span>comments</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="public/quote.png" alt="quote" />
            <p>
              Two days ago, I adopted a cat with only two legs and named her Cassie. Although I wanted to adopt a cat like her from the beginning, I had my concerns at first because I wasn’t sure if I could take good care of her. But you have been so helpful throughout this process that I’m so glad
              to have met you! Friends, these amazing people don’t just work to find homes for these animals; they also do everything they can to help our furry friends adjust to their new homes. And thank you so much for the support you provided for Cassie’s legs as well!
            </p>
            <img src="public/avatar-1.png" alt="avatar" className="user" />
            <h3>John Doe</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="box">
            <img src="public/quote.png" alt="quote" />
            <p>
              As someone with 4 cats and 5 dogs, adding one more companion to my family thanks to you is truly amazing! I am impressed by how you vaccinate the stray animals you find, prepare their meals according to their weight and size, maintain cat and dog parks, and ensure the cleanliness of
              your shelter. Additionally, organizing donation campaigns for philanthropists is fantastic! Many friends like me closely follow and support what you do and they want to become donors. Thank you for all your efforts—keep up the great work!
            </p>
            <img src="public/avatar-2.png" alt="avatar" className="user" />
            <h3>Eva Becker</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="box">
            <img src="public/quote.png" alt="quote" />
            <p>
              When I try to reach you for communication, it can be a bit difficult, but I can imagine how busy you must be. Other than that, organizing donation campaigns and sharing the receipts for the donations clearly show how trustworthy you are. I believe your food and vaccination campaigns
              for street animals give hope to many people, and this platform shows us how much good we can do. Thanks to your efforts, even my children feed the cats and dogs in our neighborhood with food and water every week. Good people like you are a blessing—thank you for existing.
            </p>
            <img src="public/avatar-3.png" alt="avatar" className="user" />
            <h3>Carl Tommy</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs" id="blogs">
        <h1 className="heading">
          our <span>blog</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src="public/blog-1.jpg" alt="blog" />
            </div>
            <div className="content">
              <a href="#" className="title">
                the process of cats adjusting to a new home
              </a>
              <span>by admin / 10st may, 2021</span>
              <p>Cats are creatures that are attached to their living spaces and enjoy routines. Because of these traits, moving to a new home can be a very stressful process for them. With proper planning and a patient approach, you can help your cat easily adapt to its new home!</p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="public/blog-2.jpg" alt="blog" />
            </div>
            <div className="content">
              <a href="#" className="title">
                how should our friends be cared for in cold weather?
              </a>
              <span>by admin / 23st march, 2024</span>
              <p>Thick and matted fur does not provide enough protection for your dogs gainst extreme cold. If your dog spends a lot of time outdoors, regularly check its ears and paws for signs of frostbite.</p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="public/blog-3.jpg" alt="blog" />
            </div>
            <div className="content">
              <a href="#" className="title">
                pet care and 10 issues to consider
              </a>
              <span>by admin / 17st november, 2023</span>
              <p>Regular Check-ups: Just as early diagnosis is crucial for human health, it is equally important for our pets. During regular check-ups, your cat or dogs weight gain, oral and dental health, ear, eye, and skin examinations are typically performed.</p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h1 className="heading">
          contact <span>us</span>
        </h1>
        <div className="row">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12037.852231349814!2d28.985091699999998!3d41.03700175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zVGFrc2ltIE1leWRhbsSxLCBHw7xtw7zFn3N1eXUsIDM0NDM1IEJleW_En2x1L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1652655842555!5m2!1str!2str"
            loading="lazy"
          ></iframe>
          <form>
            <h3>get in touch for adoption</h3>
            <div className="inputBox">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="name" />
            </div>
            <div className="inputBox">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="email" />
            </div>
            <div className="inputBox">
              <i className="fas fa-phone"></i>
              <input type="number" placeholder="phone number" />
            </div>
            <input type="submit" className="btn" value="contact now" />
          </form>
        </div>
      </section>

      <section className="footer">
        <div className="search">
          <input type="text" className="search-input" placeholder="Search" />
          <button className="btn btn-primary">search</button>
        </div>
        <div className="share">
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-instagram"></a>
          <a href="#" className="faFb fa-linkedin"></a>
        </div>

        <div className="links">
          <a href="index.html" className="active">
            Home
          </a>
          <a>About</a>
          <a href="contact.html">Contact</a>
          <a href="blogs.html">Blogs</a>
        </div>

        <div className="credit">
          created by <span>Selma Toker</span> | all rigths reserved
        </div>
      </section>
    </>
  );
}

export default App;
