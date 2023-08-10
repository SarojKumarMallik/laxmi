import React from 'react';

function Featuredserviceitem(props) {
    const { icon, title, description } = props.serviceItem;

    return (
        <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0 my-2">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div className="icon"><i className={icon}></i></div>
                <h4 className="title">{title}</h4>
                <p className="description">{description}</p>
            </div>
        </div>
    );
}

export default Featuredserviceitem;