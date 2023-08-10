import './Pagenotfound.css';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import progressContext from '../../context/loading/progresscontext';

function Pagenotfound() {
    const { setProgress } = useContext(progressContext);

    useEffect(() => {
        setProgress(70);
        setTimeout(() => {
            setProgress(100);
        }, 100);
    }, []);


    return (
        <section className="page_404 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-12 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>
                            </div>

                            <div className="contant_box_404">
                                <h3 className="h2">Looks like you're lost</h3>

                                <p>The page you are looking for not avaible!</p>

                                <Link to="/" className="link_404">Go to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pagenotfound;