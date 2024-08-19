const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const nodemailer = require("nodemailer");
const User = require("../models/user");

const saveDetails = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    throw new BadRequestError("Please provide all cradentials");
  }

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

  const mailOptions = {
    from: `"DSInnovtech" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Message from DSInnovtech`,
    text: `Thank you ${
      name.split(" ")[0]
    }, for reaching out to us. We have received your message: ${message}`,
  };

  try {
    const [emailResult, userResult] = await Promise.all([
      transporter.sendMail(mailOptions),
      User.create({ ...req.body }),
    ]);

    res.status(StatusCodes.OK).json({ msg: "Message sent" });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: error.toString() });
  }
};

module.exports = { saveDetails };
