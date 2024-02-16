import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken('MTEyODMzODAyMDE0NDI2NzMxNA.GhjUTg.ucyp8cgbBR0KiKiJhMis-NHB2Z-9_UcZxa9iD4');

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}