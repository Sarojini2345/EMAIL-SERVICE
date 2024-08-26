const express = require('express');
const cors = require('cors');
const EmailService = require('./src/EmailService');

const app = express();
const port = process.env.PORT || 4000

const emailService = new EmailService();

app.use(cors()); // Allow all origins
app.use(express.json()); // To parse JSON request bodies

// API endpoint to send an email
app.post('/send-email', async (req, res) => {
  const { to, subject, body } = req.body;
  if (!to || !subject || !body) {
    return res.status(400).json({ error: 'Missing required fields: to, subject, body' });
  }
  try {
    await emailService.sendEmail(to, subject, body);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
