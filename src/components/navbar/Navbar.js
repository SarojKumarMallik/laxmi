import './Navbar.css';
import $ from 'jquery';
import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { toggleHeaderScrolled } from '../../utility/utilityfunctions';
import mainmenuContext from '../../context/mainmenu/mainmenucontext';
import contactContext from '../../context/contact/contactcontext';
import landingContext from '../../context/landing/landingcontext';

function Navbar() {
    const { menus } = useContext(mainmenuContext);
    const { contactInfo } = useContext(contactContext);
    const { landingContent } = useContext(landingContext);

    const email = contactInfo.email !== undefined ? JSON.parse(contactInfo.email) : {};
    const phone = contactInfo.phone !== undefined ? JSON.parse(contactInfo.phone) : {};
    const socialLinks = contactInfo.social_links !== undefined ? JSON.parse(contactInfo.social_links) : {};

    useEffect(() => {
        toggleHeaderScrolled('#header', '#topbar');
        // Mobile nav toggle
        $(document).on('click', '.mobile-nav-toggle', (e) => {
            $('#navbar').toggleClass('navbar-mobile');
            $(e.target).toggleClass('bi-list');
            $(e.target).toggleClass('bi-x');
        });
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope"></i> <a href={`mailto:${email.email}`}>{email.email}</a>
                        <i className="bi bi-phone me-1"></i>{phone.phone}
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        {socialLinks.facebook !== "" && <a href={socialLinks.facebook} target='__blank' className="facebook"><i className="bi bi-facebook"></i></a>}
                        {socialLinks.instagram !== "" && <a href={socialLinks.instagram} target='__blank' className="instagram"><i className="bi bi-instagram"></i></a>}
                        {socialLinks.twitter !== "" && <a href={socialLinks.twitter} target='__blank' className="twitter"><i className="bi bi-twitter"></i></a>}
                        {socialLinks.linkedin !== "" && <a href={socialLinks.linkedin} target='__blank' className="linkedin"><i className="bi bi-linkedin"></i></a>}
                    </div>
                </div>
            </div >

            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-auto"><a href="/"><img src={`img/uplaods/${landingContent.logo}`} alt={landingContent.organization_name} /></a></h1>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            {menus.map((item) => {
                                if (item.subMenus.length > 0) {
                                    return <li id="servicesDropdown" className="dropdown" key={item.id}><span className="nav-link">{item.title}<span className="caret"></span></span>
                                        <ul className="dropdown-menu">
                                            {item.subMenus.map(subMenuItem => <li key={subMenuItem.id}><Link to={subMenuItem.slug}>{subMenuItem.title}</Link></li>)}
                                        </ul>
                                    </li>
                                } else {
                                    return <li key={item.id}><Link className="nav-link" to={item.slug}>{item.title}</Link></li>
                                }
                            })}
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    <Link to="/appointment" className="appointment-btn active">
                        <span>Book an Appointment</span>
                    </Link>

                </div>
            </header>
        </>
    );
}

export default Navbar