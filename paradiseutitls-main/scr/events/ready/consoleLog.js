const { EmbedBuilder, Collection } = require('discord.js');

module.exports = (client) => {

  client.commands = new Collection();

    console.log(`${client.user.tag} is online.`);
    
      client.on('guildMemberAdd', (member) => {
        const channel = client.channels.cache.get('1339993190643666964');
        if (channel) {
          channel.send(`<@${member.id}>`).then((message) => {
            setTimeout(() => {
              message.delete().catch(console.error);
            }, 5000);
          });
          const embed = new EmbedBuilder()
            .setTitle('Welcome!')
            .setDescription(
              `Welcome to Promotion Paradise, <@${member.id}>!
              Our Mission is to help you grow your server and social media platforms.
              To get started, read the information <#1257304462058590282>`,
            )
            .setColor('#5F9CA2');
    
          channel.send({ embeds: [embed] });
        } else {
          console.log('Channel not found');
        }
      });
  };