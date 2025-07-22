// import './DoctorHome.css';
import './Doctors.css';
import React, { useContext, useEffect } from 'react';
import Doctor from './Doctor';
import doctorContext from '../../../context/doctors/doctorscontext';
import progressContext from '../../../context/loading/progresscontext';
import { useLocation } from 'react-router-dom';
import DoctorDCT from './DoctorDCT';

function Doctors() {
    const { docInfo, docPageDesc } = useContext(doctorContext);
    const { setProgress } = useContext(progressContext);

    useEffect(() => {
        setProgress(70);
        setTimeout(() => {
            setProgress(100);
        }, 100);
    }, [setProgress]);
const location = useLocation();
const requiredPathsegment  = location.pathname;
console.log('path',requiredPathsegment)
    return (
        <section id="doctors" className="doctors">
            <div className="container">
                <div className="section-title">
                    <h2>Meet Our Experienced Team</h2>
                    <p>{docPageDesc.content}</p>
                </div>

                <div className="d-flex flex-wrap">
                    {requiredPathsegment === '/' ? docInfo.map(item => <Doctor doctorDetails={item} key={item.id}></Doctor>) : docInfo.map(item => <DoctorDCT doctorDetails={item} key={item.id}></DoctorDCT>)}
                </div>
                <div className='DCT'>{requiredPathsegment === '/' ? '':(<p>Together, Dr. Mahesh and Dr. Nishita Rao work collaboratively with a team of experienced healthcare
professionals to offer personalized and evidence-based care. Their leadership and commitment to excellence
have shaped the values and philosophy of Lakshmi Maternity &amp; Surgical Centre.</p>)}</div>
                <div className='DCT'>{requiredPathsegment === '/' ? '':(<p>Lakshmi Maternity is proud to have Dr. Mahesh and Dr. Nishita Rao at the forefront of our medical team,
guiding and leading the provision of exceptional healthcare services to our patients. Their expertise,
compassion, and dedication are instrumental in making Lakshmi Maternity &amp; Surgical Centre a trusted
healthcare institution for women, children, and families.</p>)}</div>
                <div className='DCT'>{requiredPathsegment === '/' ? '':(<p>Please note that the availability of specific doctors may vary, and it is always advisable to contact our hospital
directly for the most up-to-date information on the healthcare professionals who are currently associated with
our facility.</p>)}</div>
                <div className='DCT'>{requiredPathsegment === '/' ?(
        <div className="col-12 mt-4">
          <div
            style={{
              background: "#eef9f5",
              borderRadius: "12px",
              padding: "30px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            }}
          >
            <h4 style={{ color: "#2c4964", fontWeight: "bold" }}>
              Our Approach to Normal Delivery
            </h4>
            <p style={{ fontSize: "15px", lineHeight: "1.8", marginTop: "10px" }}>
              At <strong>Lakshmi Maternity & Surgical Centre,</strong> under the expert care of <strong> Dr.
              Nishita Rao,</strong> we ensure a <strong>safe normal delivery</strong> with <strong>patient-centric
              care</strong> that's both <strong>affordable</strong> and focused on your needs. Dr. Nishita
              works closely with you to create a <strong>personalized birth plan,</strong> ensuring
              that your delivery aligns with your preferences while keeping both
              you and your baby safe. Our approach emphasizes <strong>minimal
              intervention,</strong> allowing for a natural and healthy childbirth
              experience unless medical attention is needed. We're committed to
              making sure your delivery is not only safe but also a positive,
              comfortable experience with 24/7 support and guidance. At Lakshmi
              Maternity & Surgical Centre, we believe every mother deserves a
              caring, safe, and affordable birthing experience.
            </p>
          </div>
        </div>
      ):""}</div>
            </div>
            
        </section>
    );
}

export default Doctors;