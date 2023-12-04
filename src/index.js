require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online`);
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "hey") {
    interaction.reply("hey!!");
  }
  if (interaction.commandName === "ping") {
    interaction.reply("pong!!");
  }
  if (interaction.commandName === "add") {
    const num1 = interaction.options.get("first-number").value;
    const num2 = interaction.options.get("second-number").value;

    interaction.reply(`The sum is ${num1 + num2}`);
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
      "hi luilui",
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
    const responses = [
      "cbzx",
    ];
    const randomIndex = Math.floor(Math.random() * responses.length);
    const randomResponse = responses[randomIndex];
    message.channel.send(randomResponse);
  }
});

client.login(process.env.TOKEN);
