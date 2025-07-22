import './Serviceitem.css';
import parse from "html-react-parser";
import React, { useContext, useEffect } from 'react';
import progressContext from '../../context/loading/progresscontext';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

function Serviceitem(props) {
    const { icon, title, description, description2, banner, image, image2 } = props.serviceItem;
    const { setProgress } = useContext(progressContext);

    useEffect(() => {
        setProgress(70);
        setTimeout(() => {
            setProgress(100);
        }, 100);
    }, []);

    return (
        <main>
             <Breadcrumb
        pageName={title}
        bgImage="/img/uplaods/rad.jpg"
        path={[
          { label: 'Home', href: '/' },
          { label: 'Service', href: '' },
          { label: title } // current page, no link
        ]}
      />
        <div className="container">
            <div className="single-service-box">
                <img src={`/img/uplaods/${banner}`} alt={title} className='service-banner' />
                <div className="row mt-5">
                    <div className="col-md-8 d-flex align-items-center">
                        <div>
                            <h4 className="text-center" style={{ color: "#007bff" }}>
  {title}
</h4>

                            <p>{parse(description)}</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex align-items-center">
                        <img src={`/img/uplaods/${image}`} alt={title} className='service-img' />
                    </div>
                </div>
                <div className="row mt-5">
                    
                  <div className="col-md-12 d-flex">
  <div className="parsed-content">
    <p style={{ fontWeight: "500" }}>
      {parse(description2.replace(/<h3>/g, '<h3 style="text-align:center">'))}
      
    </p>
  </div>
</div>


                </div>
            </div>
        </div>
        </main>
    );
}

export default Serviceitem;