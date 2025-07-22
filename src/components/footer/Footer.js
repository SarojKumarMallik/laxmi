import React, { useContext } from "react";
import { Link } from "react-router-dom";
import contactContext from "../../context/contact/contactcontext";
import landingContext from "../../context/landing/landingcontext";

function Footer() {
  const { contactInfo } = useContext(contactContext);
  const { landingContent } = useContext(landingContext);

  const address = contactInfo.address ? JSON.parse(contactInfo.address) : {};
  const email = contactInfo.email ? JSON.parse(contactInfo.email) : {};
  const phone = contactInfo.phone ? JSON.parse(contactInfo.phone) : {};
  const socialLinks = contactInfo.social_links ? JSON.parse(contactInfo.social_links) : {};

  return (
    <footer className="bg-light text-dark pt-5 border-top">
      <div className="container">

        {/* Organization Info - Centered like the image */}
        <div className="row justify-content-center text-start">
          <div className="col-lg-4 mb-4">
            <h5 className="fw-bold fs-4 mb-3">{landingContent.organization_name}</h5>
            <p className="text-secondary"><a href="https://maps.app.goo.gl/BfEtLT6YFRg2J2RTA">{address.address}</a></p>
            <p className="mb-1">
              <strong>Phone:</strong>{" "}
              <a href={`tel:${phone.phone}`} className="text-success text-decoration-none">
                {phone.phone}
              </a>
            </p>
            <p className="mb-3">
              <strong>Email:</strong>{" "}
              <a href={`mailto:${email.email}`} className="text-success text-decoration-none">
                {email.email}
              </a>
            </p>

            <div className="d-flex justify-content-start gap-2 mt-2 flex-wrap">
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noreferrer"
                  className="btn btn-success btn-sm rounded-2 d-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}>
                  <i className="bx bxl-facebook text-white"></i>
                </a>
              )}
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noreferrer"
                  className="btn btn-success btn-sm rounded-2 d-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}>
                  <i className="bx bxl-instagram text-white"></i>
                </a>
              )}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noreferrer"
                  className="btn btn-success btn-sm rounded-2 d-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}>
                  <i className="fa-brands fa-x-twitter text-white"></i>
                </a>
              )}
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer"
                  className="btn btn-success btn-sm rounded-2 d-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}>
                  <i className="bx bxl-linkedin text-white"></i>
                </a>
              )}
              {socialLinks.youtube && (
                <a href={socialLinks.youtube} target="_blank" rel="noreferrer"
                  className="btn btn-success btn-sm rounded-2 d-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}>
                  <i className="bx bxl-youtube text-white"></i>
                </a>
              )}
            </div>
          </div>
          <div className="col-md-2 col-lg-2 mb-4">
            <h6 className="fw-semibold mb-3">Useful Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><i className="bx bx-chevron-right text-danger me-1"></i><Link to="/" className="text-dark text-decoration-none">Home</Link></li>
              <li className="mb-2"><i className="bx bx-chevron-right text-danger me-1"></i><Link to="/about" className="text-dark text-decoration-none">About Us</Link></li>
              <li className="mb-2"><i className="bx bx-chevron-right text-danger me-1"></i><Link to="/doctors" className="text-dark text-decoration-none">Doctors</Link></li>
              <li className="mb-2"><i className="bx bx-chevron-right text-danger me-1"></i><Link to="/blogs" className="text-dark text-decoration-none">Blogs</Link></li>
              <li><i className="bx bx-chevron-right text-danger me-1"></i><Link to="/contact" className="text-dark text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-2 col-lg-2 mb-4">
            <h6 className="fw-semibold mb-3">Our Services</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><i className="bx bx-chevron-right text-danger me-1"></i><Link to="/Best-Pediatrician-In-Malleshwaram" className="text-dark text-decoration-none">Pediatrician</Link></li>
              <li className="mb-2"><i className="bx bx-chevron-right text-danger me-1"></i><Link to="/Experienced-Gynaecologist-in-Malleshwaram" className="text-dark text-decoration-none">Gynaecologist</Link></li>
              <li><i className="bx bx-chevron-right text-danger me-1"></i><Link to="/general-services" className="text-dark text-decoration-none">General services</Link></li>
            </ul>
          </div>
          <div className="col-md-4 col-lg-4 mb-4">
  <h6 className="fw-semibold mb-3">Direction</h6>
  <div className="ratio ratio-16x9">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.6194218410565!2d77.56933819999999!3d13.0057697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16258bb48a67%3A0x77ee2da385012c36!2sLakshmi%20Maternity%20%26%20Surgical%20Center!5e1!3m2!1sen!2sin!4v1753162706653!5m2!1sen!2sin"
      width="100%"
      height="0"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
          
        </div>

        

        {/* Divider */}
        <hr className="my-4" />

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
          <p className="mb-2 mb-md-0">
            &copy; {new Date().getFullYear()} <strong className="text-dark"><a href="/">{landingContent.organization_name}</a></strong>
             | Powered by <span className="text-muted"><a href="https://ikontel.com/">iKonTel</a></span>.
          </p>
          <div>
            <Link to="/privacy-policy" className="text-dark text-decoration-none me-3">Privacy Policy</Link>
            <Link to="/terms-conditions" className="text-dark text-decoration-none">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
