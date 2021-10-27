const conn = require('./conn.var.js');
const dispatcher = require('./dispatcher.var.js')

module.exports = async function mainFunction(client, msg, args) {
    if (!msg.guild) return;

    if (!args[1]) { msg.reply("Modo de uso: !volume <volume>"); return; };

    try {
        dispatcher.dis.setVolume(args[1]);

        msg.reply(`Volume setado para: ${args[1]}`);
    } catch {
        msg.reply("Verifique se eu estou tocando alguma coisa...");
    }
};