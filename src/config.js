module.exports = {
    app : {
        // Discord Bot Token from https://discord.com/developers/
        token: 'MTE5MDU4OTg0MjYzMTk2Njc4MA.GaasL4.2j-i7WvtCPvA7SgD6GLpA7AmUdOA1eXDHXYyP4',
        // Discord Bot Status
        playing: 'Your Giveaways',
        // Database URL from https://mongodb.com/
        mongodb: 'mongodb+srv://the:I am making@cluster0.amp1lmz.mongodb.net/?retryWrites=true&w=majority',
        // If you only want to have slash commands for one guild, leave false.
        globalCommands: true,
        // If you chose false above, put the guild id where you want to have slash commands.
        slashGuild: 'XXX'
    },

    giveawayManager : {
        //Private Message Information.
        //If you set false, the bot will not send private message information to members who join the giveaway, for example.
        privateMessageInformation: true,
        // Role ID which will be able to create giveaways
        giveawaysManagerRole: 'XXX',
        // When a giveaway is created the bot pings everyone (true or false)
        everyoneMention: false,
        // You can choose a custom reaction
        reaction: '🎉'
    },

    // You can leave it as it is here by default.
    // Don't change things in {} brackets like {winners}, ...
    messages: {
        giveaway: '🎉 **Giveaway**',
        giveawayEnded: '🎉 **Giveaway Ended**',
        title: 'Prize: {this.prize}',
        drawing: 'The giveaway ends in: {timestamp}',
        dropMessage: 'Be the first, and react to 🎉!',
        inviteToParticipate: 'React with 🎉 to enter the giveaway!',
        winMessage: 'Congratulations, {winners}! You won **{this.prize}**!',
        embedFooter: '{this.winnerCount} winner(s)',
        noWinner: 'Giveaway cancelled, no valid participations.',
        hostedBy: 'Hosted by: {this.hostedBy}',
        winners: 'Winner(s):',
        endedAt: 'Ended at',
        paused: '⚠️ **This giveaway is paused!**',
        infiniteDurationText: '`NEVER`',
        congrat: 'New winner(s): {winners}! Congratulations, your prize is **{this.prize}**!',
        error: 'Reroll cancelled, no valid participations.'
    }
}