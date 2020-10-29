const discord = require("discord.js");

module.exports.run = async (bot,msg,args) =>{
    
    return msg.channel.send("Commands:\n```+ping: Pings the bot\n+social: list all of aletriz social medias\n+clear [number]: will del msgs if u do not specify how many will del 50 by default```");

}
module.exports.help = {
    name: "help"
}