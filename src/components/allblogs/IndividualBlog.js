import './IndividualBlog.css';
import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import blogsContext from '../../context/blogs/blogscontext';
import progressContext from '../../context/loading/progresscontext';

function IndividualBlog() {
    const { setProgress } = useContext(progressContext);
    const { blogs } = useContext(blogsContext);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const blogId = searchParams.get('blogId');

    useEffect(() => {
        setProgress(70);
        setTimeout(() => {
            setProgress(100);
        }, 100);
    }, []);


    return (
        <div className='my-4'>
            {blogs.map(item => {
                if (parseInt(blogId) === item.id) {
                    return <div className="container pt-2" key={item.id}>
                        <Link to="/blogs">Go Back</Link>

                        <div className="blog-card mt-3 mb-5">
                            <div className="row g-0">
                                <div className="col-md-12">
                                    <div className="blog-card-img">
                                        <img src={`img/uplaods/${item.imgSrc}`} alt="blog" className="img-fluid rounded-start" />
                                    </div>
                                </div>
                                <div className="col-md-12 p-2 pl-3">
                                    <div className="blog-card-text">
                                        <strong>{item.tag}</strong>
                                        <h3>{item.title}</h3>
                                        <p>{item.content}</p>
                                        <div className="blog-author">
                                            <div className="blog-author-img">
                                                <img src={`img/uplaods/${item.authorImg}`} alt="" />
                                            </div>
                                            <div className="blog-author-text">
                                                <strong>{item.author}</strong>
                                                <span>{item.publishedAt}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            })}
        </div>
    );
}

export default IndividualBlog;