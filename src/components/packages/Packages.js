import './Packages.css';
import React, { useContext, useEffect } from 'react';
import Packageitem from './Packageitem';
import packagesContext from '../../context/packages/packagescontext';
import progressContext from '../../context/loading/progresscontext';

function Packages() {
    const { packages } = useContext(packagesContext);
    const { setProgress } = useContext(progressContext);

    useEffect(() => {
        setProgress(70);
        setTimeout(() => {
            setProgress(100);
        }, 100);
    }, []);

    return (
        <div className="packages mt-5">
            {/* <div className="top-banner">
                <p className="current-plan">{currentPlan.text}</p>
                <p className="plan-type">{currentPlan.type}</p>
            </div> */}

            <div className="container my-5 mx-auto">
                {/* <h1 className="title text-center">{other.title}</h1>
                <div className="toggle-switch">
                    <span>{other.annual}</span>
                    <input type="checkbox" className="toggler" />
                    <span>{other.month}</span>
                </div> */}

                <div className="cards">
                    {packages.map(item => <Packageitem plan={item} key={item.id} />)}
                </div>
            </div>
        </div>
    );
}

export default Packages;