const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path"); // Import the path module

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (like your HTML, CSS, and JS files)
app.use(express.static(path.join(__dirname, "/")));

// Nodemailer configuration
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nicholask39@gmail.com", // replace with your email
    pass: "wdgo ibwf uaxz kicv", // replace with your email password
  },
});

// Contact form route
app.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body; // Added email to destructuring

  let mailOptions = {
    from: email, // The user's email
    to: "nicholask39@gmail.com", // Your email
    subject: `New Contact Form Submission: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Error sending message.");
    }
    console.log("Message sent: %s", info.messageId);
    res.sendFile(path.join(__dirname, "confirmation.html")); // Render the confirmation page
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
