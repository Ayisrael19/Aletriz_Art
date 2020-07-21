const discord = require("discord.js");

module.exports.run = async (bot, msg, args) =>{
    
    return msg.channel.send("Pong!");

}
module.exports.help = {
    name: "ping"
}