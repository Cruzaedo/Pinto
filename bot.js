const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.login(process.env.NDk1Mzk1NTYxMzcwMDI1OTk0.DpBc9A.syHE8awNW2nOqkQCQKUAapJgHFQ);
