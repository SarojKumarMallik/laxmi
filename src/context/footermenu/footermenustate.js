import { useState } from "react";
import $ from "jquery";
import FooterMenuContext from "./footermenucontext";
import { baseUrl } from "../../utility/utilityfunctions";

const FooterMenuState = (props) => {
    const [footerMenus, setFooterMenus] = useState([]);
    const [disclaimer, setDisclaimer] = useState([]);

    const getFooterMenuItems = () => {
        $.ajax({
            url: `${baseUrl}footermenus`,
            type: "GET",
            success: (response) => {
                if (response.status === 0) {
                    setFooterMenus(response.data.footerMenuResult);
                    setDisclaimer(response.data.disclaimerResult[0]);
                } else {
                    console.log(response);
                }
            },
        });
    }

    return (
        <FooterMenuContext.Provider value={{ footerMenus, disclaimer, getFooterMenuItems }}>
            {props.children}
        </FooterMenuContext.Provider>
    );
}

export default FooterMenuState;