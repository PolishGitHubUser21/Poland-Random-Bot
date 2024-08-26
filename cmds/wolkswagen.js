import { twi } from "../index.js";

twi.slashcmd({
    name: "wolkswagen",
    description: "TOP SECRET !!!",
    run: function(interaction) {
        interaction.createMessage({
            embeds: [{
                title: "Wolkswagen",
                description: "Das auto",
                image: { url: "https://th.bing.com/th/id/OIP.RCptvqoSEqdgcVoyttFXkQHaEK?rs=1&pid=ImgDetMain" },
                color: 0x7d8ec7
            }]
        });
    }
});

twi.analogcmd({
    name: "!wolkswagen",
    run: function(message) {
        twi.message(message.channel.id, { embeds: [{
            title: "Wolkswagen",
            description: "Das auto",
            image: {url: "https://th.bing.com/th/id/OIP.RCptvqoSEqdgcVoyttFXkQHaEK?rs=1&pid=ImgDetMain"},
            color: 0x7d8ec7
        }] });
    }
});