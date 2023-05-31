// Importation des dépendances nécessaires
const client = require("../../index");

// Créer une fonction pour gérer les messages
module.exports = {
    name: "mentionspam.js"
};

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.mentions.roles.some(role => role.id === '1093202802886578307')) {
    const role = message.guild.roles.cache.get('1093202802886578307');
    if (role) {
      await message.channel.send({
          content: role.toString(),
          files: ['./medias/videos/faq.mov']
      });
    } else {
      await message.reply(`Le rôle avec l'ID "1093202802886578307" n'a pas pu être trouvé.`);
    }
  }
});
