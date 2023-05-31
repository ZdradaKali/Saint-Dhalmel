const { SlashCommandBuilder } = require('@discordjs/builders');
const os = require('os');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "resources",
    description: "Affiche les ressources systèmes utilisées par le bot",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (interaction) => {
    // Obtenir les informations sur le CPU
    const cpuInfo = os.cpus();
    const cpuModel = cpuInfo[0].model;
    const cpuSpeed = cpuInfo[0].speed;

    // Obtenir les informations sur la mémoire
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = totalMemory - freeMemory;

    // Formater les informations en chaîne de caractères
    const cpuInfoString = `Modèle de CPU: ${cpuModel}\nVitesse de CPU: ${cpuSpeed} MHz`;
    const memoryInfoString = `Mémoire totale: ${formatBytes(totalMemory)}\nMémoire utilisée: ${formatBytes(usedMemory)}\nMémoire libre: ${formatBytes(freeMemory)}`;

    // Créer un embed pour afficher les informations
    const embed = new EmbedBuilder()
      .setTitle('Informations sur les ressources systèmes du bot')
      .addField('CPU', cpuInfoString)
      .addField('Mémoire', memoryInfoString)
      .setColor('#00ff00');

    // Répondre à l'interaction avec l'embed
    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};

// Fonction utilitaire pour formater les octets en unités plus lisibles
function formatBytes(bytes) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let i = 0;
  while (bytes >= 1024 && i < units.length - 1) {
    bytes /= 1024;
    i++;
  }
  return `${Math.round(bytes)} ${units[i]}`;
}