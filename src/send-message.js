require("dotenv").config();
const {
    Client,
    IntentsBitField,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
  } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const roles = [
  {
    id: "1181399416033247264",
    label: "Red",
  },
  {
    id: "1181399461440794727",
    label: "Blue",
  },
  {
    id: "1181399497356619826",
    label: "Green",
  },
];

client.on("ready", async (c) => {
  const channel = await client.channels.cache.get("1181069390796562526");
  if (!channel) return;

  const row = new ActionRowBuilder();
  roles.forEach((role) => {
    row.components.push(
      new ButtonBuilder()
        .setCustomId(role.id)
        .setLabel(role.label)
        .setStyle(ButtonStyle.Primary)
    );
  });

  await channel.send({
    content: "Claim or remove a role below",
    components: [row],
  });

  process.exit
});

client.login(process.env.TOKEN);
