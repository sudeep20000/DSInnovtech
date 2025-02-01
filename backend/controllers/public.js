const { StatusCodes } = require("http-status-codes");
const { countries } = require("countries-list");
const nodemailer = require("nodemailer");
const { BadRequestError } = require("../errors");
const Contact_details = require("../models/contactDetails");

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

const saveContactDetails = async (req, res) => {
  // const userId = req.user.userId;

  const {
    firstName,
    lastName,
    organization,
    jobTitle,
    email,
    phone,
    country,
    state,
    message,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !organization ||
    !jobTitle ||
    !email ||
    !phone ||
    !country ||
    !state ||
    !message
  ) {
    throw new BadRequestError("Please provide all cradentials");
  }

  const userReceivedMail = {
    from: `"DSinnovtech" <${process.env.USER_EMAIL}>`,
    to: email,
    subject: `Message from DSinnovtech`,
    text: `Thank you ${
      firstName.split(" ")[0]
    }, for reaching out to us. We have received your message: ${message}`,
  };

  const companyReceivedMail = {
    from: email,
    to: process.env.USER_EMAIL,
    subject: `New Message from ${email}`,
    text: `You have received a new message from ${firstName} :\n\n"${message}"`,
  };

  try {
    const [emailResult, userResult] = await Promise.all([
      transporter.sendMail(userReceivedMail),
      transporter.sendMail(companyReceivedMail),
      Contact_details.create({
        ...req.body,
        country: countries[req.body.country].name,
      }),
    ]);

    // contactedBy: userId,

    res
      .status(StatusCodes.OK)
      .json({ msg: "Thank you for reaching out to us." });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: error.toString() });
  }
};

module.exports = { saveContactDetails };
