import './Services.css';
import React, { useContext } from 'react';
import Serviceitem from './Serviceitem';
import servicesContext from '../../context/services/servicescontext';

function Services() {
    const { shortServices } = useContext(servicesContext);

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-title">
                    <h2>Services</h2>
                </div>
                <div className="row">
                    {shortServices.map(item => <div className="col-lg-4 col-md-6 d-flex align-items-stretch my-2" key={item.id}>
                        <div className="icon-box">
                            <div className="icon"><i className={item.icon}></i></div>
                            <h4 className="text-center">{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>)}
                </div>
            </div>
        </section>
    );
}

export default Services;