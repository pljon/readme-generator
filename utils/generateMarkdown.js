// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  // variable for badge img, inputting whatever license user inputs with the label license and color of inputted license as green
  const badgeImg = `https://img.shields.io/badge/license-${license}-green`;

  // uses README syntax so that a badge img shows up with alt text License
  return `![License](${badgeImg})`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  // link to the inputted license answer to lower case format (MIT -> mit)
  const licenseLink = `https://choosealicense.com/licenses/${license.toLowerCase()}/`;

  // returns a link to that user inputted license with alt text of license, if license is valid
  return `[${license}](${licenseLink})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  // template literal display of what is to be returned to the readme
  return `## License

  This project is licensed under the ${renderLicenseLink(license)} license.

  ${renderLicenseBadge(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  // destructured data object for easier placement in markdown
  // const {
  //   projectName, 
  //   description, 
  //   tableOfContents, 
  //   installation, 
  //   usage, 
  //   license, 
  //   contributing, 
  //   tests, 
  //   email,
  //   username,
  // } = answers;

  // table of contents answer string to be split per item, trimmed for any extra white spaces
  const tocItems = answers.tableOfContents.split(',').map((item) => item.trim());

  // take split items and create a markdown for each item to be put into the table of contents
  const tocMarkdown = tocItems.map((item) => {
    // semantic to read template string clearer
    const link = item;

    // return with markdown string for specific item
    return `* [${item}](#${link})`;
  })
  // join returned strings together by putting them on a new line with that markdown with \n
  .join('\n'); // all part of tocMarkdown, does function to each item first, then joins

  return `
  # ${answers.projectName}

  ${answers.description}

  ## Description

  ${answers.description1} ${answers.description2} ${answers.description3} ${answers.description4}

  ## Table of Contents
  
  ${tocMarkdown}
  
## Installation

  ${answers.installation}

  ## Usage

  ${answers.usage}

  ${renderLicenseSection(answers.license)}

  ## Contributing

  ${answers.contributing}

  ## Tests

  ${answers.tests}

  ## Questions

  If you have any questions about this project, please contact me at ${answers.email}. You can also visit my [GitHub profile](https://github.com/${answers.username}) to view my other projects.
  `;
  }

module.exports = generateMarkdown;
