// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
		name: 'test',
		message: 'What test have you written for the project?',
	},
	{
		type: 'input',
		name: 'questions',
		message: 'What should someone do if they have questions about the project?',
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

## Usage

<a href="Usage">${data.usage}</a>

## License

<a href="License">${data.license}</a>

## Contributing

<a href="Contributing">${data.contributing}</a>

## Tests

<a href="Tests">${data.tests}</a>

## Questions

<a href="Questions">${data.questions}</a>
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
	writeToFile();
}

// Function call to initialize app
init();
