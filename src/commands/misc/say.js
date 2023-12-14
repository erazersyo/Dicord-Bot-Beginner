const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "say",
  description: "what you wanna say",
  options: [
    {
      name: "question",
      description: "tell me wat u wan to say",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],

  callback: (client, interaction) => {
    const question = interaction.options.getString("question");

    interaction.channel.send(question);
    return
  },
};