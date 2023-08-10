const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions = require('./allowedOrigins');

// Routes
const aboutRouter = require('./routes/aboutContent');
const achievementsRouter = require('./routes/achievementsContent');
const blogsRouter = require('./routes/blogsContent');
const contactInfoRouter = require('./routes/contactInfo');
const doctorsInfoRouter = require('./routes/doctorsInfo');
const featuredServicesRouter = require('./routes/featuredServices');
const landingFoldRouter = require('./routes/landingFoldContent');
const packagesRouter = require('./routes/packages');
const servicesRouter = require('./routes/services');
const doctorsFromClinicRouter = require('./routes/getDoctorsFromClinic');
const slotsRouter = require('./routes/getAllSlots');
const inquiryRouter = require('./routes/saveInquiryInfo');
const mainMenusRouter = require('./routes/mainMenuDetails');
const footerMenusRouter = require('./routes/footerMenuDetails');
const pageRouter = require('./routes/getPageContent');

app.use(cors(corsOptions)); // Use the cors middleware with the specified options
app.use(bodyParser.json()); // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

const routes = [aboutRouter, achievementsRouter, blogsRouter, contactInfoRouter, doctorsInfoRouter, featuredServicesRouter, landingFoldRouter, packagesRouter, servicesRouter, doctorsFromClinicRouter, slotsRouter, inquiryRouter, mainMenusRouter, footerMenusRouter, pageRouter];

routes.map(route => app.use('/laxmimaternity_backend/', route));


app.listen(port, () => {
    console.log(`Laxmi Maternity Backend is Running on http://localhost:${port}`);
});
