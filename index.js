const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();

// Requires all dependencies

fs.readdir("./commands/",(err, files)=>{
    if (err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("No commands were found...")
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`)
        console.log(`${f} loaded`)
        bot.commands.set(props.help.name, props);
    })
})

bot.on("ready", async ()=> {
    console.log(`${bot.user.username} is online`) 
    bot.user.setActivity("for +help",{type:"WATCHING"})
})

bot.on("message", async msg =>{
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;

    let prefix = config.prefix;
    let msgArray = msg.content.split(" ")
    let cmd = msgArray[0];
    let args = msgArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, msg, args);

})

bot.login(config.token);