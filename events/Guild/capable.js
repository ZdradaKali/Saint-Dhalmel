// Importer les dépendances nécessaires
const client = require("../../index");

// Créer une fonction pour gérer les messages
module.exports = {
    name: "capable.js"
  };


client.on("messageCreate", async (message) => {
        // Vérifier si le message provient d'un bot pour éviter les boucles infinies
        if (message.author.bot) return;
        if (message.content.toLowerCase().includes("tu") && message.content.toLowerCase().includes("es") && message.content.toLowerCase().includes("capables")) {
          // Envoi du gif "skibidi bop" en réponse
          message.channel.send({ files: ["./medias/images/capable.gif"] });
        };
      });