import './AllBlogs.css';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogsContext from '../../context/blogs/blogscontext';
import progressContext from '../../context/loading/progresscontext';

function AllBlogs() {
    const { setProgress } = useContext(progressContext);
    const { blogs } = useContext(blogsContext);

    useEffect(() => {
        setProgress(70);
        setTimeout(() => {
            setProgress(100);
        }, 100);
    }, []);


    return (
        <div id="allBlogs">
            <div className="container-fluid">
                <div className="section-title">
                    <h2>Blogs</h2>
                </div>

                <div className="row">
                    {blogs.map(item => {
                        return <div className="col-md-3" key={item.id}>
                            <div className="blog-box item">
                                <div className="blog-box-img">
                                    <img src={`img/uplaods/${item.imgSrc}`} alt="blog" />
                                    <Link to={`/blog?blogId=${item.id}`} className="blog-img-link">
                                        <i className="bi bi-box-arrow-up-right"></i>
                                    </Link>
                                </div>

                                <div className="blog-box-text">
                                    <strong>{item.tag}</strong>
                                    <Link to={`/blog?blogId=${item.id}`}>{item.title}</Link>
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
                    })}
                </div>
            </div>
        </div>
    );
}

export default AllBlogs;