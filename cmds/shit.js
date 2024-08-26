import { twi } from "../index.js";

twi.slashcmd({
    name: "shit",
    description: "shit on someone",
    options: [{
        type: 6,
        name: "user",
        description: "pick a user",
        required: true
    }],
    run: function(interaction) {
        const user = interaction.data.options.getUser("user");

        interaction.createMessage({
            embeds: [{
                description: `<@${interaction.user.id}> shat on <@${user.id}>`,
                color: 0x7d8ec7
            }]
        });
    }
});