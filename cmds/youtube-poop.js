import { twi } from "../index.js";

twi.slashcmd({
    name: "youtube-poop",
    description: "where the smoke, they pinch back",
    run: function(interaction) {
        interaction.createMessage({
            embeds: [{
                title: "youtube poop",
                description: "where the smoke, they pinch back",
                color: 0x7d8ec7
            }]
        });
    }
});

twi.analogcmd({
    name: "!youtubepoop",
    run: function(message) {
        twi.message(message.channel.id, { embeds: [{
            title: "youtube poop",
            description: "where the smoke, they pinch back",
            color: 0x7d8ec7
        }] });
    }
});