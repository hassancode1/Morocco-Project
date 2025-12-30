const nodemailer = require('nodemailer');

// For testing, you can use Ethereal (creates test accounts automatically)
// const NodemailerTransporter = nodemailer.createTransport({
//   host: 'smtp.ethereal.email',
//   port: 587,
//   auth: {
//     user: 'ethereal.user@ethereal.email',
//     pass: 'verysecret'
//   }
// });

// Production Gmail configuration
const NodemailerTransporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_SECRET,
  },
  tls: {
    rejectUnauthorized: false
  }
});

module.exports = NodemailerTransporter;
