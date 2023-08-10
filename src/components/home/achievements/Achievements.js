import './Achievements.css';
import React, { useContext, useEffect } from 'react';
import Achievementitem from './Achievementitem';
import PureCounter from "@srexi/purecounterjs";
import achievementsContext from '../../../context/achievements/achievementscontext';

function Achievements() {
    const { achievements } = useContext(achievementsContext);

    useEffect(() => {
        new PureCounter();
        // eslint-disable-next-line
    }, [achievements]);

    return (
        <>
            <section id="achievements" className="achievements" >
                <div className="container" data-aos="fade-up">
                    <div className="row no-gutters">
                        {achievements.map(item => <Achievementitem achievementItem={item} key={item.id}></Achievementitem>)}
                    </div>
                </div>
            </section >
        </>
    );
}

export default Achievements;