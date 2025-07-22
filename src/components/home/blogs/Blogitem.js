import React from "react";
import { Link } from "react-router-dom";

function Blogitem(props) {
  const {
    id,
    imgSrc,
    tag,
    title,
    content,
    title1,
    title2,
    title3,
    authorImg,
    author,
    publishedAt,
    url
  } = props.blog;

  return (
    <div className="blog-box item">
      <div className="blog-box-img">
        <img src={`img/uplaods/${imgSrc}`} alt="blog" />
        <Link to={`/${url}`} className="blog-img-link">
          <i className="bi bi-box-arrow-up-right"></i>
        </Link>
      </div>

      <div className="blog-box-text">
        {/* <strong>{tag}</strong> */}
        <Link to={`/${url}`}>{title}</Link>
        <div>
          {content === "" ? (
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
                {title2}
              </li>
            </ol>
          ) : (
            // Show default content otherwise
            <div>
              <p>{content}</p>
            </div>
          )}
        </div>
        {/* <p>{content}</p> */}
        <ol>
          {/* <li>{title2}</li> */}
          {/* <li>{title3}</li> */}
        </ol>
        {/* <p>{title1}</p> */}
        {/* <div className="blog-author">
                    <div className="blog-author-img">
                        <img src={`img/uplaods/${authorImg}`} alt="" />
                    </div>
                    <div className="blog-author-text">
                        <strong>{author}</strong>
                        <span>{publishedAt}</span>
                    </div>
                </div> */}
      </div>
    </div>
  );
}

export default Blogitem;
