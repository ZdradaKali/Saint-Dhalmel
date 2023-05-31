// Importer les dépendances nécessaires
const client = require("../../index");

// Créer une fonction pour gérer les messages
module.exports = {
  name: "messages.js"
};


client.on("messageCreate", async (message) => {
  // Vérifier si le message provient d'un bot pour éviter les boucles infinies
  if (message.author.bot) return;
  if (message.content.toLowerCase() === "terres brûlées au vent") {
    message.reply('des landes de pierres');
  } else if (message.content.toLowerCase() === "autour des lacs") {
    message.reply("c'est pour les vivants");
  } else if (message.content.toLowerCase() === "un peu d'enfer") {
    message.reply("le Connemara");
  } else if (message.content.toLowerCase() === "des nuages noirs") {
    message.reply("qui viennent du nord");
  } else if (message.content.toLowerCase() === "colorent la terre") {
    message.reply("les lacs les rivières");
  } else if (message.content.toLowerCase() === "c'est le décor") {
    message.reply("DU CONNEMAAARAAAAAAAA");
  };
});