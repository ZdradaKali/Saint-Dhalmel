// Importation des dépendances nécessaires
const client = require("../../index");

// Créer une fonction pour gérer les messages
module.exports = {
    name: "vlade.js"
};

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.mentions.roles.some(role => role.id === '1098914667339989013')) {
    const role = message.guild.roles.cache.get('1098914667339989013');
    if (role) {
      await 
      message.channel.sendTyping()
      message.channel.send({
          files: ['./medias/videos/vlade.mp4']
      });
    } else {
      await message.reply(`Le rôle avec l'ID "1098914667339989013" n'a pas pu être trouvé.`);
    }
  }
});