module.exports = {
  name: 'ping',
  description: 'PongPiangPing!',
  // devOnly: Boolean,
  testOnly: true,
  // options: Object[],
  // deleted: Boolean,

  callback: (client, interaction) => {
    interaction.reply(`go die! ${client.ws.ping}ms`);
  },
};
