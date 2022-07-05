const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");
const { execute } = require("./CommandAvatar");

/**
     * @param {Discord.Client} client Client para manipulação de Shard's e gerenciamento de bot
     * @param {Discord.Guild} guild Servidor onde o comando foi executado
     * @param {Discord.User} user Usuário que executou o comando
     * @param {Discord.TextChannel} channel Canal onde o comando foi executado
     * @param {Array<String>} args Conteúdo que foi passado ao executar o comando
     * @returns {void}
     */

module.exports = {
    name: "Links",
    once: true,
    aliases: ["l"],
    execute(client, guild, user, channel, args) {
        let embed = new Discord.MessageEmbed()
        .setColor("AQUA")
        .setTitle(`**Linkes para ajuda no dia a dia em LOST ARK**`)
        .setDescription(`
        Criador da sessão: ${user}
        Segue em anexo abaixo todos os links de utilidade para ajudar durante a sua jornado do lost ark.

            Engravings:      https://docs.google.com/spreadsheets/d/1aQovVwwVJ4p5Lb_9hc_3ozVpzqYoEvZyEISiGqvQfE4/edit#gid=683174901
            
            Docs Para 5 engravings
            https://docs.google.com/spreadsheets/d/1u0uZP3Ozx5w9vXNsHlK08RVoBM79exGSukP7CVP4xUw/edit#gid=245495538
            
            Guias em Geral:  https://papunika.com/
            Codex:           https://lostarkcodex.com/us/quests/
            Mapa Interativo: https://lostarkmap.com/
            MarketPlace:     https://www.lostarkmarket.online/south-america/market/enhancement-material
            Mercantes:       https://lostmerchants.com/
            BuildsKR:        https://loawa.com/rank
            

        Quais quer outros links entre em contato com Shadomal#0032 para acrescenter novos links.`)
        .setThumbnail(user.displayAvatarURL({
            dynamic: true,
            size: 2048
        }))
        .setFooter({
            text: 'ID do usuário: ' + user.id
        })
        .addField("Colaborador", "Vitor Batista")
        .setTimestamp();
    channel.send({ embeds: [embed] })

    }
}