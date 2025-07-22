import "./IndividualBlog.css";
import * as DOMPurify from 'dompurify';
import React, { useContext, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import blogsContext from "../../context/blogs/blogscontext";
import progressContext from "../../context/loading/progresscontext";
import Breadcrumb from '../Breadcrumb/Breadcrumb';

function IndividualBlog() {
  const { setProgress } = useContext(progressContext);
  const { blogs } = useContext(blogsContext);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  // const blogId = searchParams.get("blogId");
  const {url} = useParams();


  useEffect(() => {
    setProgress(70);
    setTimeout(() => {
      setProgress(100);
    }, 100);
  }, []);

// Get the current blog
  const currentBlog = blogs.find((item) => item.url === url);

  // Update metadata when blog is found
  useEffect(() => {
    if (currentBlog) {
      document.title = currentBlog.metaT || currentBlog.title;
      document.querySelector('meta[name="description"]')?.setAttribute('content', currentBlog.metaD || '');
      document.querySelector('meta[name="keywords"]')?.setAttribute('content', currentBlog.metaK || '');
    }
  }, [currentBlog]);
  // document.title = url

  return (
    <div className="my-4">
       <Breadcrumb
        pageName={currentBlog?.title || ''}
        bgImage="/img/uplaods/rad.jpg"
        path={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blogs' },
          { label: currentBlog?.title || '' }, // dynamically set title
        ]}
      />
      {blogs.map((item) => {
        if (url === item.url) {

          document.title = item.metaT || item.title;
          // {/* document.querySelector('meta[name="title"]').setAttribute('content', item.metaT); */}
          document.querySelector('meta[name="description"]').setAttribute('content', item.metaD) ;
          document.querySelector('meta[name="keywords"]').setAttribute('content', item.metaK) ;
          
          return (

          
            <div className="container pt-5" key={item.id}>

              {/* <Link to="/blogs">Go Back</Link> */}
              <div className="blog-card mt-3 mb-5">
                <div className="row g-0">
                  <div className="col-md-12">
                    <div className="blog-card-img">
                      <img
                        src={`/img/uplaods/${item.imgSrc}`}
                        alt="blog"
                        className="img-fluid rounded-start"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 p-2 pl-3">
                    <div className="blog-card-text">
                      {/* <strong>{item.tag}</strong> */}
                      <h3>{item.title}</h3>
                      {/* <p>{ DOMPurify.sanitize('<h1>Html</h1>')}</p> */}
                      {/* <p>{item.content}</p> */}
                      <p dangerouslySetInnerHTML={{__html: item.content}}></p>
                      <p>{item.content2}</p>
                      <div>
                        <h5>{item.headtext1}</h5>
                        <p>{item.para1}</p>
                        <ul>{item.param}</ul>
                        <p>{item.title2}</p>
                        <p>{item.title3}</p>
                      </div>
                      <div>
                        <h5>{item.headtext2}</h5>
                        <p>{item.title4}</p>
                        <p>{item.title5}</p>
                        <p dangerouslySetInnerHTML={{__html: item.param2}}></p>

                      </div>
                      <div>
                        <h5>{item.headtext3}</h5>
                        <p dangerouslySetInnerHTML={{__html: item.title6}}></p>
                        <p>{item.title7}</p>
                      </div>
                      <div>
                        <h5>{item.headtext4}</h5>

                        <p>{item.title8}</p>
                        <p>{item.title9}</p>
                      </div>
                      <div>
                        <h5>{item.headtext5}</h5>

                        <p dangerouslySetInnerHTML={{__html: item.title10}}></p>
                        <p>{item.title11}</p>
                      </div>
                      <div>
                        <h5>{item.headtext6}</h5>

                        <p>{item.title12}</p>
                        <p dangerouslySetInnerHTML={{__html: item.title13}}></p>
                      </div>
                      <div>
                        <h5>{item.headtext7}</h5>

                        <p>{item.title14}</p>
                        <p>{item.title15}</p>
                      </div>

                      {/* <div className="blog-author">
                        <div className="blog-author-img">
                          <img src={`img/uplaods/${item.authorImg}`} alt="" />
                        </div>
                        <div className="blog-author-text">
                          <strong>{item.author}</strong>
                          <span>{item.publishedAt}</span>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default IndividualBlog;
