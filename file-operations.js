const fs = require("fs"); // Importer le module File System

// Créer un fichier "welcome.txt" avec le contenu "Hello Node"
fs.writeFileSync("welcome.txt", "Hello Node");

// Lire le contenu de "welcome.txt"
const data = fs.readFileSync("welcome.txt", "utf8");

// Afficher le contenu dans la console
console.log(data);