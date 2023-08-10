import { useState } from "react";
import $ from "jquery";
import FeaturedServicesContext from "./featuredservicescontext";
import { baseUrl } from "../../utility/utilityfunctions";

const FeaturedServicesState = (props) => {
    const [featuredServices, setFeaturedServices] = useState([]);

    const getFeaturedServicesContent = () => {
        $.ajax({
            url: `${baseUrl}featuredservices`,
            type: "GET",
            success: (response) => {
                if (response.status === 0) {
                    setFeaturedServices(response.data);
                } else {
                    console.log(response);
                }
            },
        });
    }

    return (
        <FeaturedServicesContext.Provider value={{ featuredServices, getFeaturedServicesContent }}>
            {props.children}
        </FeaturedServicesContext.Provider>
    );
}

export default FeaturedServicesState;