import './Landingfold.css';
import React, { useContext, useEffect } from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import landingContext from '../../../context/landing/landingcontext';
const bgImage = "/img/uplaods/home.jpg";

function Landingfold() {
    const { landingContent } = useContext(landingContext);
    const { title, description, link, linkText, bg_img } = landingContent;

useEffect(() => {
    $('#home').css({
        background: `url("img/uplaods/${bg_img}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay"
    });
}, [landingContent]);



    return (
        <main>
        
<section className="hero-section-modern">
  <div className="container">
    <div className="row align-items-center mt-5">
      <div className="col-lg-6 text-content animate-left">
        <h1 className="headline">
          Best Maternity Hospital in Bangalore for <span style={{ color: '#44b678' }}>Normal Delivery</span>
        </h1>
        <p className="subtext">
          At Lakshmi Maternity & Surgical Centre, we pride ourselves in providing safe and natural childbirth for the well-being of both mother and child. Since 2011, the trusted name in maternity hospitals in Bangalore has witnessed the birth of over 105,000 healthy babies. Founded by Dr. Leela Rao and led by Dr. Mahesh and Dr. Nishita Rao, we have now become the best maternity hospital in Bangalore for normal delivery. With 24/7 availability, excellent facilities, and higher success rates for normal delivery, we promise to make your birth experience safe and comfortable with memories to cherish.
        </p>
        <Link to={link}>
          <button className="btn modern-btn">
            {linkText}
          </button>
        </Link>
      </div>
    </div>
  </div>
</section>




        </main>
    );
}

export default Landingfold;