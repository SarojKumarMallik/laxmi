import "./Qr.css";
import React, { useContext, useEffect } from "react";
import qrContext from "../../context/qr/qrcontext";
import progressContext from "../../context/loading/progresscontext";

function Qr() {
  const { qrContent } = useContext(qrContext);
  const { setProgress } = useContext(progressContext);

  const {
    headerimg,
    gridlink1,
    gridimg1,
    gridlink2,
    gridimg2,
    gridlink3,
    gridimg3,
    gridlink4,
    gridimg4,
    gridlink5,
    gridimg5,
    gridlink6,
    gridimg6,
    gridlink7,
    // gridimg7,
    gridlink8,
    gridimg8,
    gridlink9,
    gridimg9,

  } = qrContent;

  useEffect(() => {
    setProgress(70);
    setTimeout(() => {
      setProgress(100);
    }, 100);
  }, []);

  return (
    <main className="qr-main">
      <header>
        <img src={`img/uplaods/lakshmi_maternity.png`} alt="Logo" />
      </header>
      <section id="qr" className="qr">
        <div className="container" data-aos="fade-up">
          <div className="grid-container">
            <a href={`https://www.facebook.com/Lakshmimaternityhospital/`} target="_blank" rel="noopener noreferrer">
              <img src={`img/uplaods/FB.png`} className="social-icon" alt="Facebook" />
            </a>
            <a href={`https://www.linkedin.com/company/lakshmi-maternity-surgical-center/`} target="_blank" rel="noopener noreferrer">
              <img src={`img/uplaods/linkdin.png`} className="social-icon" alt="LinkedIn" />
            </a>
            <a href={`https://www.instagram.com/lakshmimaternitysurgicalcenter/`} target="_blank" rel="noopener noreferrer">
              <img src={`img/uplaods/insta.png`} className="social-icon" alt="Instagram" />
            </a>
            
            <a href={`https://www.youtube.com/channel/UCyRqaGN2QxNHqrKOlD-3Gbw`} target="_blank" rel="noopener noreferrer">
              <img src={`img/uplaods/youtube.png`} className="social-icon" alt="YouTube" />
            </a>
            <a href={`https://g.page/r/CTYsAYWjLe53EAE/review`} target="_blank" rel="noopener noreferrer">
              <img src={`img/uplaods/google.jpeg`} className="social-icon" alt="google" />
            </a>
            <a href={`https://x.com/LMaternityBLR`} target="_blank" rel="noopener noreferrer">
              <img src={`img/uplaods/x.png`} className="social-icon" alt="twitter" />
            </a>
            <a href={`https://in.pinterest.com/lakshmimaternity/`} target="_blank" rel="noopener noreferrer">
              <img src={`img/uplaods/pinterest.png`} className="social-icon" alt="pinterest" />
            </a>
          </div>
        </div>
      </section>
      <footer>
        <a href={`https://www.lakshmimaternity.com/`}><h4>www.lakshmimaternity.com</h4></a>
      </footer>
    </main>
  );
}

export default Qr;