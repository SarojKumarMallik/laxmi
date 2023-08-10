import { useState } from "react";
import $ from "jquery";
import AboutContext from "./aboutcontext";
import { baseUrl } from "../../utility/utilityfunctions";

const AboutState = (props) => {
    const [aboutContent, setAboutContent] = useState({});
    const [aboutKeys, setAboutKeys] = useState([]);

    const getAboutContent = () => {
        $.ajax({
            url: `${baseUrl}aboutcontent`,
            type: "GET",
            success: (response) => {
                if (response.status === 0) {
                    setAboutContent(response.data.about[0]);
                    setAboutKeys(response.data.aboutKeys);
                } else {
                    console.log(response);
                }
            },
        });
    }

    return (
        <AboutContext.Provider value={{ aboutContent, aboutKeys, getAboutContent }}>
            {props.children}
        </AboutContext.Provider>
    );
}

export default AboutState;