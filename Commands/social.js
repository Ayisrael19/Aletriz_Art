const discord = require("discord.js");
const embed = new discord.MessageEmbed();

module.exports.run = async (bot, msg, args,cmd) =>{
    
    const exampleEmbed = { 
    title: "Spoon🥄:Aletriz_art(banned🤣🤣🤣)",
    Twitch:{title: "Twitch",
            url: "https://www.twitch.tv/aletriz_art",
    },
    Twitter:{title: "Twitter🐦",
            url: "https://twitter.com/aletriza",
    },
    Instagram:{title: "Instagram📸",
               url: "https://www.instagram.com/aletriz_alex",
    }
    

};
    msg.channel.send({ embed: exampleEmbed})
    msg.channel.send({ embed: exampleEmbed.Twitch})
    msg.channel.send({ embed: exampleEmbed.Twitter})
    msg.channel.send({ embed: exampleEmbed.Instagram})
    return 0;
    
    
    //return msg.channel.send("```Twitch:aletriz_art \nTwitter:Aletriz_art\nSpoon:Aletriz_art\nInsta:aletriz_alex```");

}

module.exports.help = {
    name: "social"
}