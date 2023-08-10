import { useState } from "react";
import $ from "jquery";
import ServicesContext from "./servicescontext";
import { baseUrl } from "../../utility/utilityfunctions";

const ServicesState = (props) => {
    const [services, setServices] = useState([]);
    const [shortServices, setShortServices] = useState([]);

    const getShortServices = () => {
        $.ajax({
            url: `${baseUrl}shortservices`,
            type: "GET",
            success: (response) => {
                if (response.status === 0) {
                    setShortServices(response.data);
                } else {
                    console.log(response);
                }
            },
        });
    }

    const getServices = () => {
        $.ajax({
            url: `${baseUrl}services`,
            type: "GET",
            success: (response) => {
                if (response.status === 0) {
                    setServices(response.data);
                } else {
                    console.log(response);
                }
            },
        });
    }

    return (
        <ServicesContext.Provider value={{ services, shortServices, getServices, getShortServices }}>
            {props.children}
        </ServicesContext.Provider>
    );
}

export default ServicesState;