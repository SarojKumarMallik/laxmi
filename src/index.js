import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import ProgressState from './context/loading/progressstate';
import LandingState from './context/landing/landingstate';
import FeaturedServicesState from './context/featuredservices/featuredservicesstate';
import ServicesState from './context/services/servicesstate';
import BlogsState from './context/blogs/blogsstate';
import AchievementsState from './context/achievements/achievementsstate';
import DoctorState from './context/doctors/doctorstate';
import ContactState from './context/contact/contactstate';
import AboutState from './context/about/aboutstate';
import PackagesState from './context/packages/packagesstate';
import AppointmentState from './context/appointment/appointmentstate';
import MainMenuState from './context/mainmenu/mainmenustate';
import FooterMenuState from './context/footermenu/footermenustate';
import DynamicPageState from './context/dynamicpage/dynamicpagestate';
import QrState from './context/qr/qrstate';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <MainMenuState>
      <FooterMenuState>
        <ProgressState>
          <LandingState>
            <FeaturedServicesState>
              <ServicesState>
                <BlogsState>
                  <AchievementsState>
                    <DoctorState>
                      <ContactState>
                        <AboutState>
                          <PackagesState>
                            <AppointmentState>
                              <DynamicPageState>
                              <QrState>
                                <App />
                                </QrState>
                              </DynamicPageState>
                            </AppointmentState>
                          </PackagesState>
                        </AboutState>
                      </ContactState>
                    </DoctorState>
                  </AchievementsState>
                </BlogsState>
              </ServicesState>
            </FeaturedServicesState>
          </LandingState>
        </ProgressState>
      </FooterMenuState>
    </MainMenuState>

  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
