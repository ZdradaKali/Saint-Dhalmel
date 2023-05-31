// Importer les dépendances nécessaires
const client = require("../../index");

// Créer une fonction pour gérer les messages
module.exports = {
    name: "guerrier.js"
  };


client.on("messageCreate", async (message) => {
    // Vérifier si le message provient d'un bot pour éviter les boucles infinies
    if (message.author.bot) return;
    if (message.content.toLowerCase() === "guerrier") {
    message.reply(`[Paroles de "Guerrier"]

    [Couplet 1]
    Seul dans ta chambre à te construire des barrières
    Si la réalité existe c’est pour mettre fin à tes rêves
    Ne remets pas à demain ce que tu peux faire ce soir
    Si tu crois pas en toi, je te le dis, personne ne le fera
    Faut dépendre de personne
    Dans la vie faut se faire seul
    Du berceau au linceul
    Fais confiance qu’à ton cœur
    Avant d’apprendre à rire on pleure
    Après la vie on meurt
    Lève-toi, prends les armes
    Et bats-toi pour tes valeurs
    [Refrain]
    Tu es capable d’accomplir de grandes choses
    Tu es capable d’réaliser tes rêves
    Tu es capable d’accomplir de grandes choses
    Tu es capable d’réaliser tes rêves
    
    [Couplet 2]
    N’écoute pas ce que les gens disent
    Il faut toujours prendre des risques
    Car le confort t’affaiblit
    Même si c’est difficile
    Peu importent les sacrifices
    Garde le sourire
    Accomplis tes objectifs
    Et récolte les bénéfices
    Tu as tout à gagner et rien à perdre
    Talent travail pour faire carrière
    La clef de la réussite se trouve dans l’échec
    Suis ton flair, affronte tes adversaires
    L’important c’est aucun remord aucun regret
    Ce qui compte c'est qui tu es ce que tu fais
    Toucher le ciel avant de finir sous terre
    
    [Refrain]
    Tu es capable d’accomplir de grandes choses
    Tu es capable d’réaliser tes rêves
    Tu es capable d’accomplir de grandes choses
    Tu es capable d’réaliser tes rêves
    
    [Refrain]
    Tu es capable d’accomplir de grandes choses
    Tu es capable d’réaliser tes rêves
    Tu es capable d’accomplir de grandes choses
    Tu es capable d’réaliser tes rêves
    https://www.youtube.com/watch?v=8P5WCI0iQlo&ab_channel=Doigby`);
  };
});