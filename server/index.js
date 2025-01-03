import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Configure CORS with specific options
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['POST', 'GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Verify required environment variables
const requiredEnvVars = ['EMAIL_USER', 'EMAIL_PASS', 'ADMIN_EMAIL'];
requiredEnvVars.forEach(varName => {
  if (!process.env[varName]) {
    console.error(`Missing required environment variable: ${varName}`);
  }
});

// Email configuration with error handling
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify email configuration
transporter.verify((error) => {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Email server is ready');
  }
});

app.post('/api/book', async (req, res) => {
  const { name, email, phone, message, packageTitle } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ 
      message: 'Missing required fields' 
    });
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Booking Request - ${packageTitle || 'Kashmir Tour'}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Package:</strong> ${packageTitle || 'Not specified'}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Booking Confirmation - Kashmir Travels',
      html: `
        <h2>Thank you for your booking request!</h2>
        <p>Dear ${name},</p>
        <p>We have received your booking request for ${packageTitle || 'our Kashmir tour'}. Our team will contact you shortly to confirm your booking and discuss further details.</p>
        <p>Your booking details:</p>
        <ul>
          <li>Package: ${packageTitle || 'Not specified'}</li>
          <li>Phone: ${phone}</li>
        </ul>
        <p>Best regards,<br>Kashmir Travels Team</p>
      `
    };

    await transporter.sendMail(customerMailOptions);

    res.status(200).json({ 
      success: true,
      message: 'Booking request sent successfully' 
    });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to send booking request',
      error: error.message 
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});