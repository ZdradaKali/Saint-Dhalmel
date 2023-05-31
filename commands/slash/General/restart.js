/*const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');
const { exec } = require('child_process');


// ID de l'utilisateur autorisé à redémarrer le bot
const authorizedUserId = '258394351628058636';

// ...

// Gestionnaire de commande
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'restart') {
        // Vérifier si l'auteur de la commande est l'utilisateur autorisé
        if (interaction.user.id === authorizedUserId) {
            // Répondre avec un message de confirmation et un bouton de confirmation
            await interaction.reply({
                content: 'Êtes-vous sûr de vouloir redémarrer le bot ?',
                components: [
                    {
                        type: 'ACTION_ROW',
                        components: [
                            {
                                type: 'BUTTON',
                                customId: 'confirmation',
                                label: 'Confirmer',
                                style: 'SUCCESS'
                            }
                        ]
                    }
                ]
            });
        } else {
            // Répondre avec un message d'erreur pour les autres utilisateurs
            await interaction.reply('Désolé, vous n\'êtes pas autorisé à effectuer cette commande.');
        }
    }
});

// Gestionnaire d'événement pour les interactions de bouton
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'confirmation') {
        // Vérifier si l'auteur de l'interaction est l'utilisateur autorisé
        if (interaction.user.id === authorizedUserId) {
            // Répondre avec le message de confirmation
            await interaction.update({
                content: 'Le bot va redémarrer...',
                components: []
            });

            // Appeler la fonction de redémarrage du bot
            await restartBot();
        } else {
            // Répondre avec un message d'erreur pour les autres utilisateurs
            await interaction.reply('Désolé, vous n\'êtes pas autorisé à effectuer cette commande.');
        }
    }
});

// Fonction de redémarrage du bot
async function restartBot() {
    console.log('Redémarrage du bot en cours...');
    try {
        // Exécutez la commande de redémarrage en utilisant PM2
        await exec('pm2 restart regalias');
        console.log('Le bot a été redémarré avec succès.');
    } catch (error) {
        console.error(`Une erreur s'est produite lors du redémarrage du bot : ${error.message}`);
    }
}*/





const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');
const { exec } = require('child_process');

// ID de l'utilisateur autorisé à redémarrer le bot
const authorizedUserId = '258394351628058636';

// Fonction de redémarrage du bot
async function restartBot() {
    console.log('Redémarrage du bot en cours...');
    try {
        // Exécutez la commande de redémarrage en utilisant PM2
        await exec('pm2 restart regalias');
        console.log('Le bot a été redémarré avec succès.');
    } catch (error) {
        console.error(`Une erreur s'est produite lors du redémarrage du bot : ${error.message}`);
    }
}

module.exports = {
    name: "restart",
    description: "Redémarre le bot",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "Administrator"
    },
    run: async (interaction) => {
        // Vérifier si l'auteur de la commande est l'utilisateur autorisé
        if (interaction.user.id === authorizedUserId) {
            // Répondre avec un message de confirmation et un bouton de confirmation
            await interaction.reply({
                content: 'Êtes-vous sûr de vouloir redémarrer le bot ?',
                components: [
                    {
                        type: 1,
                        components: [
                            {
                                type: 2,
                                custom_id: 'confirmation',
                                label: 'Confirmer',
                                style: 3
                            }
                        ]
                    }
                ]
            });
        } else {
            // Répondre avec un message d'erreur pour les autres utilisateurs
            await interaction.reply({ content: 'Désolé, vous n\'êtes pas autorisé à effectuer cette commande.', ephemeral: true });
        }
    }
}

