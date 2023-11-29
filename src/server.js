const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for the contact model
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String,
});

// Create a model based on the schema
const Contact = mongoose.model('Contact', contactSchema);

// Middleware to parse JSON
app.use(bodyParser.json());

// Route to handle contact form submissions
app.post('/send-email', async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    // Create a new contact document
    const newContact = new Contact({ firstName, lastName, email, message });

    // Save the contact to the database
    await newContact.save();

    res.status(201).send('Contact form submitted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
