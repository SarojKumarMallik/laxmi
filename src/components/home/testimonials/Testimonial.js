import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const testimonials = [
  {
    image: "https://images.pexels.com/photos/31000796/pexels-photo-31000796/free-photo-of-flying-indian-nightjar-in-natural-habitat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    message: "I came to Lakshmi Maternity Home for my delivery under the care of Dr. Nishitha Rao, and it was the best decision I made. The doctors and staff provided excellent care, ensuring my comfort and well-being throughout the process. Their expertise, frequent check-ups, and compassionate support made my experience smooth and reassuring. I am truly grateful for the outstanding care I received and highly recommend Lakshmi Maternity Home for maternity services.",
    name: "- Nadeesha",
    video: "https://youtube.com/shorts/OCzlMZpt88E?si=ZoVkkkyNvaUK2nvk"
  },
  {
    image: "https://images.pexels.com/photos/547395/pexels-photo-547395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    message: "I started my pregnancy care at Lakshmi Maternity Home under Dr. Nishitha Rao, and I couldn't have asked for a better experience. The level of care and attention I received throughout my pregnancy was outstanding. The doctors ensured my well-being with regular visits, thorough explanations of scans, and quick lab results. Their dedication and expertise made me feel safe and confident, which is why I chose the hospital for my delivery as well. I highly recommend Lakshmi Maternity Home for anyone looking for compassionate and professional maternity care.",
    name: "- Shruthi",
    video: "https://www.youtube.com/embed/iSNwDrwJCXQ?si=WNEPEEolYkGuetKq"
  },
  {
    image: "",
    message: "Dr. Nishita was amazing! She made sure I felt comfortable and safe throughout my pregnancy. I had a normal delivery, and everything went smoothly. The staff was so helpful, and the hospital made me feel at home. I highly recommend Lakshmi Maternity & Surgical Centre for a safe delivery.",
    name: "- Priya Sharma",
    video: ""
  },
  {
    image: "",
    message: "My wife had a normal delivery at Lakshmi Maternity. The hospital was great! The staff was friendly, and we felt very well taken care of. The doctors were supportive, and we were happy with the whole experience. If you're looking for a safe place for maternity care, this is it.",
    name: "- Rahul Kumar (Husband)",
    video: ""
  },
  {
    image: "",
    message: "I had a wonderful experience at Lakshmi Maternity & Surgical Centre. Dr. Nishita guided me through everything, and I had a safe normal delivery. The hospital’s support was amazing, and I felt very comfortable. I would recommend this hospital to anyone looking for good care during pregnancy.",
    name: "- Simran Patel",
    video: ""
  },
  {
    image: "",
    message: "I'm so glad we chose Lakshmi Maternity for my wife's delivery. The hospital is the best for normal delivery in Bangalore. They made sure my wife felt comfortable, and the doctors were very experienced. If you're looking for affordable maternity care, this is the place.",
    name: "- Vikas Desai",
    video: ""
  },
  {
    image: "",
    message: "Lakshmi Maternity is hands down the best maternity hospital in Bangalore. The hospital provided safe delivery services, and the care I received was outstanding. The staff made sure everything went smoothly, and I felt so supported. I'll definitely recommend it to other expecting mothers!",
    name: "- Nisha Reddy",
    video: ""
  }
];

export default function TestimonialSlider() {
  const videoRef = useRef(null);
  const textRef = useRef(null);

  const videoTestimonials = testimonials.filter(t => t.video);
  const textTestimonials = testimonials.filter(t => !t.video);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="section-title section-titlee">
      <h2>Testimonial</h2>
      <div className="dual-slider-container">
        {/* Left - Video Slider */}
        <div className="slider-column" onMouseEnter={() => videoRef.current?.slickPause()} onMouseLeave={() => videoRef.current?.slickPlay()}>
          <Slider {...settings} ref={videoRef}>
            {videoTestimonials.map((t, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-media">
                  <iframe
                    src={t.video.replace("watch?v=", "embed/").replace("shorts/", "embed/") + "?rel=0"}
                    title={t.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="testimonial-text">
                  <p className="quote-mark">“</p>
                  <p className="testimonial-message">{t.message}</p>
                  <p className="testimonial-name">{t.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Right - Text/Image Slider */}
        <div className="slider-column" onMouseEnter={() => textRef.current?.slickPause()} onMouseLeave={() => textRef.current?.slickPlay()}>
          <Slider {...settings} ref={textRef}>
            {textTestimonials.map((t, index) => (
              <div key={index} className="testimonial-card">
                {t.image && (
                  <div className="testimonial-image-wrapper">
                    <img src={t.image} alt={t.name} />
                  </div>
                )}
                <div className="testimonial-text">
                  <p className="quote-mark">“</p>
                  <p className="testimonial-message">{t.message}</p>
                  <p className="testimonial-name">{t.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
