// server.js
const express = require('express');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the contact routes
app.use(contactRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
