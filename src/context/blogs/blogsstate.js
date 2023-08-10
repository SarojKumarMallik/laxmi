import { useState } from "react";
import $ from "jquery";
import BlogsContext from "./blogscontext";
import { baseUrl } from "../../utility/utilityfunctions";

const BlogsState = (props) => {
    const [blogs, setBlogs] = useState([]);

    const getBlogsContent = () => {
        $.ajax({
            url: `${baseUrl}blogscontent`,
            type: "GET",
            success: (response) => {
                if (response.status === 0) {
                    setBlogs(response.data);
                } else {
                    console.log(response);
                }
            },
        });
    }

    return (
        <BlogsContext.Provider value={{ blogs, getBlogsContent }}>
            {props.children}
        </BlogsContext.Provider>
    );
}

export default BlogsState;