const discord = require('discord.js');
const conn = require('./conn.var.js');
const ytdl = require('ytdl-core');
const dispatcher = require('./dispatcher.var.js');

module.exports = async function mainFunction(client, msg, args) {
    let channel = msg.channel;

    if (!args[1]) { msg.reply("Modo de uso: !play <link>"); return; };

    try {
        dispatcher.dis = conn.conn.play(ytdl(args[1], { filter: "audioonly" }), { volume: 0.5 });
        msg.reply("Tocando...");

        dispatcher.dis.on("finish", () => {
            channel.send("A música acabou.");
        });
    } catch (err) {
        msg.reply("Não consegui tocar a música, verifique se eu estou num canal de voz.");
        console.log(err);
    };
};