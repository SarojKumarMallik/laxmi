import "./Navbar.css";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toggleHeaderScrolled } from "../../utility/utilityfunctions";
import mainmenuContext from "../../context/mainmenu/mainmenucontext";
import contactContext from "../../context/contact/contactcontext";
import landingContext from "../../context/landing/landingcontext";

function Navbar() {
  const { menus } = useContext(mainmenuContext);
  const { contactInfo } = useContext(contactContext);
  const { landingContent } = useContext(landingContext);
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    toggleHeaderScrolled("#header", "#topbar");
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const email =
    contactInfo.email !== undefined ? JSON.parse(contactInfo.email) : {};
  const phone =
    contactInfo.phone !== undefined ? JSON.parse(contactInfo.phone) : {};
  const socialLinks =
    contactInfo.social_links !== undefined
      ? JSON.parse(contactInfo.social_links)
      : {};

  return (
    <main>
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope"></i>
            <a href={`mailto:${email.email}`}>{email.email}</a>

            <i className="bi bi-phone me-1"></i>
            <a href={`tel:${phone.phone}`}>{phone.phone}</a>
          </div>
          <div className="d-none d-lg-flex social-links align-items-center">
            {socialLinks.facebook !== "" && (
              <a
                href={socialLinks.facebook}
                target="__blank"
                className="facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
            )}
            {socialLinks.instagram !== "" && (
              <a
                href={socialLinks.instagram}
                target="__blank"
                className="instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
            )}
            {socialLinks.twitter !== "" && (
              <a
                href={socialLinks.twitter}
                target="__blank"
                className="twitter"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            )}
            {socialLinks.linkedin !== "" && (
              <a
                href={socialLinks.linkedin}
                target="__blank"
                className="linkedin"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            )}
            {socialLinks.youtube !== "" && (
              <a
                href={socialLinks.youtube}
                target="__blank"
                className="youtube"
              >
                <i className="bi bi-youtube"></i>
              </a>
            )}
          </div>
        </div>
      </div>

      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="/">
              <img
                src={`img/uplaods/${landingContent.logo}`}
                alt={landingContent.organization_name}
              />
            </a>
          </h1>

          <nav
            id="navbar"
            className={`navbar order-last order-lg-0 ${
              isMobileMenuOpen ? "navbar-mobile" : ""
            }`}
          >
            <ul>
              {menus.map((item) => {
                if (item.subMenus.length > 0) {
                  return (
                    <li
                      id="servicesDropdown"
                      className="dropdown"
                      key={item.id}
                    >
                      <span className="nav-link" style={{ color: "#297E21" }}>
                        {item.title}
                        <span className="caret"></span>
                      </span>
                      <ul className="dropdown-menu">
                        {item.subMenus.map((subMenuItem) => (
                          <li key={subMenuItem.id}>
                            <Link to={subMenuItem.slug}>{subMenuItem.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                } else {
                  return (
                    <li key={item.id}>
                      <Link className="nav-link" to={item.slug}>
                        {item.title}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>

            <i
              className={`bi mobile-nav-toggle ${
                isMobileMenuOpen ? "bi-x" : "bi-list"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            ></i>
          </nav>

          <Link to="/appointment" className="appointment-btn active d-none d-md-inline">
            <span>Book an Appointment</span>
          </Link>
        </div>
      </header>
    </main>
  );
}

export default Navbar;
