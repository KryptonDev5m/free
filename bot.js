// This Player Count Bot has been created by the KryptonDev Team //
const { Client } = require("discord.js")
const client = new Client
global.config = require("./config.json")
const { updatePlayerCount } = require("./utils/")
// 
client.on("ready", () => {
    console.log(`KryptonDev Player Count Bot successfully loaded as ${client.user.tag}`)
    updatePlayerCount(client, 5)
})

client.login(config.token)