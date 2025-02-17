const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();


app.use(cors({
  origin: ['https://agraexpress.netlify.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
}));

app.use(express.json());

// Handle preflight requests
app.options('*', cors());

if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`)
    else
      next()
  })
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/send-email', (req, res) => {
  const { to, subject, formData } = req.body;

  const formatEmailContent = (data) => {
    return `
      Vehicle Type: ${data.vehicleType}
      Vehicle Subtype: ${data.vehicleSubtype}
      Vehicle Model: ${data.vehicleModel}
      Pick-up Location: ${data.pickUp}
      Drop-off Location: ${data.dropOff}
      Pick-up Date and Time: ${data.pickTime}
      Drop-off Date and Time: ${data.dropTime}

      Personal Information:
      Name: ${data.name} ${data.lastName}
      Phone: ${data.phone}
      Age: ${data.age}
      Email: ${data.email}
      Address: ${data.address}
      City: ${data.city}
      Zip Code: ${data.zipcode}
    `;
  };

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    text: subject.includes('New Vehicle Booking')
      ? formatEmailContent(formData)
      : `Dear ${formData.name},\n\nThank you for your booking. Here are your details:\n\n${formatEmailContent(formData)} \nOur team will get in touch with you soon.\n\n If you have any questions, please don't hesitate to reach out to us. \n\n\nBest regards,\nAgra Express Team.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ status: 'error', message: 'Error sending email to admin' });
    } else {
      console.log('Email sent to admin: ' + info.response);
      res.status(200).json({ status: 'success', message: 'Email sent successfully to customer' });

      transporter.sendMail(customerMailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).json({ status: 'error', message: 'Error sending email' });
        } else {
          console.log('Email sent to customer: ' + info.response);
          res.status(200).json({ status: 'success', message: 'Email sent successfully to customer' });
        }
      });
    }
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
