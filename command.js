import { REST, Routes } from 'discord.js';

// Construct and prepare an instance of the REST module
const rest = new REST().setToken("MTE3ODUzNDUwMTQ1NDk4MzE2OA.G4d1Jb.xL-f09nn9huEmx9rYutZR2Na7WBc8_jQZ6P5P0");

const commands = [
    {
        name: "ping",
        description: "replies with Pong",
    },
	{
		name: "create",
		description: "replies with shortened url",
	}
];

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		await rest.put(
			Routes.applicationGuildCommands("1178534501454983168", "1170568017525092362"),
			{ body: commands },
		);

		console.log(`Successfully reloaded application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.log(error);
	}
})();