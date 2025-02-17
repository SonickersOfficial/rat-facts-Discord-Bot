const Discord = require("discord.js");

// Load all rat facts
const ratLore = require("../../data/loreScript");

// NOTE this command is very server specific, and will only function correctly on the server it was initially designed for without changes to the emoji in the loreScript.json file
module.exports = {
    name: "lore",
    commandUsage: "!rat lore",
    description: "Tells the story of the rat facts bot",
    execute(msg, args) {
        const loreEmbed = new Discord.MessageEmbed()
            .setColor("#66757f")
            .setTitle("The lore of rat facts");

        for (chapter in ratLore) {
            loreEmbed.addFields({ name: chapter, value: ratLore[chapter] });
        }

        msg.channel.send(loreEmbed); // There is only a single entry, so it can go under index 0
    },
};
