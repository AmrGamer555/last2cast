const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = ".";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Al-Fr3on`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Al-Fr3on ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Al-Fra3na Community`,"https://discord.gg/5UdTPcw")
client.user.setStatus("dnd")
});



client.login("NTc4Nzc0NjI5MjI5OTIwMjY3.XRduLg.PenhXnE_3igt0ojNpZaWeo0Le-E");