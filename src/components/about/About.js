import "./About.css";
import React, { useContext, useEffect } from "react";
import Aboutitem from "./Aboutitem";
import aboutContext from "../../context/about/aboutcontext";
import progressContext from "../../context/loading/progresscontext";
import Breadcrumb from '../Breadcrumb/Breadcrumb';

function About() {
  const { aboutContent, aboutKeys } = useContext(aboutContext);
  const { setProgress } = useContext(progressContext);

  const {
    description,
    heading,
    more,
    moreHeading,
    number1img,
    number2img,
    number3img,
    number4img,
    number5img,
    number6img,
    videoIframe,
    videoLink,
  } = aboutContent;

  useEffect(() => {
    setProgress(70);
    setTimeout(() => {
      setProgress(100);
    }, 100);
  }, []);

  return (
    <main>
       <Breadcrumb
        pageName="About Us"
        bgImage="/img/uplaods/rad.jpg"
        path={[
          { label: 'Home', href: '/' },
          { label: '', href: '' },
          { label: 'About Us' } // current page, no link
        ]}
      />
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">

         
          <div className="section-title">
            <h2>{heading}</h2>
            <p>{description}</p>
          </div>
          <div className="row mt-4">
            <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
              <a
                href={videoLink}
                target="__blank"
                className="glightbox play-btn mb-4"
              >
                {" "}
              </a>
            </div>

            <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
              {aboutKeys.map((item) => (
                <Aboutitem content={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <div className="responsive-container-block leftSide">
            <p className="text-blk heading">{moreHeading}</p>
            <p className="text-blk subHeading">{more}</p>
          </div>
          <div className="responsive-container-block rightSide">
            <img
              className="number1img"
              src={`img/uplaods/${number1img}`}
              alt=""
            />
            <img
              className="number2img"
              src={`img/uplaods/${number2img}`}
              alt=""
            />
            <img
              className="number3img"
              src={`img/uplaods/${number3img}`}
              alt=""
            />
            <img
              className="number5img"
              src={`img/uplaods/${number4img}`}
              alt=""
            />

            <iframe
              allowFullScreen="allowfullscreen"
              className="number4vid"
              poster="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b242.png"
              src={videoIframe}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>

            <img
              className="number7img"
              src={`img/uplaods/${number5img}`}
              alt=""
            />
            <img
              className="number6img"
              src={`img/uplaods/${number6img}`}
              alt=""
            />
          </div>
          <section id="about1" className="about1">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <p className="para1">At Lakshmi Maternity &amp; Surgical Centre, we are committed to upholding the highest standards of medical
ethics and professionalism. We constantly strive to stay at the forefront of medical advancements, embracing
innovation and excellence in our services. Our aim is to forge lasting relationships with our patients, built on
trust, empathy, and exceptional care.</p>
                <p className="para1">Thank you for considering Lakshmi Maternity &amp; Surgical Centre for your healthcare needs. We look forward to
serving you and being a part of your remarkable journey towards motherhood and overall well-being.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default About;
