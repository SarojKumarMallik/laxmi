import React from 'react';

function Aboutitem(props) {
    const { icon, title, content } = props.content;
    return (
        <div className="about-box">
            <div className="icon"><i className={icon}></i></div>
            <h4 className="title">{title}</h4>
            <p className="description">{content}</p>
        </div>
    );
}

export default Aboutitem;