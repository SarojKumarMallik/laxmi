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
import YoutubeWrap from './youtubevideo/YoutubeWrap';
import WelcomeTo from './welcometo/WelcomeTo';
import WhyUs from './whyus/WhyUs';
import TestimonialSlider from './testimonials/Testimonial';
import Faq from './faq/Faq';

function Home() {
    const { setProgress } = useContext(progressContext);

    useEffect(() => {
        if (setProgress) {
            setProgress(70);
            setTimeout(() => {
                setProgress(100);
            }, 100);
        }
    }, []);

    return (
            <main id="main">
                <Landingfold />
                <WelcomeTo />
                <Featuredservices />
                <Services />
                <Blogs />
                <Achievements />
                <Doctors />
                <TestimonialSlider />
                <WhyUs />
                <YoutubeWrap />
                <Faq />
                <Contact />
            </main>
        
    );
}

export default Home;
