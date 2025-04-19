import { twi } from "../index.js";

twi.slashcmd({
    name: "8ball",
    description: "Ask the magic 8-ball a question",
    options: [{
        type: 3, // STRING
        name: "question",
        description: "What do you want to ask the 8-ball?",
        required: true
    }],
    run: async function(interaction) {
        const question = interaction.data.options.getString("question");

        // Acknowledge the interaction with defer() to give us more time
        await interaction.defer();

        const responses = [
            "🎱 Yes, definitely.",
            "🎱 No way.",
            "🎱 Ask again later.",
            "🎱 It is certain.",
            "🎱 Very doubtful.",
            "🎱 Absolutely.",
            "🎱 Don't count on it.",
            "🎱 My reply is no.",
            "🎱 Without a doubt.",
            "🎱 The answer is unclear. Try again."
        ];

        const random = responses[Math.floor(Math.random() * responses.length)];

        // After deferring, you can now send the final message
        interaction.createMessage({
            embeds: [{
                title: "🎱 Magic 8-Ball",
                description: `**Question:** ${question}\n**Answer:** ${random}`,
                color: 0x8e44ad
            }]
        });
    }
});
