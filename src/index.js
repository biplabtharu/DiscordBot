require("dotenv").config();
const express = require("express");
const {Client, GatewayIntentBits} = require("discord.js");

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent
	],
});

client.on('ready', ()=>{
  console.log(`${client.user.tag} is logged in`);
})
client.on("messageCreate", (message)=>{
  if (message.author.bot) return;

  if(message.content.startsWith("create")){
    const url = message.content.split("create")[1];
    return message.reply({
      content:"generating shortened url for " + url,
    })
  }
  message.reply({
    content: "Hello there"
  })
})
// client.on('dd', (dd)=>{
//   console.log(`${dd.content}`);
// })

client.on("interactionCreate", (interaction) => {
	// if (!interaction.isChatInputCommand()) return;
	// console.log(interaction);
  interaction.reply("Pong!!"); 
});

client.login(process.env.DISCORD_BOT_TOKEN)
