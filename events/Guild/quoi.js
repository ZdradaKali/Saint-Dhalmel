// Importer les dépendances nécessaires
const client = require("../../index");

// Créer une fonction pour gérer les messages
module.exports = {
  name: "quoi.js"
};


client.on("messageCreate", async (message) => {
  // Vérifier si le message provient d'un bot pour éviter les boucles infinies
  if (message.author.bot) return;

  // Vérifier si le dernier mot du message est "quoi"
  const lastWord = message.content.split(/\s+/).pop(); // Récupérer le dernier mot du message sans ponctuation
  const quoiVariants = ["quoi", "quoii", "quoua", "koi", "koua", "quois", "kwa", "quoii?", "quoua?", "koi?", "koua?", "quois?", "kwa?", "quoi?", "kouua?", "kouua", "kuwa", "kuwa?", "kuwua", "kuwua?", "kuwuwa?", "kuwuwa"]; // Liste des variantes orthographiques de "quoi"
  const pourquoiVariants = ["pourquoi", "pourkoi", "pkoi", "pkoi?", "pourquoi?", "pourkoi?", "pourquoii", "pourquoii?", "pourquoua", "pourquoua?", "pourkoua", "pourkoua?", "pourquois", "pourquois?", "pourkwa", "pourkwa?", "pk", "pk?"];
  if (quoiVariants.includes(lastWord.toLowerCase()) || (lastWord.toLowerCase() === "quoi" && !/\?$/.test(message.content))) {
    if (message.author.id === "986281922051313675") {
      message.reply({ files: ["./medias/videos/guillotin.mp4"] });
    }
    // Répondre avec un message
    else message.reply("<:Reg_hestiaFEUR:1095783085313892373>");
    message.reply({ files: ["./medias/sons/feur.mp3"] });
  }

  // Vérifier si le message contient "pourquoi"
  else if (pourquoiVariants.includes(lastWord.toLowerCase()) || (lastWord.toLowerCase() === "pourquoi" && !/\?$/.test(message.content))) {
    // Répondre avec un message
    message.reply("Parce que <:Reg_hestiaFEUR:1095783085313892373>");
    message.reply({ files: ["./medias/sons/paske.mp3"] });
  }

  else if (message.content.toLowerCase().includes("contrefeur") || message.content.toLowerCase().includes("contre feur") || message.content.toLowerCase().includes("contre feur")) {
    // Répondre avec un message
    message.reply({ files: ["./medias/images/contrefeur.jpg"] });
  }
});