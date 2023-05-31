// Importer les dépendances nécessaires
const client = require("../../index");

// Créer une fonction pour gérer les messages
module.exports = {
    name: "ambadeblou.js",
};

client.on("messageCreate", async (message) => {
    // Vérifier si le message provient d'un bot pour éviter les boucles infinies
    if (message.author.bot) return;
    if (message.content.toLowerCase().includes('ambadeblou')) {
        // Envoi de "ambatukam.mp4" en réponse
        message.reply({ files: ["./medias/videos/ambadeblou.mp4"] });
    } else if (message.content.toLowerCase().includes('ambatukam') || message.content.toLowerCase().includes('ambasing') || message.content.toLowerCase().includes('ambatunat')) {
        // Envoi de "ambatukam.mp4" en réponse
        message.reply({ files: ["./medias/videos/ambatukam.mp4"] });
    } else if (message.content.toLowerCase().includes("i put the new forgis on the jeep")) {
        // Envoyer la réponse du bot
        message.reply({ files: ["./medias/videos/harlem.mp4"] });
    } else if (message.content.toLowerCase().includes("t'as mis le kimono")) {
        // Envoyer la réponse du bot
        message.reply({ files: ["./medias/videos/kimono.mp4"] });

    } else if (message.content.toLowerCase().includes("...")) {
        if (message.author.id === "258394351628058636") return;
        // Envoyer la réponse du bot
        message.reply({ files: ["./medias/videos/parle_plus_fort.mp4"] });
    } else if (message.content.toLowerCase().includes('owo') || message.content.toLowerCase().includes('uwu') || message.content.toLowerCase().includes('>w<') || message.content.toLowerCase().includes('^w^') || message.content.toLowerCase().includes('TwT')) {
        // Envoi de "ambatukam.mp4" en réponse
        message.reply({ files: ["./medias/videos/owo.mp4"] });
    } else if (message.content.toLowerCase().includes('skibidi dop') || message.content.toLowerCase().includes('skibidi bop')) {
        // Envoi du gif "skibidi bop" en réponse
        message.reply('https://tenor.com/view/skibidi-bop-bop-yes-yes-%D0%BF%D1%83%D0%B7%D0%BE-%D0%B6%D0%B8%D0%B2%D0%BE%D1%82-%D1%81%D0%BC%D0%B5%D1%85-%D1%82%D0%B0%D0%BD%D1%86%D1%8B-gif-27224458');
    } else if (message.content.toLowerCase().includes('pute')) {
        // Envoi du gif "skibidi bop" en réponse
        message.reply({ files: ["./medias/videos/pute.mp4"] });
    } else if (message.content.toLowerCase().includes("gaspard") && message.content.toLowerCase().includes("balthazar")) {
        message.channel.sendTyping();
        message.reply({ files: ["./medias/videos/palma.mp4"] });
    } else if (message.content.toLowerCase() === "sagesse") {
        message.channel.sendTyping();
        message.reply({ files: ["./medias/sons/sagesse.mp3"] });
    };


});