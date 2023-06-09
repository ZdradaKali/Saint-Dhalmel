const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Répond avec le ping!",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription(client.ws.ping + "ms!")
                    .setColor('Blue')
            ],
            ephemeral: true
        })
    },
};
