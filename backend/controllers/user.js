const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const nodemailer = require("nodemailer");
const User = require("../models/user");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: { rejectUnauthorized: false },
});

const saveDetails = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    throw new BadRequestError("Please provide all cradentials");
  }

  const userMail = {
    from: `"DSinnovtech" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Message from DSinnovtech`,
    text: `Thank you ${
      name.split(" ")[0]
    }, for reaching out to us. We have received your message: ${message}`,
  };

  const companyMail = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Message from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n"${message}"`,
  };

  try {
    const [emailResult, userResult] = await Promise.all([
      transporter.sendMail(userMail),
      transporter.sendMail(companyMail),
      User.create({ ...req.body }),
    ]);

    res.status(StatusCodes.OK);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: error.toString() });
  }
};

module.exports = { saveDetails };
