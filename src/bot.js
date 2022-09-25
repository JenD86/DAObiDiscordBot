require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]});

const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE);

const { createTransaction } = require('./service/airtable-service')


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`); 
});

client.on('messageCreate', async (msg) => {
    if (owner(msg) || admin(msg)){
    	if(msg.content.startsWith("!vote")){

            const nomineeID = msg.content.split(" ")[1]
            const voter = msg.author
            const nominee = msg.mentions.users.get(nomineeID.split("!")[1].split(">")[0])

            message = await msg.channel.send(`<@${voter.id}> voted for ${nomineeID}`)
            createTransaction(base, voter, nominee)
            return
        }
    }
)

client.login(process.env.DISCORD_BOT_TOKEN);
