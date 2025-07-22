import './Contact.css';
import React, { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { isEmailValid } from '../../utility/utilityfunctions';
import $ from 'jquery';
import contactContext from '../../context/contact/contactcontext';
import progressContext from '../../context/loading/progresscontext';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

function Contact() {
    const { contactInfo, sendInquiryDetails } = useContext(contactContext);
    const { setProgress } = useContext(progressContext);

    const { mapIframe, other, shortText } = contactInfo;
    const address = contactInfo.address !== undefined ? JSON.parse(contactInfo.address) : {};
    const email = contactInfo.email !== undefined ? JSON.parse(contactInfo.email) : {};
    const phone = contactInfo.phone !== undefined ? JSON.parse(contactInfo.phone) : {};

    useEffect(() => {
        setProgress(70);
        setTimeout(() => {
            setProgress(100);
        }, 100);
    }, []);

    const handelSubmit = (e) => {
        e.preventDefault();
        if (!isEmailValid($("#email").val())) {
            toast.error("Please Enter a Valid Email !", { theme: "colored" });
        } else {
            const data = {
                name: $("#name").val(),
                email: $("#email").val(),
                subject: $("#subject").val(),
                message: $("#message").val()
            };
            sendInquiryDetails(data);
            $(e.target).trigger("reset");
        }
    }


    return (
        <main>
             <Breadcrumb
        pageName="Contact Us"
        bgImage="/img/uplaods/rad.jpg"
        path={[
          { label: 'Home', href: '/' },
          { label: '', href: '' },
          { label: 'Contact Us' } // current page, no link
        ]}
      />
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                    <p>{shortText}</p>
                </div>
            </div>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe className="gmap_iframe" width="100%" frameBorder="0" scrolling="no"
                        marginHeight="0" marginWidth="0" src={mapIframe} height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <a href={other}>FNF Mods</a>
                </div>
            </div>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className={address.icon}></i>
                                <h4>{address.heading}</h4>
                                <a href="https://maps.app.goo.gl/BfEtLT6YFRg2J2RTA"><p>{address.address}</p></a>
                            </div>

                            <div className="email">
                                <i className={email.icon}></i>
                                <h4>{email.heading}</h4>
                                <a href={`mailto:${email.email}`}><p>{email.email}</p></a>
                            </div>

                            <div className="phone">
                                <i className={phone.icon}></i>
                                <h4>{phone.heading}</h4>
                                <a href='tel:08023347276'><p>{phone.phone}</p></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 mt-5 mt-lg-0">
                        <form className="contact-form" onSubmit={handelSubmit}>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required minLength={3} />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required minLength={5} />
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" id='message' rows="5" placeholder="Message"></textarea>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </main>
    );
}

export default Contact;