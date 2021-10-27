const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on("messageCreate", msg => {
  if (msg.author.bot === true) {return}
  else if(!msg.content.startsWith(config.prefix)) {return};

  try {
    let args = msg.content.split("  ");
    let command = msg.content.includes("  ") ? msg.content.split("  ")[0] : msg.content;
    command = command.substring(config.prefix.lenght, command.length);

    let commandFunction = require(`./commands/${command}.js`);
    commandFunction(client, msg, args);
  } catch(err){
    msg.reply("Comando não encontrado, cerfique se o comando existe com um " + config.prefix + "help.");
    console.log(err);
  }

});

client.login("OTAyNjkyNzU4NDQ2MjkzMDYy.YXiIJA.3TP7pytfqITbvM-2NRke9lq_iug");