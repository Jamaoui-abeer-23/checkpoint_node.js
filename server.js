const http = require("http"); // Importer le module HTTP

// Créer le serveur
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" }); // Réponse avec un type HTML
  res.end("<h1>Hello Node!!!!</h1>\n"); // Contenu envoyé au client
});

// Le serveur écoute sur le port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});