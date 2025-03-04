var nodemailer = require('nodemailer'); // Importer Nodemailer
require('dotenv').config(); // Charger les variables d'environnement depuis .env

// Configurer le transporteur
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Lire l'email depuis .env
    pass: process.env.PASSWORD, // Lire le mot de passe depuis .env
  },
});

// Configurer les options de l'email
var mailOptions = {
  from: process.env.EMAIL, // L'expéditeur
  to: 'safaayachi97@gmail.com', // Le destinataire (remplace-le par ton email ou celui d'un ami)
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
};

// Envoyer l'email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
