import { useState } from "react";
import $ from "jquery";
import LandingContext from "./landingcontext";
import { baseUrl } from "../../utility/utilityfunctions";

const LandingState = (props) => {
    const [landingContent, setLandingContent] = useState({});

    const getLandingContent = () => {
        $.ajax({
            url: `${baseUrl}landingfold`,
            type: "GET",
            success: (response) => {
                if (response.status === 0) {
                    setLandingContent(response.data[0]);
                } else {
                    console.log(response);
                }
            },
        });
    }

    return (
        <LandingContext.Provider value={{ landingContent, getLandingContent }}>
            {props.children}
        </LandingContext.Provider>
    );
}

export default LandingState;