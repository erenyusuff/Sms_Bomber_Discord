const colors = require('colors');
const title = require('./modules/title.js');
const { Client, Collection, Discord, ActivityType, Guild } = require('discord.js');
const client = new Client({ intents: ['Guilds', 'GuildMessages'] });
title('Hosgeldiniz');

require("./loader.js")(client);

client.on('ready', () => {
    console.log(`${client.user.tag} Olarak Giris Yaptiniz!`.green);
    client.user.setPresence({ activities: [{ name: 'Fast Bomber', type: 0 }], status: 'idle' });
});
const TOKEN = process.env.TOKEN;

client.login(TOKEN).catch(() => console.log('Tokeni Kontrol Ediniz'.red));
