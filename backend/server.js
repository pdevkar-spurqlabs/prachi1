require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.post('/send-email', async (req, res) => {
  console.log("📩 API HIT");

  const {
    fullName,
    email,
    phone,
    specialization,
    experience,
    linkedIn,
    portfolio,
    message
  } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Resume Form" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Resume from ${fullName}`,
      text: `
Name: ${fullName}
Email: ${email}
Phone: ${phone}

Experience: ${experience}
Specialization: ${specialization}

LinkedIn: ${linkedIn}
Portfolio: ${portfolio}

Message:
${message}
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});