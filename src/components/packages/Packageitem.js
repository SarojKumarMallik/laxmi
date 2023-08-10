import React from 'react';
import parse from 'html-react-parser';

function Packageitem(props) {
    const { title, price, benifits } = props.plan;
    const benifitsArr = benifits.split(",");

    return (
        <div className="card my-2">
            <h1 className="card-title">{title}</h1>
            <h2 className="card-price" id="starter-price">{parse(price)}</h2>
            <ul className="card-plan my-4">
                {benifitsArr.map((item, i) => { return <li key={i}>{item}</li> })}
            </ul>
            <button type="button" className="card-btn">Choose Plan</button>
        </div>
    );
}

export default Packageitem;