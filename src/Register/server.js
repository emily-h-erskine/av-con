const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001; // Change this to the appropriate port number

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'emilykarate1234@gmail.com', // Your email
    pass: 'Karate2002!', // Your password
  },
});

app.post('/send-email', (req, res) => {
  const { firstName, lastName, email } = req.body;

  const mailOptions = {
    from: 'emilykarate1234@gmail.com', // Sender email
    to: 'recipient@example.com', // Recipient email
    subject: 'New Registration',
    text: `A new registration: First Name - ${firstName}, Last Name - ${lastName}, Email - ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Something went wrong.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
