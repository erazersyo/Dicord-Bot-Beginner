const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "poll",
  description: "Create a poll",
  options: [
    {
      name: "question",
      description: "Question of the poll",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "choice-1",
      description: "Choice 1.",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "choice-2",
      description: "Choice 2.",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "choice-3",
      description: "Choice 3.",
      type: ApplicationCommandOptionType.String,
      required: false,
    },
    {
      name: "choice-4",
      description: "Choice 4.",
      type: ApplicationCommandOptionType.String,
      required: false,
    },
    {
      name: "choice-5",
      description: "Choice 5.",
      type: ApplicationCommandOptionType.String,
      required: false,
    },
  ],

  callback: (client, interaction) => {
    const question = interaction.options.getString("question");
    const choice1 = interaction.options.getString("choice-1");
    const choice2 = interaction.options.getString("choice-2");
    const choice3 = interaction.options.getString("choice-3");
    const choice4 = interaction.options.getString("choice-4");
    const choice5 = interaction.options.getString("choice-5");
    // console.log(choice1, choice2);

    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle(question)
      .setURL("https://discord.js.org/")
      .setThumbnail(
        "https://cdn.icon-icons.com/icons2/1369/PNG/512/-poll_89868.png"
      )
      .addFields(
        { name: `1️⃣  ${choice1}`, value: " " },
        { name: `2️⃣  ${choice2}`, value: " " },
      )
      .setTimestamp()
      .setFooter({
        text: "React yourself to vote la 😒",
      });
      if (choice3) {
        embed.addFields({ name: `3️⃣  ${choice3}`, value: " " });
      }
      if (choice4) {
        embed.addFields({ name: `4️⃣  ${choice4}`, value: " " });
      }
      if (choice5) {
        embed.addFields({ name: `5️⃣  ${choice5}`, value: " " });
      }
    interaction.reply({ embeds: [embed] });
  },
};
