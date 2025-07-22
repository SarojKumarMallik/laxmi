import "./AllBlogs.css";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import blogsContext from "../../context/blogs/blogscontext";
import progressContext from "../../context/loading/progresscontext";
import Breadcrumb from '../Breadcrumb/Breadcrumb';

function AllBlogs() {
  const { setProgress } = useContext(progressContext);
  const { blogs } = useContext(blogsContext);
  // Sort blogs by published date in descending order (recent to old)
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );
  useEffect(() => {
    setProgress(70);
    setTimeout(() => {
      setProgress(100);
    }, 100);                              
  }, []);
  
  return (
    <div id="allBlogs">
       <Breadcrumb
        pageName="Blog"
        bgImage="/img/uplaods/rad.jpg"
        path={[
          { label: 'Home', href: '/' },
          { label: '', href: '' },
          { label: 'Blog' } // current page, no link
        ]}
      />
      <div className="container-fluid">
        <div className="section-title">
          
          {/* <h2>Blogs</h2> */}
        </div>
        {/* <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h3 style={{ fontWeight: "800" }}>
            Newborn Care Essentials: A Guide for New Parents
          </h3>
          <p
            style={{
              fontWeight: "500",
              textAlign: "justify",
              paddingInline: "30px",
            }}
          >
            Celebrating the beauty of new life in the family is the most amazing
            yet challenging journey for any parent. At Laxmi Maternity, we
            understand the importance of providing comprehensive guidance for
            new parents. We have designed some newborn care essentials for new
            parents
          </p>
        </div> */}
        <div className="row">
          {sortedBlogs.map((item) => {
            return (
              <div className="col-md-3" key={item.id}>
                <div className="blog-box item">
                  <div className="blog-box-img">
                    <img src={`/img/uplaods/${item.imgSrc}`} alt="blog" />
                    <Link
                      to={`/${item.url}`}
                      className="blog-img-link"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>
                    </Link>
                  </div>

                  <div className="blog-box-text">
                    {/* <strong>{item.tag}</strong> */}
                    <Link to={`/${item.url}`}>{item.title}</Link>
                    <div>
                      {item.content === "" ? (
                        // Show titles if the content field is null
                        <ol>
                          <li
                            className="connnn"
                            style={{
                              color: "#797979",
                              fontSize: ".9rem",
                              fontWeight: "400",
                            }}
                          >
                            {item.title2}
                          </li>
                        </ol>
                      ) : (
                        // Show default content otherwise
                        <div>
                          <p>{item.content}</p>
                          <p
  style={{
    fontSize: "0.85rem",
    color: "#555",
    marginTop: "8px",
    // fontStyle: "italic",
    borderTop: "1px solid #eee",
    paddingTop: "5px",
  }}
>
  Published on: {item.publishedAt.slice(0, 10)}
</p>

                        </div>
                      )}
                    </div>
                    {/* <p>{item.content}</p> */}
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
            );
          })}
        </div>
        {/* <div style={{ marginTop: "40px", paddingInline: "30px" }}>
          <h3 style={{ fontWeight: "800" }}>Conclusion</h3>
          <p style={{ fontWeight: "500", textAlign: "justify" }}>
            Welcoming a newborn is an incredible experience filled with joy and
            adjustments. At Laxmi Maternity, we are always committed to
            supporting new parents through this transformative journey. We
            understand the importance of essential care of the newborn care
            starting from feeding and diapering to ensuring a safe, loving, and
            nurturing environment. Our focus lies in supporting and guiding new
            parents through this journey by providing comprehensive learning of
            newborn needs for both baby and parents. We believe that with the
            right knowledge, parents can confidently nurture the joys and
            challenges of caring for their newborns and lead a very healthy and
            happy life.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default AllBlogs;
