require("dotenv").config();
const {Client, Intents, Collection} = require("discord.js");
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ] 
    });

const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const { Events } = require("discord.js/src/util/Constants.js");

const BOT_PREFIX = process.env.BOT_PREFIX;
const caseSensitive = true;


client.on("ready", () => {

    registerCommands();
});
client.on("messageCreate", message => {
    const guild = message.guild;

    if (!guild || !guild.available) {
        return;
    }

    handleCommand(client, guild, message);
});

const commands = new Map();

const preCommands = [
    require("./Commands/CommandAvatar.js"),
    require("./Commands/CommandIslands.js"),
    require("./Commands/CommandLinks.js")
];
function registerCommands() {
    if (Array.isArray(preCommands)) {
        for (let i = 0; i < preCommands.length; i++) {
            const command = preCommands[i];

            if (command.name == null || typeof (command.name) != "string") {
                continue;
            }
            if (command.execute == null || typeof (command.execute) != "function") {
                console.log("[Command] The '" + command.name + "' hasn't execute function!");
            }
            commands.set(command.name.toLowerCase(), command);

            if (command.aliases != null && Array.isArray(command.aliases) && command.aliases.length > 0) {
                for (let j = 0; j < command.aliases.length; j++) {
                    const alias = command.aliases[j];
                    if (alias != null && alias.length > 0) {
                        commands.set(alias.toLowerCase(), command);
                    }
                }
            }
            console.log("[Command] Command '" + command.name + "' was registered!");
        }
    }
}

function handleCommand(client, guild, message) {
    const isCommand = caseSensitive ? message.content.startsWith(BOT_PREFIX) : message.content.toLowerCase().statsWith(BOT_PREFIX);

    if (isCommand) {

        const content = message.content.slice(BOT_PREFIX.length);
        const split = content.split(" ");
        const commandName = split[0].toLowerCase();

        const args = split.slice(1);

        if (commands.has(commandName)) {
            const command = commands.get(commandName);

            try {
                command.execute(client, guild, message.author, message.channel, args);
            } catch (exc) {
                console.log("[Command] Failed to execute command '" + command.name + "', because: " + exc);
            }
        }
    }
    
} 

client.login(process.env.TOKEN);