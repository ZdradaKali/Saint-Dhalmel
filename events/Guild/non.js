// Importer les dépendances nécessaires
const client = require("../../index");

// Créer une fonction pour gérer les messages
module.exports = {
    name: "non.js"
  };


client.on("messageCreate", async (message) => {
        // Vérifier si le message provient d'un bot pour éviter les boucles infinies
        if (message.author.bot) return;
      
        // Vérifier si le dernier mot du message est "quoi"
        const lastWord = message.content.split(/\s+/).pop(); // Récupérer le dernier mot du message sans ponctuation
        const nonVariants = ["non", "nn"]; // Liste des variantes orthographiques de "quoi"
        if (nonVariants.includes(lastWord.toLowerCase()) || (lastWord.toLowerCase() === "non" && !/\?$/.test(message.content))) {
          if (message.author.id === "986281922051313675") { 
            message.reply({ files: ["./medias/videos/guillotin.mp4"] });
          }
          // Répondre avec un message
          else message.reply("bril");
        }
      });