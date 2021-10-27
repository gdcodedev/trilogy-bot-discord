const discord = require('discord.js');
const conn = require('./conn.var.js');
const dispatcher = require('./dispatcher.var.js')

module.exports = async function mainFunction(client, msg, args) {
    if (!msg.guild) return;

    try {
        dispatcher.dis.destroy();
        dispatcher.dis = null;
    } catch {}

    if (msg.member.voice.channel) {
        try {
            conn.conn.disconnect();
            conn.conn = null;
            msg.reply("Saindo...");
        } catch {};
    } else {
        msg.reply('Você precisa estar em um canal de voz!!');
    }
};