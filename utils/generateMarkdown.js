// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const generateAllInfo ={
  renderLicenseBadge: function (license) {
    let badge = "";
    if (license === "MIT") {
      badge = 
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === 'ISC') {
      badge =
        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    } else if (license === "Apache") {
      badge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === 'None') {
      badge = "";
    }
    return badge;
  },

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
generateMarkdown: function (data) {
  return `# ${data.title}
## Description:
${data.description}
## Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
## Installation:
${data.installation}
## Usage
${data.usage}
## Contributions
${data.contributing}
## Tests
${data.tests}
## License
${this.renderLicenseBadge(data.license)}
${data.license}
## Questions
*If you have any questions, please reach out to me via email and take a look at my GitHub.*
GitHub: <a href="https://github.com/${data.questions}">Github.com/${data.questions}</a>
Email: <a href="mailto:${data.email}">${data.email}</a>
`;
};



module.exports = generateMarkdown;
