import React from "react";
import AboutCard from "../../components/aboutCard/AboutCard";
import "./home.css";
import Marquee from "react-fast-marquee";
import DiscoverCard from "../../components/discovercard/DiscoverCard";
import HomeButton from "../../components/button/HomeButton";
import ReviewCard from "../../components/review/ReviewCard";
import FAQ from "../../components/faq/FAQ";
import Footer from "../../components/footer/Footer";



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

import { PiLeafFill, PiPencilSimpleLine } from "react-icons/pi";

const Home = () => {
  return (
    <div className="home">
      <section className="Header">
        <div className="header-container">
         <div className="header-img">
          <img src={headerImg} alt="" />
         </div>
         <div className="header-content-container">
         <div className="header-content-left">
            <img src={headerImg1} alt="" />
            <img src={headerImg2} alt="" />
            <img src={headerImg3} alt="" />
          </div>
          <div className="header-content-middle">
          <div className="header-content-feelings">
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
            <h1>sozo tribe</h1>
          </div>
          <div className="header-content-right">
          <img src={headerImg4} alt="" />
          <img src={headerImg5} alt="" />
          <img src={headerImg6} alt="" />
      
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
            <img className="journal-img-1" src={journal1} alt="Journal image left" />
            <img className="journal-img-2" src={journal2} alt="Journal image middle" />
            <img className="journal-img-3" src={journal3} alt="Journal image right" />
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
            <ReviewCard content= "Sozo keeps me in the Word every single day. I found a community that prays with me, and journaling here has honestly changed how I walk with God." 
            title= "Rooted & growing 🌿"
               author= "Bisi O."
            username="@bisi.faith"
            />
         
          </div>

          <div className="faq-review">
            <FAQ />
          </div>

          <Footer />
    
      </section>
    </div>
  );
};

export default Home;
