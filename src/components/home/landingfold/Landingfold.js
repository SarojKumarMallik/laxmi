import './Landingfold.css';
import React, { useContext, useEffect } from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import landingContext from '../../../context/landing/landingcontext';

function Landingfold() {
    const { landingContent } = useContext(landingContext);
    const { title, description, link, linkText, bg_img } = landingContent;

    useEffect(() => {
        $('#home').css({
            background: `url("img/uplaods/${bg_img}")`,
            backgroundPosition: "top center",
            backgroundSize: "cover"
        });
    }, [landingContent]);


    return (
        <section id="home" className="d-flex align-items-center">
            <div className="container">
                <h1>{title !== undefined ? parse(title) : ""}</h1>
                <h2>{title !== undefined ? parse(description) : ""}</h2>
                <Link to={link} className="btn-get-started scrollto">{linkText}</Link>
            </div>
        </section>
    );
}

export default Landingfold;