const generatePassword = require("generate-password"); // Importer la bibliothèque

// Générer un mot de passe aléatoire
const password = generatePassword.generate({
  length: 12, // Longueur du mot de passe
  numbers: true, // Inclure des chiffres
  uppercase: true, // Inclure des majuscules
  lowercase: true, // Inclure des minuscules
  symbols: false, // Pas de symboles
});

// Afficher le mot de passe généré
console.log("Generated Password:", password);