import { twi } from "../index.js";

twi.slashcmd({
    name: "roast",
    description: "Roast someone with style",
    options: [{
        type: 6, // USER type
        name: "victim",
        description: "Who deserves this roast?",
        required: true
    }],
    run: function(interaction) {
        const victim = interaction.data.options.getUser("victim");
        const roasts = [
            `${interaction.user.username} just obliterated ${victim.username} with facts and logic!`,
            `${victim.username} got roasted so hard they turned into a well-done steak! 🥩`,
            `${interaction.user.username} just destroyed ${victim.username} like Thanos snapped his fingers!`,
            `🚨 FIRE ALERT! ${interaction.user.username} just BURNED ${victim.username}!`,
            `${victim.username} just got roasted harder than my grandma's Thanksgiving turkey!`,
            `${interaction.user.username} just ended ${victim.username}'s whole career with this one!`
        ];
        
        const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
        
        interaction.createMessage({
            embeds: [{
                title: "🔥 ROAST BATTLE 🔥",
                description: randomRoast,
                color: 0xFF4500, // Orange-red for fire
                thumbnail: {
                    url: victim.avatarURL()
                },
                footer: {
                    text: "Served fresh by the roast master"
                }
            }]
        });
    }
});