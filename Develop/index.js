// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		name: 'title',
		message: 'What is the title of the project?',
	},
	{
		type: 'input',
		name: 'description',
		message: 'Provide a brief description of the project:',
	},
	{
		type: 'input',
		name: 'table of contents',
		message: 'Pleade provide a table of contents for the project:',
	},

	{
		type: 'input',
		name: 'installation',
		message: 'What are the steps required to install the project?',
	},
	{
		type: 'input',
		name: 'usage',
		message: 'How do you use the project?',
	},
	{
		type: 'list',
		name: 'license',
		message: 'What type of license does the project use?',
		choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'Other'],
	},
	{
		type: 'input',
		name: 'contributing',
		message: 'How can someone contribute to the project?',
	},
	{
		type: 'input',
		name: 'test',
		message: 'What test have you written for the project',
	},
	{
		type: 'input',
		name: 'questions',
		message: 'What should someone do if they have questions about the project?',
	},
];

// TODO: Create a function to write README file
function writeToFile() {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
