const discord = require('discord.js');
const conn = require('./conn.var.js');
const dispatcher = require('./dispatcher.var.js')

module.exports = async function mainFunction(client, msg, args) {
    if (!msg.guild) return;

    try {
        dispatcher.dis.destroy();
        dispatcher.dis = null;

        msg.reply("Parando...");
    } catch {
        msg.reply("Verifique se eu estou tocando alguma coisa...");
    }
};