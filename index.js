//made by Sankeerthikan Nimalathas
const express = require("express");
const app = express()

app.listen(3000, () => {
  console.log("bot is running!")
}) 

const Discord = require("discord.js")

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS","MESSAGE_CONTENT","GUILD_MEMBERS","GUILD_PRESENCES"], partials: ['MESSAGE','CHANNEL']  });



client.on("messageCreate", message => {
  
if (message.content === '!help') {
  const helpEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('BOT COMMANDS')
    .setThumbnail('https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png')
    .addField('search + query: find a random image off google images')
    .addField('google + query: find a random image off google images')
    .addField('sauce + image url: using saucenao finds the source of the image')
    .addField('image + query: find a random image off pexels')
    .addField('r/ + query: find a random image off the specified reddit')
        
    

  message.channel.send({ embeds: [helpEmbed] });
}
});


// ________________banned text/images/gifs___________________________
const links = [
  'https://tenor.com/view/rinnbebe-harrys-toes-cat-toes-toe-beans-good-morning-gif-26355867',//put the urls of the banned gifs here
  'https://tenor.com/view/morning-shenanigans-cat-toes-rinnbebe-harrys-toes-gif-26355910'
];
const targetUserIds = ['123456789012345678','123456789012345678']; // you can put as many user id here
client.on('message', message => {
  if (targetUserIds.includes(message.author.id) && links.includes(message.content)) {
    message.channel.messages.fetch({ limit: 1 }).then(messages => {
      message.channel.bulkDelete(messages);
    });
  }
});

//___________________________random quote_______________________________________
client.on('message', async (message) => {
  // Check if the message was sent in the specified channel and contains the word "quote"
  if ( message.content.toLowerCase().includes('quote')) {
    // Use dynamic import to import the node-fetch module
    const fetch = await import('node-fetch');

    // Fetch a random quote from the API
    const response = await fetch.default('https://type.fit/api/quotes');
    const data = await response.json();
    const randomQuote = data[Math.floor(Math.random() * data.length)];

    // Send the quote as a message to the specified channel
    message.channel.send(`\n\n"${randomQuote.text}"\n\n`);
  }
});

//____________________________random joke_______________________________________
client.on('message', async (message) => {
  // Check if the message was sent in the specified channel and contains the word "joke"
  if (message.content.toLowerCase().includes('joke')) {
    // Use dynamic import to import the node-fetch module
    const fetch = await import('node-fetch');

    // Fetch a random joke from the API
    const response = await fetch.default('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();

    // Send the joke as a message to the specified channel
    message.channel.send(`\n\n${data.setup}\n\n${data.punchline}`);
  }
});

//__________________________random cat gif____________________________________________
client.on('message', async (message) => {
  // Check if the message contains the word "cat"
  if (message.content.toLowerCase().includes('cat') && message.author.id !== client.user.id) {
    try {
      // Use dynamic import to import the node-fetch module
      const fetch = await import('node-fetch');

      // Fetch a random cat GIF from the API
      const response = await fetch.default('https://api.thecatapi.com/v1/images/search?mime_types=gif');
      const data = await response.json();
      const gifUrl = data[0].url;

      // Send the cat GIF URL as a message to the channel where the message was sent
      message.channel.send(`${gifUrl}`);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
});

//___________________________________________random dog gif_____________________________________________
client.on('message', async (message) => {
  // Check if the message contains the word "dog"
  if (message.content.toLowerCase().includes('dog') && message.author.id !== client.user.id) {
    try {
      // Use dynamic import to import the node-fetch module
      const fetch = await import('node-fetch');

      // Fetch a random dog GIF from the API
      const response = await fetch.default('https://api.thedogapi.com/v1/images/search?mime_types=gif');
      const data = await response.json();
      const gifUrl = data[0].url;

      // Send the dog GIF URL as a message to the channel where the message was sent
      message.channel.send(`${gifUrl}`);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
});

//___________________________________________google image search____________________________________
const googleSearchEngineId = 'put your search engine id here';
const googleApiKeys = ['put your api key','put another key if you wish, each key has a limit of 100 searches'];
let currentApiKeyIndex = 0;

client.on('message', async (message) => {
  // Check if the message starts with "search "
  if (message.content.startsWith('search ')) {
    try {
      // Use dynamic import to import the node-fetch module
      const fetch = await import('node-fetch');

      // Extract the search query from the message
      const searchQuery = message.content.slice(7);

      // Get the current Google API key and increment the index
      const googleApiKey = googleApiKeys[currentApiKeyIndex];
      currentApiKeyIndex = (currentApiKeyIndex + 1) % googleApiKeys.length;

      // Perform an image search using the Google Custom Search API
      const response = await fetch.default(`https://www.googleapis.com/customsearch/v1?key=${googleApiKey}&cx=${googleSearchEngineId}&q=${encodeURIComponent(searchQuery)}&searchType=image`);
      const data = await response.json();

      // Pick a random image from the results
      const randomIndex = Math.floor(Math.random() * data.items.length);
      const imageUrl = data.items[randomIndex].link;

      // Send the image URL as a message to the channel where the message was sent
      message.channel.send(`${imageUrl}`);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
});



client.on('message', async (message) => {
  // Check if the message starts with "google "
  if (message.content.startsWith('google ')) {
    try {
      // Use dynamic import to import the node-fetch module
      const fetch = await import('node-fetch');

      // Extract the search query from the message
      const searchQuery = message.content.slice(7);

      // Get the current Google API key and increment the index
      const googleApiKey = googleApiKeys[currentApiKeyIndex];
      currentApiKeyIndex = (currentApiKeyIndex + 1) % googleApiKeys.length;

      // Perform an image search using the Google Custom Search API
      const response = await fetch.default(`https://www.googleapis.com/customsearch/v1?key=${googleApiKey}&cx=${googleSearchEngineId}&q=${encodeURIComponent(searchQuery)}&searchType=image`);
      const data = await response.json();

      // Get the first image from the results
      const imageUrl = data.items[0].link;

      // Send the image URL as a message to the channel where the message was sent
      message.channel.send(`${imageUrl}`);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
});


const SAUCENAO_API_KEY = 'put your saucenao api key here';
client.on('message', async message => {
    if (message.content.startsWith('sauce')) {
        const args = message.content.split(' ');
        const url = args[1];
        if (!url) {
            message.channel.send('Please provide a URL!');
            return;
        }
        const { default: fetch } = await import('node-fetch');
        const response = await fetch(`https://saucenao.com/search.php?output_type=2&api_key=${SAUCENAO_API_KEY}&url=${url}`);
        const data = await response.json();
        let results = data.results.filter(result => result.header.similarity > 50).slice(0, 3);
        let reply = 'Top results:\n';
        if (results.length === 0) {
            reply += 'No results with over 50% similarity. Results  have no relation to initial image.';
        } else {
            for (const result of results) {
                reply += `${result.header.similarity}%`;
                for (const [key, value] of Object.entries(result.data)) {
                    if (typeof value === 'string') {
                        reply += ` - ${key}: ${value}`;
                    }
                }
                if (result.data && result.data.ext_urls) {
                    reply += ` - URL: ${result.data.ext_urls[0]}`;
                } else {
                    reply += ' - No external URLs found.';
                }
                reply += '\n';
            }
        }
        message.channel.send(reply);
    }
});


//pexel saerch
client.on('message', async (message) => {
  // Check if the message starts with "#"
  if (message.content.startsWith('image')) {
    try {
      // Use dynamic import to import the node-fetch module
      const fetch = await import('node-fetch');

      // Extract the search query from the message
      const searchQuery = message.content.slice(1);

      // Set your Pexels API key
      const pexelsApiKey = 'put your pexels api key here';

      // Fetch an image from Pexels using the search query
      const response = await fetch.default(`https://api.pexels.com/v1/search?query=${encodeURIComponent(searchQuery)}`, {
        headers: {
          'Authorization': pexelsApiKey
        }
      });
      const data = await response.json();

      // Pick a random image from the results
      const randomIndex = Math.floor(Math.random() * data.photos.length);
      const imageUrl = data.photos[randomIndex].src.original;

      // Send the image URL as a message to the channel where the message was sent
      message.channel.send(`${imageUrl}`);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
});

const REDDIT_URL = 'https://www.reddit.com/r/%s/hot/.json?sort=hot&t=day&limit=20';
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//search reddit top posts of the day
client.on('message', async msg => {
  if (msg.author.bot) return;

  if (msg.content.startsWith('r/')) {
    const subreddit = msg.content.substring(2);
    const imageUrl = await getRandomImageFromSubreddit(subreddit);

    if (imageUrl) {
      msg.channel.send(imageUrl);
    } else {
      msg.channel.send("Sorry, I couldn't find any images from that subreddit.");
    }
  }
});
async function getRandomImageFromSubreddit(subreddit) {
  const fetch = await import('node-fetch');
  const response = await fetch.default(REDDIT_URL.replace('%s', subreddit));
  const json = await response.json();
  const posts = json.data.children;

  if (posts.length === 0) return null;

  const index = Math.floor(Math.random() * posts.length);
  const post = posts[index].data;

  return post.url;
}



const CHANNEL_ID = 'provide channel id here';
const announcedGames = new Set();
const gameStartTimes = new Map();
const GAMES = ['crac'];//pelase put the names of specified games here

client.on('presenceUpdate', (oldPresence, newPresence) => {
  const member = newPresence.member;
  const oldGame = oldPresence && oldPresence.activities.find(activity => activity.type === 'PLAYING');
  const newGame = newPresence.activities.find(activity => activity.type === 'PLAYING');

  if (newGame && GAMES.includes(newGame.name) && !announcedGames.has(newGame.name)) {
    announcedGames.add(newGame.name);
    gameStartTimes.set(newGame.name, Date.now());
    const channel = client.channels.cache.get(CHANNEL_ID);

    if (channel) {
      channel.send(`${member.displayName} is now playing ${newGame.name}❗❗❗❗`);
    }
  } else if (oldGame && !newGame && gameStartTimes.has(oldGame.name)) {
    const startTime = gameStartTimes.get(oldGame.name);
    const duration = Math.round((Date.now() - startTime) / 1000 /60);
      const duration1 = Math.round((Date.now() - startTime) / 1000 );
    
    gameStartTimes.delete(oldGame.name);
    const channel = client.channels.cache.get(CHANNEL_ID);

    if (channel) {
      channel.send(`${member.displayName} played ${oldGame.name} for ${duration} minutes❗❗😯📸❗❗`);
    }
  }
});




client.login("discord token here"); // put your discord bot token here


