import { useRef, useState } from "react";

import AboutCard from "../../components/aboutCard/AboutCard";

import "./home.css";
import Marquee from "react-fast-marquee";
import DiscoverCard from "../../components/discovercard/DiscoverCard";
import HomeButton from "../../components/button/HomeButton";
import ReviewCard from "../../components/review/ReviewCard";
import FAQ from "../../components/faq/FAQ";
import Footer from "../../components/footer/Footer";
import { FaChevronRight, FaChevronLeft} from "react-icons/fa6";

import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import headerImg from "../../assets/header/hero.png";
import headerImg1 from "../../assets/header/hero-1.png";
import headerImg2 from "../../assets/header/hero-2.png";
import headerImg3 from "../../assets/header/hero-3.png";
import headerImg4 from "../../assets/header/hero-4.png";
import headerImg5 from "../../assets/header/hero-5.png";
import headerImg6 from "../../assets/header/hero-6.png";
import headerImg7 from "../../assets/header/hero-7.png";

import star1 from "../../assets/star1.png"
import star2 from "../../assets/star2.png"

import about1 from "../../assets/about/about-1.png"
import about2 from "../../assets/about/about-2.png"
import about3 from "../../assets/about/about-3.png"

import discover1 from "../../assets/discover/feature-1.png"
import discover2 from "../../assets/discover/feature-2.png"
import discover3 from "../../assets/discover/feature-3.png"

import journal1 from "../../assets/journal/journal-1.png"
import journal2 from "../../assets/journal/journal-2.png"
import journal3 from "../../assets/journal/journal-3.png"

import dashboard from "../../assets/dash-sample.png"

import google from "../../assets/google-play.png"
import apple from "../../assets/apple-logo.png"


import user1 from "../../assets/alucard.png";

import mood from "../../assets/mood/mood-art.svg"

import barcode from "../../assets/barcode1.png"

import downArrow from "../../assets/down-arrow.png";

import { PiLeafFill, PiPencilSimpleLine } from "react-icons/pi";
import Navbar from "../../components/navbar/Navbar";

import { IoCloseOutline } from "react-icons/io5";

const reviews = [
  {
    image: user1,
    title: "Rooted & Growing 🌿",
    content:
      "SOZO has completely transformed my daily walk with God. The journal keeps me accountable, and I've found a community that genuinely prays and grows together.",
    author: "Bisi O.",
    username: "@bisi.faith",
  },
  {
    image: user1,
    title: "Never Miss a Devotion 🙏",
    content:
      "For the first time, I'm consistent with my Bible reading. The daily verses and reminders have helped me stay connected to God's Word every single day.",
    author: "David A.",
    username: "@david.faith",
  },
  {
    image: user1,
    title: "Found My Tribe ❤️",
    content:
      "I joined SOZO hoping to find Christian friends, and now I'm part of an amazing community where we encourage each other, pray together, and grow in faith.",
    author: "Sarah M.",
    username: "@sarah.faith",
  },
  {
    image: user1,
    title: "Prayer Became a Habit 🙌",
    content:
      "The prayer groups have strengthened my relationship with God. Knowing people are praying with me has made difficult seasons much easier to navigate.",
    author: "Michael T.",
    username: "@mike.prays",
  },
  {
    image: user1,
    title: "A Home for My Church ⛪",
    content:
      "Our church now connects with members beyond Sundays. We share announcements, devotionals, events, and prayer requests all in one beautiful platform.",
    author: "Grace E.",
    username: "@gracechurch",
  },
  {
    image: user1,
    title: "Faith Meets Community ✨",
    content:
      "SOZO feels different from every other social app. Every conversation points me back to Christ, and the atmosphere is uplifting instead of distracting.",
    author: "Daniel K.",
    username: "@daniel.walks",
  },
  {
    image: user1,
    title: "Exactly What I Needed 🌍",
    content:
      "Whether I'm journaling, reading Scripture, or joining live discussions, SOZO has become part of my daily routine. It's more than an app—it's a place to grow in faith.",
    author: "Esther N.",
    username: "@esther.faith",
  },
];

const values = [
  "Very unpleasant",
  "Unpleasant",
  "Slightly unpleasant",
  "Neutral",
  "Pleasant",
];

const Home = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [value, setValue] = useState(0);

  const [position, setPosition] = useState(0);
  const sliderRef = useRef(null);

  const handleMove = (e) => {
    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();

    let x = e.clientX - rect.left;

    const maxPosition = rect.width - 22;

    if (x < 0) x = 0;
    if (x > maxPosition) x = maxPosition;

    // calculate 5 steps
    const stepSize = maxPosition / (values.length - 1);

    const step = Math.round(x / stepSize);

    setPosition(step * stepSize);
    setValue(step);
  };

  const handleMouseDown = () => {
    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };
  
  const previousReview = () => {
    setCurrentReview((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };



  const handleClose = () => {
    setShow(false);
  setShow2(true)}
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);

  return (
    <div className="home">
      <section className="Header">
        <Navbar />
        <div className="header-container">
         <div className="header-img">
          <img src={headerImg} alt="" />
         </div>
         <div className="header-content-container">
         <div className="header-content-left">
            <img className="header-left-img1" src={headerImg1} alt="" />
            <img className="header-left-img2"  src={headerImg2} alt="" />
            <img className="header-left-img3"  src={headerImg3} alt="" />
          </div>
          <div className="header-content-middle">
          <div className="header-content-feelings" onClick={handleShow}>
          <div className="header-content-feelings-left">
          <PiLeafFill />
            </div>
            <div className="header-content-feelings-middle">
            <h5>How are you feeling now?</h5>
            <p>Today: 2:49pm</p>
            </div>
            <div className="header-content-feelings-right">
            <PiPencilSimpleLine />
            </div>
          </div>
          <div className="header-content-middle-title">
          <h1>sozo tribe</h1>
          </div>
          <div className="header-content-middle-bottom">
  <div className="circular-text">
    <svg viewBox="0 0 200 200">
      <defs>
        <path
          id="circlePath"
          d="
            M100,100
            m-70,0
            a70,70 0 1,1 140,0
            a70,70 0 1,1 -140,0
          "
        />
      </defs>

      <text>
        <textPath href="#circlePath" startOffset="0%">
          SCROLL DOWN • SCROLL DOWN • SCROLL DOWN •
        </textPath>
      </text>
    </svg>

    <div className="header-content-middle-bottom-arrow">
    <img className="arrow-down" src={downArrow} alt="arrow down" />
    </div>
  </div>
</div>
         
          </div>
          <div className="header-content-right">
          <img className="header-right-img1"  src={headerImg4} alt="" />
          <img className="header-right-img2" src={headerImg5} alt="" />
          <img className="header-right-img3" src={headerImg6} alt="" />
     
          </div>
          <div className="header-other-image">
          <img src={headerImg7} alt="" />
          </div>
        
         </div>
        </div>
      </section>
      <div className="home-marquee">
      <Marquee>
        <div className="marquee-container">
          <img src={star1} alt="" />
          
          <p>The word</p>
          </div>
          <div className="marquee-container">
          <img src={star2} alt="" />
          
          <p>Community</p>
          </div>
          <div className="marquee-container">
          <img src={star1} alt="" />
          
          <p>Prayer</p>
          </div>
          <div className="marquee-container">
          <img src={star2} alt="" />
          
          <p>Journaling</p>
          </div>
          <div className="marquee-container">
          <img src={star1} alt="" />
          
          <p>Daily verse</p>
          </div>
          <div className="marquee-container">
          <img src={star2} alt="" />
          
          <p>Events</p>
          </div>
          <div className="marquee-container">
          <img src={star1} alt="" />
          
          <p>Fellowship</p>
          </div>
          <div className="marquee-container">
          <img src={star2} alt="" />
          
          <p>Games</p>
          </div>
 
        </Marquee>
      </div>
      <section className="web-body">
        <div className="about-container">
          <h1>for everyone growing in faith 🙌 </h1>
          <p>
            Whether you're seeking, leading, or somewhere in between —  <br /> there's a
            place for you in the Sozo tribe.
          </p>

          <div className="about-card-container">
            <AboutCard img={about1} title="for believers" />
            <AboutCard img={about2} title="for you" />
            <AboutCard img={about3} title="for the church" />
          </div>
          </div>

          <div className="discover-container">

          <h1>there’s more to discover here on sozo</h1>

          <div className="about-card-container">
            <DiscoverCard
              img={discover1}
              title="Community"
              content="Join and connect with christians all over the world in christian communities"
            />
            <DiscoverCard
            img={discover2}
            paddingTop="3rem"
              title="Journaling"
              content="Keep track of your thoughts, prayers, and spiritual journey"
            />
            <DiscoverCard
              img={discover3}
                          paddingTop="4rem"
              title="Events"
              content="Attend local gatherings and connect with fellow believers"
            />
          </div>
          </div>
          <div className="cta-card-container">
            <h5>
              Faith was never meant to feel lonely 🕊️ not scattered across group
              chats, not paused between Sundays, not lost in the noise.
            </h5>
            <p>
              Moments of growth matter. The quiet prayer, the honest journal entry, the community that shows up. But the tools around them feel so disconnected. So we built Sozo.
            </p>
            <div className="cta-card-button">
              <HomeButton title="Read our heart" />
            </div>
          </div>

          <div className="home-title">
            <h1>find your tribe in faith communities</h1>
            <div className="home-title-container">
              <p>
                Join and connect with Christians all over the world. Real
                fellowship, real conversations, in communities that actually
                feel like home.
              </p>
              <div className="home-title-button">
                <HomeButton style={{
    backgroundColor: "#4A3AFF",
    borderRadius: "12px",
  }}title="Download sozo" />
              </div>
            </div>
          </div>

          <div className="home-title">
            <h1>reflect, connect & grow — one entry at a time</h1>
            <div className="home-title-container">
              <p>
                Keep track of your thoughts, prayers, and spiritual journey.
                Journal how you feel, anchor it to the Word, and watch your walk
                deepen.
              </p>
              <div className="home-title-button">
                <HomeButton title="Start journaling" />
              </div>
            </div>
          </div>

          <div className="journal-img">
            <img className="journal-img-1" src={journal1} alt="Journal left" />
            <img className="journal-img-2" src={journal2} alt="Journal middle" />
            <img className="journal-img-3" src={journal3} alt="Journal right" />
          </div>

          <div className="home-title">
            <h1>show up for gatherings that matter</h1>
            <div className="home-title-container">
              <p>
                Attend local gatherings and connect with fellow believers. Plan
                services, conferences, and worship nights — all from one simple
                dashboard.
              </p>
              <div className="home-title-button">
                <HomeButton title="get sozo for your church" />
              </div>
            </div>
          </div>

          <div className="home-admin-dashboard">
            <img src={dashboard} alt="Dashboard Sample" />
            {/* <div className="home-admin-dashboard-left">
              <h4>SOZO</h4>
              <div className="home-admin-left">
                <p>My events</p>
              </div>
            </div>
            <div className="home-admin-dashboard-right">
              <div className="home-admin-title">
                <div className="home-admin-title-top">
                  <p>upcoming gatherings</p>
                </div>
                <div className="home-admin-title-bottom">
                  <p>All</p>
                  <p>hosting</p>
                  <p>nearby</p>
                  <p>past</p>
                </div>
              </div>
            </div> */}
          </div>

          <div className="home-download">
            <h1>a tribe &#127757; without borders</h1>
            <p>Grow in faith with SOZO.</p>
            <div className="home-download-container">
              <p>Download Sozo</p>
              <div className="home-download-logo">
              <img src={google} alt="Google Logo" />
              <img src={apple} alt="Apple Logo" /> 
            </div>
            </div>
          </div>

          <div className="home-review">
            <p>in their words</p>
            <h1>what the tribe is saying</h1>

            <ReviewCard
    content={reviews[currentReview].content}
    title={reviews[currentReview].title}
    author={reviews[currentReview].author}
    username={reviews[currentReview].username}
    image={reviews[currentReview].image}
  />
         


      <div className="home-review-arrow-container">
  <div
    className="home-review-arrow-left"
    onClick={previousReview}
  >
    <FaChevronLeft />
  </div>

  <div
    className="home-review-arrow-right"
    onClick={nextReview}
  >
    <FaChevronRight />
  </div>
</div>

          </div>



          <div className="faq-review">
            <FAQ />
          </div>

          <Footer />
    
      </section>
      <Modal show={show} onHide={handleClose} centered>
        <div className="modal-container">
          <div className="modal-header">
            <div className="modal-header-close" onClick={handleClose}>
            <IoCloseOutline />
            </div>
            <p>Journal</p>
            <div >
            </div>
          </div>
          <div className="modal-content-container">
            <h3>How are you feeling today?</h3>
            
            <div className="modal-slider-img">
              <img src={mood} alt="mood-avatar" />
            </div>
        
            <p>{values[value]}</p>
            <div className="modal-slider" ref={sliderRef}>
      <div
        className="modal-slider-progress"
        onMouseDown={handleMouseDown}
        style={{
          transform: `translateX(${position}px)`,
        }}
      ></div>
    </div>
            <div className="modal-content-button"  onClick={handleClose}>
              <p>Continue</p>
            </div>
          </div>
        </div>
       
      </Modal>

      <Modal show={show2} onHide={handleClose2} centered>
        <div className="modal-container">
          <div className="modal-header">
            <div className="modal-header-close" onClick={handleClose2}>
            <IoCloseOutline />
            </div>
            <p>Journal</p>
            <div >
            </div>
          </div>
          <div className="modal-content-container">
            <h3>Great! 👍🏾</h3>
            <p>It’s wonderful to know you’re feeling pleasant today.</p>

            <div className="modal-feelings-container">
        <p>{values[value]}</p>
        </div>

            <div className="modal-barcode-img">
              <img src={barcode} alt="barcode-avatar" />
            </div>
      
        
       <p>Scan to download</p>
            <div className="modal-content-button-2"  onClick={handleClose2}>
              <p>Download Sozo</p>
              <div className="home-download-logo">
              <img src={google} alt="Google Logo" />
              <img src={apple} alt="Apple Logo" /> 
            </div>
            </div>
          </div>
        </div>
       
      </Modal>
    </div>
  );
};

export default Home;
