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
    name: "GoldIsland",
    once: true,
    aliases: ["island"],
    execute(client, guild, user, channel, args) {
        let embed = new Discord.MessageEmbed()
            .setColor("AQUA")
            .setTitle(`**Ilhas de GOLD - DIARIAS**`)
            .setDescription(`
        Criador da sessão: ${user}
        Segue abaixo do discord todas as ilhas de GOLD e seus respectivos dias durante o mês de JULHO.
        
        DIA 05 - TERÇA(LUSH REED ISLAND)
        DIA 08 - SEXTA FEIRA (OPPORTUNITY)
        DIA 10 - DOMINGO(ASURA ISLAND)
        DIA 13 - QUARTA FEIRA(PHANTONWING ISLAND)
        DIA 16 - SABADO (MONTE ISLAND)
        DIA 19 - TERÇA-FEIRA (PHANTONWING ISLAND)
        DIA 22 - SEXTA-FEIRA(OBLIVION ISLAND)
        DIA 24 - DOMINGO (VOLARE ISLAND)
        DIA 27 - QUARTA FEIRA (FORPE)
        DIA 30 - SABADO (MEDEIA)


        Caso tenha alguma ilha que não foi lembrada, converse com Shadomal#0032`)
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