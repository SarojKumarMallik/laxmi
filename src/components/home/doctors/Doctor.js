import React from 'react';

function Doctor(props) {
    const { imgSrc, name, speciality, about } = props.doctorDetails;
    const socialLinks = props.doctorDetails.socialLinks !== undefined ? JSON.parse(props.doctorDetails.socialLinks) : [];

    return (
        <div className="col-lg-6 my-2">
            <div className="member d-flex align-items-start">
                <div className="pic">
                    <img src={`img/doctors/${imgSrc}`} className="img-fluid" alt='' />
                </div>
                <div className="member-info">
                    <h4>{name}</h4>
                    <span>{speciality}</span>
                    <p>{about}</p>
                    <div className="social">
                        <a href={socialLinks[0]} target='__blank'><i className="ri-twitter-fill"></i></a>
                        <a href={socialLinks[1]} target='__blank'><i className="ri-facebook-fill"></i></a>
                        <a href={socialLinks[2]} target='__blank'><i className="ri-instagram-fill"></i></a>
                        <a href={socialLinks[3]} target='__blank'> <i className="ri-linkedin-box-fill"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Doctor;