const { EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    name: "help",
    description: "Affiche les informations sur les autres commandes.",
    type: 1,
    options: [
        {
            name: "commande",
            description: "Le nom de la commande pour obtenir des informations détaillées.",
            type: 3,
            required: false
        }
    ],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction) => {
        const commandName = interaction.options.getString("commande");
        const commandsPath = path.join(__dirname, "../../../commands"); // Chemin vers les dossiers de commandes
        const commands = getAllCommands(commandsPath);

        if (commandName) {
            const command = commands.find(cmd => cmd.name === commandName.toLowerCase());
            if (command) {
                const embed = new EmbedBuilder()
                      .setTitle(`Aide pour la commande "${command.name}"`)
                      .setDescription(command.description || "Pas de description disponible.")
                      .setColor('Blue');

                if (command.options && command.options.length > 0) {
                    embed.addField("Options", command.options.map(opt => `**${opt.name}**: ${opt.description || "Pas de description disponible."}`).join("\n"));
                }

                await interaction.reply({ embeds: [embed] });
            } else {
                await interaction.reply(`La commande "${commandName}" n'a pas été trouvée.`);
            }
        } else {
            const embed = new EmbedBuilder()
                .setTitle("Aide pour les commandes")
                .setDescription("Voici la liste des commandes disponibles :")
                .setColor('Blue');

            await interaction.reply({ embeds: [embed] });
        }
    },
};

function getAllCommands(commandsPath) {
    const commands = [];
    const commandFiles = fs.readdirSync(commandsPath, { withFileTypes: true });

    commandFiles.forEach(file => {
        if (file.isDirectory()) {
            const subCommands = getAllCommands(path.join(commandsPath, file.name));
            commands.push(...subCommands);
        } else {
            const command = require(path.join(commandsPath, file.name));
            commands.push(command);
        }
    });

    return commands;
};
