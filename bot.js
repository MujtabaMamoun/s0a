const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("524217301378007044")
setInterval(function() {
channel.send(`**xRq l3eb**`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
