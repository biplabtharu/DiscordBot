import dotenv from "dotenv";
dotenv.config();
import { Client, GatewayIntentBits } from "discord.js";
// import {
//   generateNewShortURL,
//   redirectToUserUrl,
//   getUrlHistory,
// } from "./controllers/urlController.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

import express from "express";

const router = express.Router();

let userUrl = "";
// let some = generateNewShortURL();
client.on("ready", () => {
  console.log(`${client.user.tag} is logged in`);
});
client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  message.reply({
    content: "Hello there",
  });

  // if (message.content.startsWith("create")) {
  //   userUrl = message.content.split("create")[1].trim();

  //   router.post("/url", generateNewShortURL, {
  //     body: { link: userUrl },
  //   });

  //   router.get("/url/:shortId", redirectToUserUrl);

  //   router.get("/url/analytics/:shortID", getUrlHistory);
  //   return message.reply({
  //     content: some,
  //   });
  // }
});
// client.on('dd', (dd)=>{
//   console.log(`${dd.content}`);
// })

client.on("interactionCreate", (interaction) => {
  // if (!interaction.isChatInputCommand()) return;
  // console.log(interaction);
  interaction.reply("Pong!!");
});

client.login(process.env.DISCORD_BOT_TOKEN);

export { userUrl, router };
