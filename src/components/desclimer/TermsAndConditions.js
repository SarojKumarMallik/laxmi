import React, { useContext, useEffect } from 'react';
import progressContext from '../../context/loading/progresscontext';
import footerMenuContext from '../../context/footermenu/footermenucontext';

function TermsAndConditions() {
    const { setProgress } = useContext(progressContext);
    const { disclaimer } = useContext(footerMenuContext);

    useEffect(() => {
        setProgress(70);
        setTimeout(() => {
            setProgress(100);
        }, 100);
    }, []);


    return (
        <div className='container my-4 p-3'>
            <div className="section-title">
                <h2>Terms And Conditions</h2>
            </div>
            <div className="container">
                {/* <p>{disclaimer.terms_n_conditions}</p> */}
                <p dangerouslySetInnerHTML={{__html: disclaimer.terms_n_conditions}}></p>
            </div>
        </div>
    );
}

export default TermsAndConditions;