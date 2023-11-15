const {Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions} = require('discord.js');
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});
const config = require('../config.json');

client.on("ready", () => {
    console.log("Bot is ready!");
    client.user.setActivity('Currently Cooked Up');
})

client.login(config.token);
