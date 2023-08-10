import { useState } from "react";
import $ from "jquery";
import PackagesContext from "./packagescontext";
import { baseUrl } from "../../utility/utilityfunctions";

const PackagesState = (props) => {
    const [packages, setPackages] = useState([]);

    const getPackagesContent = () => {
        $.ajax({
            url: `${baseUrl}packages`,
            type: "GET",
            success: (response) => {
                if (response.status === 0) {
                    setPackages(response.data);
                } else {
                    console.log(response);
                }
            },
        });
    }

    return (
        <PackagesContext.Provider value={{ packages, getPackagesContent }}>
            {props.children}
        </PackagesContext.Provider>
    );
}

export default PackagesState;