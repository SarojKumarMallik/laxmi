import { useState } from "react";
import $ from "jquery";
import DynamicPageContext from "./dynamicpagecontext";
import { baseUrl } from "../../utility/utilityfunctions";

const DynamicPageState = (props) => {
    const [pageDetail, setPageDetails] = useState([]);

    const getPageDetails = () => {
        $.ajax({
            url: `${baseUrl}getPageContent`,
            type: "GET",
            success: (response) => {
                if (response.status === 0) {
                    setPageDetails(response.data);
                } else {
                    console.log(response);
                }
            },
        });
    }

    return (
        <DynamicPageContext.Provider value={{ pageDetail, getPageDetails }}>
            {props.children}
        </DynamicPageContext.Provider>
    );
}

export default DynamicPageState;