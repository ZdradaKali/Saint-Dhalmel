// Importation des dépendances nécessaires
const client = require("../../index");

// Créer une fonction pour gérer les messages
module.exports = {
  name: "mention.js"
};

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.mentions.has(message.client.user)) { // Vérifie si le bot a été mentionné
    if (message.author.id === "258394351628058636") {
      message.reply({ files: ["./medias/sons/bebou.mp3"] });
    } else message.reply("Tg me mentionne pas fdp mange tes morts");
  }
});
