import './Doctors.css';
import React, { useContext, useEffect } from 'react';
import Doctor from './Doctor';
import doctorContext from '../../../context/doctors/doctorscontext';
import progressContext from '../../../context/loading/progresscontext';

function Doctors() {
    const { docInfo, docPageDesc } = useContext(doctorContext);
    const { setProgress } = useContext(progressContext);

    useEffect(() => {
        setProgress(70);
        setTimeout(() => {
            setProgress(100);
        }, 100);
    }, []);

    return (
        <section id="doctors" className="doctors">
            <div className="container">
                <div className="section-title">
                    <h2>Doctors</h2>
                    <p>{docPageDesc.content}</p>
                </div>

                <div className="row">
                    {docInfo.map(item => <Doctor doctorDetails={item} key={item.id}></Doctor>)}
                </div>
            </div>
        </section>
    );
}

export default Doctors;