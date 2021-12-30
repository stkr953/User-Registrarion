const Email = require('email-templates');
const nodemailer = require('nodemailer');
const { emailConfig } = require('../../../config/vars');
const transporter = nodemailer.createTransport({
//business logic
});
