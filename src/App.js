import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useContext, useEffect } from 'react';
import { showBackToTopBtn } from './utility/utilityfunctions';

// Components
import LoadingBar from 'react-top-loading-bar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Pagenotfound from './components/pagenotfound/Pagenotfound';
import Serviceitem from './components/services/Serviceitem';
import Packages from './components/packages/Packages';
import Doctors from './components/home/doctors/Doctors';
import Contact from './components/home/contact/Contact';
import About from './components/about/About';
import Appointment from './components/appointment/Appointment';
import AllBlogs from './components/allblogs/AllBlogs';
import IndividualBlog from './components/allblogs/IndividualBlog';

// Contexts And States
import progressContext from './context/loading/progresscontext';
import aboutContext from './context/about/aboutcontext';
import achievementsContext from './context/achievements/achievementscontext';
import blogsContext from './context/blogs/blogscontext';
import contactContext from './context/contact/contactcontext';
import doctorContext from './context/doctors/doctorscontext';
import featuredServicesContext from './context/featuredservices/featuredservicescontext';
import landingContext from './context/landing/landingcontext';
import packagesContext from './context/packages/packagescontext';
import servicesContext from './context/services/servicescontext';
import TermsAndConditions from './components/desclimer/TermsAndConditions';
import PrivacyPolicy from './components/desclimer/PrivacyPolicy';
import mainmenuContext from './context/mainmenu/mainmenucontext';
import footerMenuContext from './context/footermenu/footermenucontext';
import dynamicPageContext from './context/dynamicpage/dynamicpagecontext';
import DynamicPage from './components/dynamic-pages/DynamicPage';


function App() {
  const { getMenuItems } = useContext(mainmenuContext);
  const { progress } = useContext(progressContext);
  const { getAboutContent } = useContext(aboutContext);
  const { getAchievementsContent } = useContext(achievementsContext);
  const { getBlogsContent } = useContext(blogsContext);
  const { getContactInfoContent } = useContext(contactContext);
  const { getDocInfo, getDocList } = useContext(doctorContext);
  const { getFeaturedServicesContent } = useContext(featuredServicesContext);
  const { getLandingContent } = useContext(landingContext);
  const { getPackagesContent } = useContext(packagesContext);
  const { services, getServices, getShortServices } = useContext(servicesContext);
  const { getFooterMenuItems } = useContext(footerMenuContext);
  const { pageDetail, getPageDetails } = useContext(dynamicPageContext);

  useEffect(() => {
    showBackToTopBtn('.back-to-top');
    getMenuItems();
    getAboutContent();
    getAchievementsContent();
    getBlogsContent();
    getContactInfoContent();
    getDocList();
    getDocInfo();
    getFeaturedServicesContent();
    getLandingContent();
    getPackagesContent();
    getServices();
    getShortServices();
    getFooterMenuItems();
    getPageDetails();
    // eslint-disable-next-line
  }, []);


  return (
    <Router>

      <ToastContainer />
      <LoadingBar color='#076ac0' progress={progress} />
      <Navbar></Navbar>

      <Routes>
        <Route exact path="/" element={<Home />} />

        {services.map(item => <Route exact path={`/${item.slug}`} element={<Serviceitem serviceItem={item} />} key={item.id} />)}
        {pageDetail.map(item => <Route exact path={`${item.url}`} element={<DynamicPage content={item} />} key={item.id} />)}

        <Route exact path="/blogs" element={<AllBlogs />} />
        <Route exact path="/blog" element={<IndividualBlog />} />
        <Route exact path="/packages" element={<Packages />} />
        <Route exact path="/doctors" element={<Doctors />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/appointment" element={<Appointment />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>

      <Footer></Footer>
      <div id="preloader"></div>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

    </Router>
  );
}

export default App;
