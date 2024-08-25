//Import Discord.js
import { Client, EmbedBuilder, embedLength } from "discord.js";
import "dotenv/config";

//Init Client
const client = new Client({
    intents: ["Guilds", "GuildMessages", "MessageContent"]
});

//Runs When Bot Is Logged Into
client.on("ready", function() {
    console.log(`${client.user.tag} Is Ready!`);
});

//Listen To Messages
client.on("messageCreate", function(message) {
    if(message.content.toLowerCase() === "!help") {
        const helpEmbed = new EmbedBuilder()
        .setTitle("Help Commands")
        .setDescription(`Help Commands For Poland Random!
        **!help** - A List Of Help Commands,
        **!volkswagen** - Das Auto,
        **!shit <user/item>** - Shit On Something!`)
        .setColor("Blurple");

        message.channel.send({ embeds: [helpEmbed] });
    };

    if(message.content.toLowerCase() === "!volkswagen") {
        const volkswagenEmbed = new EmbedBuilder()
        .setTitle("Volkswagen")
        .setDescription("Das Auto")
        .setImage("https://th.bing.com/th/id/OIP.WMWB7vUi_YbWU0yjVwtzFQHaEK?rs=1&pid=ImgDetMain")
        .setColor("Blurple");

        message.channel.send({ embeds: [volkswagenEmbed] });
    };

    if(message.content.toLowerCase().startsWith("!shit")) {
        const parts = message.content.split(" ");
        const user = parts[1];
        if(!user) return message.channel.send(":x: Input A User!");

        const shitEmbed = new EmbedBuilder()
        .setDescription(`<@${message.author.id}> Took A Shit On ${user}! :moai:`)
        .setColor("Blurple");

        message.channel.send({ embeds: [shitEmbed] });
        message.react("💩");
    };
});

//Login To Bot
client.login(process.env.token); 