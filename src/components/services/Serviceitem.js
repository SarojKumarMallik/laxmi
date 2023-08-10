import './Serviceitem.css';
import parse from "html-react-parser";
import React, { useContext, useEffect } from 'react';
import progressContext from '../../context/loading/progresscontext';

function Serviceitem(props) {
    const { icon, title, description, banner, image } = props.serviceItem;
    const { setProgress } = useContext(progressContext);

    useEffect(() => {
        setProgress(70);
        setTimeout(() => {
            setProgress(100);
        }, 100);
    }, []);

    return (
        <div className="container">
            <div className="single-service-box">
                <img src={`/img/uplaods/${banner}`} alt={title} className='service-banner' />
                <div className="row mt-5">
                    <div className="col-md-8 d-flex align-items-center">
                        <div>
                            <h4 className="text-center">{title}</h4>
                            <p>{parse(description)}</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex align-items-center">
                        <img src={`/img/uplaods/${image}`} alt={title} className='service-img' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Serviceitem;