require("dotenv").config();
const {
  Client,
  IntentsBitField,
  EmbedBuilder,
  ActivityType,
} = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

let status = [
  {
    name: 'everyday',
    type: ActivityType.Playing,
    url: 'https://sdk.hoyoverse.com/payment/genshin/index.html#/'
  },
  {
    name: 'everyday',
    type: ActivityType.Watching,
    url: 'https://www.youtube.com/watch?v=ehWD7uWhV2g'
  },
  {
    name: 'everyday',
    type: ActivityType.Listening,
    url: 'https://music.youtube.com/watch?v=p_6nLJ6z-qE'
  },
  {
    name: 'everyday',
    type: ActivityType.Streaming,
    url: 'https://music.youtube.com/watch?v=p_6nLJ6z-qE'
  }
]

client.on("ready", async (c) => {
  console.log(`✅ ${c.user.tag} is online`);

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length)
    client.user.setActivity(status[random])
  }, 5000)
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "hey") {
    interaction.reply("hey hey hey hey wat");
  }
  if (interaction.commandName === "ping") {
    interaction.reply("pongpiangping");
  }
  if (interaction.commandName === "add") {
    const num1 = interaction.options.get("first-number").value;
    const num2 = interaction.options.get("second-number").value;

    interaction.reply(`The sum is ${num1 + num2}`);
  }
  if (interaction.commandName === "embed") {
    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("Some title")
      .setURL("https://discord.js.org/")
      .setAuthor({
        name: "Some name",
        iconURL: "https://i.imgur.com/AfFp7pu.png",
        url: "https://discord.js.org",
      })
      .setDescription("Some description here")
      .setThumbnail("https://i.imgur.com/AfFp7pu.png")
      .addFields(
        { name: "Regular field title", value: "Some value here" },
        { name: "\u200B", value: "\u200B" },
        { name: "Inline field title", value: "Some value here", inline: true },
        { name: "Inline field title", value: "Some value here", inline: true }
      )
      .addFields({
        name: "Inline field title",
        value: "Some value here",
        inline: true,
      })
      .setImage("https://i.imgur.com/AfFp7pu.png")
      .setTimestamp()
      .setFooter({
        text: "Some footer text here",
        iconURL: "https://i.imgur.com/AfFp7pu.png",
      });
    interaction.reply({ embeds: [embed] });
  }
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content === "hi") {
    message.channel.send(`hii ${message.author.globalName}`);
  }
  if (message.author.username === "eraserrr") {
    const responses = [
      "hii ni hao",
      "today is a good day",
      "i am very tired",
      "i wanna sleep",
    ];
    const randomIndex = Math.floor(Math.random() * responses.length);
    const randomResponse = responses[randomIndex];
    message.channel.send(randomResponse);
  }
  if (message.author.username === "luilui") {
    const responses = [
      "hi luiluiluilui",
      "why r u playing mihoyo game?",
      "furina c4 fail?",
      "yuan shen qiiiiidongggggggggg",
    ];
    const randomIndex = Math.floor(Math.random() * responses.length);
    const randomResponse = responses[randomIndex];
    message.channel.send(randomResponse);
  }
  if (message.author.username === "bear1015") {
    const responses = [
      "hi bear",
      "star rail fun mou?",
      "congraz to have strongest Welt in our server",
      "where is ur clara?",
    ];
    const randomIndex = Math.floor(Math.random() * responses.length);
    const randomResponse = responses[randomIndex];
    message.channel.send(randomResponse);
  }
  if (message.author.username === "zxkoh0313") {
    const responses = ["cbzx", "cbzx!", "cbzx?", "cbzx :)", "CBZX"];
    const randomIndex = Math.floor(Math.random() * responses.length);
    const randomResponse = responses[randomIndex];
    message.channel.send(randomResponse);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isButton()) return;
    await interaction.deferReply(); // give the msg that the bot is thinking

    const role = interaction.guild.roles.cache.get(interaction.customId);
    if (!role) {
      interaction.editReply({
        content: "I couldn't find that role",
      });
      return;
    }

    const hasRole = interaction.member.roles.cache.has(role.id);

    if (hasRole) {
      await interaction.member.roles.remove(role);
      await interaction.editReply(`The role ${role} has been removed.`);
      return;
    }

    await interaction.member.roles.add(role);
    await interaction.editReply(`The role ${role} has been added.`);
  } catch (error) {
    console.log(error);
  }
});

client.login(process.env.TOKEN);
