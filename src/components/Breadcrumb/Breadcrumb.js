import React from 'react';
import './Breadcrumb.css';


function Breadcrumb({ pageName, bgImage, path }) {
  // Filter out empty label items
  const validPath = path.filter(item => item.label && item.label.trim() !== '');

  return (
    <div
      className="breadcrumb-banner text-white d-flex align-items-center"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        position: 'relative'
      }}
    >
      <div className="overlay"></div>
      <div className="container position-relative">
        <p className="mb-1">
          {validPath.map((item, index) => (
            <span key={index}>
              {item.href ? (
                <a href={item.href} className="text-white text-decoration-none fw-semibold">
                  {item.label}
                </a>
              ) : (
                <strong className='text-white'>{item.label}</strong>
              )}
              {index < validPath.length - 1 && <span className="mx-2">»</span>}
            </span>
          ))}
        </p>
        <h2 className="fw-bold">{pageName}</h2>
      </div>
    </div>
  );
}

export default Breadcrumb;
