import './Featuredservices.css';
import React, { useContext } from 'react';
import Featuredserviceitem from './Featuredserviceitem';
import featuredServicesContext from '../../../context/featuredservices/featuredservicescontext';

function Featuredservices() {
    const { featuredServices } = useContext(featuredServicesContext);

    return (
        <section id="featured-services" className="featured-services">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    {featuredServices.map(item => <Featuredserviceitem serviceItem={item} key={item.id}></Featuredserviceitem>)}
                </div>
            </div>
        </section>
    );
}

export default Featuredservices;