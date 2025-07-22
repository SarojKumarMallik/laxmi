import React from 'react';
import './Doctors.css'
// import './DoctorHome.css'

function Doctor(props) {
    console.log('DoctorDCT',props)
    const { imgSrc, name, speciality, about } = props?.doctorDetails;
    const socialLinks = props?.doctorDetails.socialLinks !== undefined ? JSON.parse(props.doctorDetails.socialLinks) : [];

    return (
        <div className="col-lg-6 my-2" id='doctDCT'>
            <div className="member d-flex align-items-start" style={{width:"100%"}}>
                <div className="pic" style={{width:"25%"}}>
                    <img src={`img/doctors/${imgSrc}`} className="img-fluid" alt='' />
                </div>
                <div className="member-info" style={{width:"65%"}}>
                    <h4>{name}</h4>
                    <span>{speciality}</span>
                    <p>{about}</p>
                    {/* <div className="social">
                        <a href={socialLinks[0]} target='__blank'><i className="ri-twitter-fill"></i></a>
                        <a href={socialLinks[1]} target='__blank'><i className="ri-facebook-fill"></i></a>
                        <a href={socialLinks[2]} target='__blank'><i className="ri-instagram-fill"></i></a>
                        <a href={socialLinks[3]} target='__blank'> <i className="ri-linkedin-box-fill"></i> </a>
                    </div> */}
                    <div>
                      {name === 'Dr. Nishita Rao'?(<p>Dr. Nishita Rao specializes in obstetrics and gynecology, focusing on providing comprehensive care to women
                       throughout their pregnancy journey. She brings a wealth of knowledge and experience to address various
                       women&#39;s health concerns and ensure the well-being of expectant mothers.</p>):(<p>Dr. Mahesh is a highly skilled paediatrician who is dedicated to providing compassionate care to children. With
                       his expertise in paediatric medicine, he oversees our child care services and ensures that every child receives
                       the best possible care for their health and development.</p>)}
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Doctor;