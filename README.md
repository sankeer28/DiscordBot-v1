# Discord Bot 
###### My personal Discord bot, built using the Discord.js library. The bot is designed to add fun and functionality to my Discord server.😊
#### ⚪[Search Google images for any image or gif and bot send that to the chat](https://github.com/sankeer-28/DiscordBot#google-images)
#### ⚪[Delete specific gifs/images](https://github.com/sankeer-28/DiscordBot#delete-specific-gifs-from-specific-users)
#### ⚪[Random Quote, joke, gif of cat, gif of dog](https://github.com/sankeer-28/DiscordBot#random-quotesjokesgifs)
#### ⚪[Reverse image search of any anime,manga...](https://github.com/sankeer-28/DiscordBot#reverse-image-search-for-mangaanimeetc)
#### ⚪[Search Pexels for a copyright free image](https://github.com/sankeer-28/DiscordBot#pexels-image-search-)
#### ⚪[Search reddit for a random top post of the day](https://github.com/sankeer-28/DiscordBot#random-reddit-post-)
#### ⚪[Notify when any user is playing a specific game and how long they played it](https://github.com/sankeer-28/DiscordBot#game-notifier-)

This is my first Discord bot. I made it with little knowlege of discord.js.
If there is any cool feature you find interesting please use it.
## Install node.js by typing the following into the terminal of the bot folder
      npm install discord.js
   ![image](https://github.com/sankeer-28/DiscordBot/assets/112449287/129ce052-c3de-4a90-8409-60106429f9df)

Type cmd into the search bar of the discord bot file in file explorer and Enter.
## Type !help in chat for basic help

## Delete specific gifs from specific users
Line 35 of index.js: delete specific gifs,images from specific users. put banned urls into the array links. put specific users in targetUserIds

## Random Quotes,Jokes,Gifs
line 50 in index.js: type 'quote' into the chat. returns a random [quote](https://type.fit/api/quotes)

line 67 of index.js: type 'joke' into the chat. returns a random [joke](https://official-joke-api.appspot.com/random_joke)

line 82 of index.js: type 'cat' into the chat. returns a random gif of a [cat](https://api.thecatapi.com/v1/images/search?mime_types=gif)

line 103 of index.js: type 'dog' into the chat. returns a random gif of a [dog](https://api.thedogapi.com/v1/images/search?mime_types=gif)

## Google images 
line 124-188 of index.js: type 'google' or 'search' into the chat followed by a space and a query. returns an image (or gif, if specified in the query) of the query in the chat. 
Google search Engine id and google api must be given in line 125 and 126. 
### Making a Custom Google Search Engine🔍 
Login to the [Programmable Search Engine Control Panel](https://programmablesearchengine.google.com/) and create a new search engine.
Give your search engine a name, and select Search the entire. SafeSearch is optional.
Once created, make a note of the Search engine ID. This will be put on line 125.
### Getting Your API Keys 🔑
To get your API keys [Visit this page](https://developers.google.com/custom-search/v1/overview#api_key) and click blue button that says Get a Key.
In the menu that appears, click + Create a new project and enter a project name (ex. Discord Image Search Bot). Then click Next.
Your API key will be displayed. Make a note of this,and put it in line 126. you may create new projects which will give you another api key. Each key has a daily limit of 100 searches hence the need of multiple api keys.

## Reverse image search (for manga,anime,etc😳)
line 191 of index.js: type 'sauce' followed by a space then a url of any image (perferably from anime, manga, art) will return the source url which contains the provided url if the similarity is over 50% using saucenao. 
saucenao api key must be put in line 191. please create a [saucenao account]( https://saucenao.com/) and find your api in your account settings.
![image](https://github.com/sankeer-28/DiscordBot/assets/112449287/9565dc22-ca30-4692-9cfb-2ca40fe1fbdd)


## Pexels image search 🔍 
line 228-260 of index.js: type 'image' followed by a space and a query. uses the pexels search to find stock copywrite free images, please provide your pexels api key on line 240.

## Random Reddit post 🎲
line 262-294 of index.js: type 'r/' followed by a subreddit name. returns a random image from the top posts of the day from specified reddit.

## Game Notifier 🎮
 line 298-328 of index.js: provide a specific channel id to send a message. on line 301 put the names of the target games. if any user in your discord server is playing that specific game, thee bot will send a message in 
 specified channel. please modify the message as you wish on line 325. the bot will keep count of how long the user is playing the game.
 
![image](https://github.com/sankeer-28/DiscordBot/assets/112449287/08efa1d5-1084-4843-a794-057cdce9d6a5)


### If you dont know how, please google how to make a discord bot.
Make sure these intents are turned on ![image](https://github.com/sankeer-28/DiscordBot/assets/112449287/18afdf07-fa72-4a18-876c-1f25d6b1e4f1)

## line 333 of index.js: please provide your discord bot token here. 

## Click on startthebot.bat to run locally. 
## Running the bot 24/7
   You can also run this bot 24/7 using repl.it and a free website pinging service. 
    You can see an example [here](https://replit.com/@sankeer28/discord-bot-example?v=1).
     Copy index.js from here to there.
     
  ## License

[MIT](https://choosealicense.com/licenses/mit/)


