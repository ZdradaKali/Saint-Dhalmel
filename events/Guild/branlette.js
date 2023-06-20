// Importer les dépendances nécessaires
const client = require("../../index");

// Créer une fonction pour gérer les messages
module.exports = {
    name: "branlette.js"
};


client.on("messageCreate", async (message) => {
    // Y'avait un commentaire mais flemme
    if(message.author.bot) return;

    const lastWord = message.content.split(/\s+/).pop();
    const branlette = ["me branler", "me lebron james", "me masturber", "me pignoler", "branler", "masturbation", "m'astiquer", "dégorger le poireau", "me pignoler", "me doigter"];
    const laBranlette = ["se branler", "se lebron james", "se masturber", "se pignoler", "s'astiquer", "se pignoler", "se doigter"];

    if(laBranlette.includes(lastWord.toLowerCase()) || branlette.includes(lastWord.toLowerCase())) {
        message.reply(
          `s'il vous plaît ARRÊTEZ de notifier sur le
            serv quand vous allez vous masturber. 
            Cela arrive assez souvent, et je ne sais 
            pas pourquoi ceux qui font cela le font, 
            ou parce que il pense que le serveur est 
            uniquement constitué d'hommes qui ont besoin 
            de savoir cela. Les gars, personnes va vous 
            féliciter ou être impressionné 
            (surtout sachant ou votre main est fourré 
            pendant que vous écrivez le message). 
            Je ne veux pas ajouter cette règle, mais j'y 
            suis obligé car ce type d'annonce pourrait 
            être embarrassant pour les futurs membres de 
            ce serv. Merci d'avoir pris en compte cette 
            annonce tout le monde.`  
        );
    };
})