const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg =require('./index.json'); // a garder en version desktop
const token = process.env.token // a garder en version heroku
const prefix = ("=");

bot.on('ready', function () {
    console.log("Je reprend les bonnes choses!")
    bot.user.setActivity('Je m\'occupe').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue dans la Wayn' + member.displayName +'!')
        console.log(`${member.displayName} viens de rejoindre le serveur!.`)
    }).catch(console.error)
});

const ban = require('./kick et ban/ban');


bot.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
});


bot.on('message', msg => {
    if (msg.content === prefix + "skin"){
        msg.channel.send("http://image.noelshack.com/fichiers/2018/49/6/1544275036-skin5.png")
        console.log("Une personne de curieuse")
    }

});

bot.login(cfg.token); //a garder en version desktop
bot.login(token); //a garder en version heroku
