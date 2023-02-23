// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//  array of questions for user input
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
		type: 'checkbox',
		name: 'contents',
		message: 'What sections would you like to add to Table of contents?',
		choices: [
			'- [Description](#description)',
			'- [Installation](#installation)',
			'- [Usage](#usage)',
			'- [License](#license)',
			'- [Contributing](#contributing)',
			'- [Test](#test)',
			'- [Questions](#questions)',
		],
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
		name: 'tests',
		message: 'What test have you written for the project?',
	},
	{
		type: 'input',
		name: 'questions',
		message: 'What should someone do if they have questions about the project?',
	},
	{
		type: 'input',
		name: 'GitHub',
		message: 'Enter your GitHub username for contact info',
	},
	{
		type: 'input',
		name: 'email',
		message: 'Enter your email for contact info',
	},
];

// function to write README file
function writeToFile() {
	inquirer

		.prompt(questions)

		.then((data) => {
			const filename = 'README.md';

			const content = `
# ${data.title}

## Description

${data.description}

## Table of Contents (Optional)


${data.contents}

## <a href="Installation">Installation</a>

${data.installation}

## <a href="Usage">Usage</a>

${data.usage}

## <a href="License">License</a>

${data.license}

## <a href="Contributing">Contributing</a>

${data.contributing}

## <a href="Tests">Tests</a>

${data.tests}

## <a href="Questions">Questions</a>

${data.questions}
### Use the following links to contact me

[GitHub Profile](https://github.com/${data.GitHub}/).

[:envelope_with_arrow:](${data.email}).

`;
			fs.writeFile(filename, content, (err) => {
				if (err) {
					console.error(err);
				} else {
					console.log(`README file created: ${filename}`);
				}
			});
		})
		.catch((error) => {
			console.error(error);
		});
}

// TODO: Create a function to initialize app
function init() {
	// writeToFile();
}

// Function call to initialize app
init();
