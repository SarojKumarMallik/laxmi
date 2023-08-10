import { useState } from "react";
import $ from "jquery";
import AchievementsContext from "./achievementscontext";
import { baseUrl } from "../../utility/utilityfunctions";

const AchievementsState = (props) => {
    const [achievements, setAchievements] = useState([]);

    const getAchievementsContent = () => {
        $.ajax({
            url: `${baseUrl}achievementscontent`,
            type: "GET",
            success: (response) => {
                if (response.status === 0) {
                    setAchievements(response.data);
                } else {
                    console.log(response);
                }
            },
        });
    }

    return (
        <AchievementsContext.Provider value={{ achievements, getAchievementsContent }}>
            {props.children}
        </AchievementsContext.Provider>
    );
}

export default AchievementsState;