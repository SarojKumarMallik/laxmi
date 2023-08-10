import './Footer.css';
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import footerMenuContext from '../../context/footermenu/footermenucontext';
import contactContext from '../../context/contact/contactcontext';
import landingContext from '../../context/landing/landingcontext';

function Footer() {
    const { footerMenus } = useContext(footerMenuContext);
    const { contactInfo } = useContext(contactContext);
    const { landingContent } = useContext(landingContext);

    const address = contactInfo.address !== undefined ? JSON.parse(contactInfo.address) : {};
    const email = contactInfo.email !== undefined ? JSON.parse(contactInfo.email) : {};
    const phone = contactInfo.phone !== undefined ? JSON.parse(contactInfo.phone) : {};
    const socialLinks = contactInfo.social_links !== undefined ? JSON.parse(contactInfo.social_links) : {};


    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-6">
                            <div className="footer-info">
                                <h3>{landingContent.organization_name}</h3>
                                <p>{address.address}<br /><br />
                                    <strong>Phone:</strong> {phone.phone}<br />
                                    <strong>Email:</strong> {email.email}<br />
                                </p>

                                <div className="social-links mt-3">
                                    {socialLinks.facebook !== "" && <a href={socialLinks.facebook} target='__blank' className="facebook"><i
                                        className="bx bxl-facebook"></i></a>}
                                    {socialLinks.instagram !== "" && <a href={socialLinks.instagram} target='__blank' className="instagram"><i className="bx bxl-instagram"></i></a>}
                                    {socialLinks.twitter !== "" && <a href={socialLinks.twitter} target='__blank' className="twitter"><i className="bx bxl-twitter"></i></a>}
                                    {socialLinks.linkedin !== "" && <a href={socialLinks.linkedin} target='__blank' className="linkedin"><i className="bx bxl-linkedin"></i></a>}
                                </div>
                            </div>
                        </div>


                        {footerMenus.map(item => {
                            if (item.subMenus !== undefined) {
                                return <div className="col-lg-2 col-md-4 footer-links" key={item.id}>
                                    <h4>{item.title}</h4>
                                    <ul>
                                        {item.subMenus.map(subItem => { return <li key={subItem.id}><i className="bx bx-chevron-right"></i> <Link to={subItem.slug}>{subItem.title}</Link></li> })}
                                    </ul>
                                </div>
                            } else {
                                return <div className="col-lg-3 col-md-6 footer-links" key={item.id}><h4>{item.title}</h4></div>
                            }
                        })}

                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-between">
                <div className="copyright">
                    &copy; Copyright <strong><span>{landingContent.organization_name}</span></strong> | Powred by iKonTel.
                </div>
                <div className="disclaimer d-flex align-items-end">
                    <Link to="/privacy-policy" className="me-3">Privacy Policy</Link>
                    <Link to="/terms-conditions">Terms and Conditions</Link>
                </div>
            </div>
        </footer >
    );
}

export default Footer;