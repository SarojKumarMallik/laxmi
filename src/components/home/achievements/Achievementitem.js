import React from 'react';
import parse from 'html-react-parser';

function Achievementitem(props) {
    const { icon, numbers, title, description, moreLink, more } = props.achievementItem;

    return (
        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch my-2">
            <div className="count-box">
                <i className={icon}></i>
                <span data-purecounter-start="0" data-purecounter-end={numbers} data-purecounter-duration="1" className="purecounter"></span>
                <p><strong>{title}</strong> {description}</p>
                <a href={moreLink}>{parse(more)}</a>
            </div>
        </div >
    );
}

export default Achievementitem;