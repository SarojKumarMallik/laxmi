import { useState } from "react";
import $ from "jquery";
import MainmenuContext from "./mainmenucontext";
import { baseUrl } from "../../utility/utilityfunctions";

const MainMenuState = (props) => {
    const [menus, setMenus] = useState([]);

    const getMenuItems = () => {
        $.ajax({
            url: `${baseUrl}mainmenus`,
            type: "GET",
            success: (response) => {
                if (response.status === 0) {
                    setMenus(response.data);
                } else {
                    console.log(response);
                }
            },
        });
    }

    return (
        <MainmenuContext.Provider value={{ menus, getMenuItems }}>
            {props.children}
        </MainmenuContext.Provider>
    );
}

export default MainMenuState;