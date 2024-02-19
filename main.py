import discord
from dotenv import load_dotenv
import os

load_dotenv()

intents = discord.Intents.default()
intents.message_content = True

client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print('Logged in!')

@client.event
async def on_message(message):
    if message.author == client.user:
        return
    if message.content == '!help':
        await message.channel.send('why the fuck do you want help')

client.run(os.getenv('TOKEN'))
