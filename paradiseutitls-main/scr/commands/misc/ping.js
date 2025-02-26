const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Replies with Pong! and the bot\'s latency.',
    // devOnly: Boolean,
    testOnly: false,
    // options: Object[],
    // deleted: Boolean,

    callback: (client, interaction) => {
        const latency = Date.now() - interaction.createdTimestamp;
        const apiLatency = Math.round(interaction.client.ws.ping);

        const embed = new EmbedBuilder()
            .setColor('#5F9CA2')
            .setTitle('Ping, Pong!')
            .addFields(
                { name: 'Latency', value: `${latency}ms`, inline: true },
                { name: 'API Latency', value: `${apiLatency}ms`, inline: true }
            );

        interaction.reply({ embeds: [embed] });
    },
};