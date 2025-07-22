const db = require('./db');
const nodemailer = require('nodemailer');
const orgCode = "lax123";

// Utility function to convert the db.query to a promise
function asyncQuery(sql) {
    return new Promise((resolve, reject) => {
        db.query(sql, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

async function fetchData(url, requestType, params = null, data = null) {
    const baseUrl = "https://quickhealth.in:8443/quickh_backend_webjan2024/";
    const queryParams = new URLSearchParams(params).toString();
    const fullUrl = `${baseUrl}${url}${queryParams ? `?${queryParams}` : ''}`;

    const requestOptions = {
        method: requestType,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (data) {
        requestOptions.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(fullUrl, requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error so the caller can handle it
    }
}

function sendEmail(data) {
    const text = `${data.details.message}\n\nName: ${data.details.name}\n\nEmail: ${data.details.email}`;
    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'lakshmimaternityhome@gmail.com',
            pass: 'nwsjskwfnnkpoyzl'
        },
    });

    // Setup email data
    const mailOptions = {
        from: 'lakshmimaternityhome@gmail.com',
        to: data.toEmail,
        subject: data.subject,
        text: text,
        // html: '<p>This is an HTML email</p>',
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);
        } else {
            console.log('Email sent:', info);
        }
    });
}


module.exports = { asyncQuery, fetchData, sendEmail, orgCode };