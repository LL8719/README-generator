// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	if (!license) {
		return '';
	}
	switch (license.toLowerCase()) {
		case 'mit':
			return '[![Badge: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
		case 'apache':
			return '[![Badge: Apache](https://img.shields.io/badge/License-Apache-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
		case 'GPL v3':
			return '[![Badge: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	if (!license) {
		return '';
	}
	switch (license.toLowerCase()) {
		case 'mit':
			return '[Link: MIT](https://opensource.org/licenses/MIT)';
		case 'apache':
			return '[Link: Apache](https://opensource.org/licenses/Apache-2.0)';
		case 'GPL v3':
			return '[Link: GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
	}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	if (!license) {
		return '';
	} else {
		return '- [License](#license)';
	}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	const content = `
# ${data.title}

${renderLicenseBadge(data.license)}
### This project is licensed under the ${data.license} license.
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

## Description
${data.description}

## Table of Contents (Optional)
${data.contents.join('\n')}

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
	return content;
}

module.exports = {
	generateMarkdown,
};
