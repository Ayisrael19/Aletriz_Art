const discord = require("discord.js");

module.exports.run = async (bot, msg, args,cmd) =>{
    
    if(!args[0]){
        return msg.channel.bulkDelete(50, true).catch(err => {
        console.error(err);
        msg.channel.send('there was an error trying to prune msgs in this channel!');
    })
    }else{
    msg.channel.bulkDelete(args[0], true).catch(err => {
        console.error(err);
        msg.channel.send('there was an error trying to prune msgs in this channel!');
    });
    }
    return 0;

}
module.exports.help = {
    name: "clear"
}