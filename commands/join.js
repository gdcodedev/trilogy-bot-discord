const discord = require('discord.js');
const conn = require('./conn.var.js');

module.exports = async function mainFunction(client, msg, args) {
    if (!msg.guild) return;

    try {
        conn.conn.disconnect();
        conn.conn = null;
    } catch { };

    if (msg.member.voice.channel) {
        try {
            conn.conn = await msg.member.voice.channel.join();
            msg.reply("Entrando...");
        } catch {
            try {
                conn.conn.disconnect();
                msg.reply("Não consegui me conectar :(...");
            } catch { };
        };
    } else {
        msg.reply('Você precisa estar em um canal de voz!!');
    }
};