const Discord = require("discord.js");
//const { prefix, token } = require('./config.json');
const prefix = "+"
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();

// Requires all dependencies

fs.readdir("./Commands",(err, files)=>{
    if (err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("No commands were found...")
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./Commands${f}`)
        console.log(`${f} loaded`)
        bot.commands.set(props.help.name, props);
    })
})

bot.on("ready", async ()=> {
    console.log(`${bot.user.username} is online`) 
    bot.user.setActivity("+help",{type:"STREAMING", url:'https://twitch.com/aletriz_art'})
})

bot.on("message", async msg =>{
    if(msg.author.bot) return;


    let msgArray = msg.content.split(" ")
    let cmd = msgArray[0];
    let args = msgArray.slice(1);

  
    if(cmd[0]===prefix){
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, msg, args,cmd);
    }
})

bot.login(process.env.token);