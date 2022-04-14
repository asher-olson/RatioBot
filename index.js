const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });


client.once('ready', () => {
    console.log("go big mode!");
});

client.on('messageCreate', async (msg) => {
    const content = msg.content;

    const sender = msg.author;

    if(sender.id === "963872928015986748"){
        //react with a bunch of emojis
        const emojis = msg.guild.emojis.emojis;
        if(emojis != undefined){
            emojis.foreach(emoji => {
                msg.react(emoji);
            });
        }

        msg.react("🔥");
        
        return;
    }

    const regex = /^ratio/;
    if(!content.match(regex)){
        return;
    }

    const mentions = msg.mentions.users;
    console.log(`length: ${mentions.size}`);
    console.log(mentions);

    var ratioees = "";
    mentions.forEach(user => {
        ratioees = ratioees + "<@" + user.id + "> ";
    });

    const obj = {
        "content": `${ratioees} shut the fuck up + ratio`,
    }

    // Don't care + didn't ask + L + Ratio + beta + cringe + virgin + Karen + you are not just a clown, you are the entire circus + the cognitive dissonance is real with this one + those tears taste delicious + Lisa Simpson meme template saying that your opinion is wrong + average your opinion fan vs average my opinion enjoyer + cry more + how's your wife's boyfriend doing + Cheetos breath + Intelligence 0 + r/downvotedtooblivion + blocked and reported + what zero pussy does to a mf + holy shit go touch some grass + cry about it + maidenless + bozo + go outside + probably a ginger

    msg.channel.send(obj);
 });

const botLogin = process.env.RatioBotLogin;
client.login(botLogin);

