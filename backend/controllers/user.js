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
    user: process.env.USER_EMAIL,
    pass: process.env.EMAIL_CODE,
  },
  tls: { rejectUnauthorized: false },
});

const saveDetails = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    throw new BadRequestError("Please provide all cradentials");
  }

  const userReceivedMail = {
    from: `"DSinnovtech" <${process.env.USER_EMAIL}>`,
    to: email,
    subject: `Message from DSinnovtech`,
    text: `Thank you ${
      name.split(" ")[0]
    }, for reaching out to us. We have received your message: ${message}`,
  };

  const companyReceivedMail = {
    from: email,
    to: process.env.USER_EMAIL,
    subject: `New Message from ${email}`,
    text: `You have received a new message from ${name} :\n\n"${message}"`,
  };

  try {
    const [emailResult, userResult] = await Promise.all([
      transporter.sendMail(userReceivedMail),
      transporter.sendMail(companyReceivedMail),
      User.create({ ...req.body }),
    ]);

    res
      .status(StatusCodes.OK)
      .json({ msg: "Thank you for reaching out to us." });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: error.toString() });
  }
};

module.exports = { saveDetails };
