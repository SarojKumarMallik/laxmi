import './Home.css';
import React, { useContext, useEffect } from 'react';
import Landingfold from './landingfold/Landingfold';
import Featuredservices from './featuredservices/Featuredservices';
import Services from '../services/Services';
import Blogs from './blogs/Blogs';
import Achievements from './achievements/Achievements';
import Doctors from './doctors/Doctors';
import Contact from './contact/Contact';
import progressContext from '../../context/loading/progresscontext';

function Home() {
    const { setProgress } = useContext(progressContext);

    useEffect(() => {
        setProgress(70);
        setTimeout(() => {
            setProgress(100);
        }, 100);
    }, []);

    return (
        <>
            <Landingfold></Landingfold>
            <main id="main">
                <Featuredservices></Featuredservices>
                <Services></Services>
                <Blogs></Blogs>
                <Achievements></Achievements>
                <Doctors></Doctors>
                <Contact></Contact>
            </main>
        </>
    );
}

export default Home;