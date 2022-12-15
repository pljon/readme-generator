// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {generateMarkdown} = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'Enter a title for your project:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project:'   
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Enter a table of contents for your project (separate items with commas):'   
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions for your project:'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Enter a license for your project (if none, press enter):'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter any contributors to your project:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter instructions for running tests on your project:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your e-mail for others to contact you with questions:'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username to link to questions section:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    const answersString = JSON.stringify(answers);

    fs.writeFile(fileName, answersString, (err) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(`Wrote user answers to ${fileName}`);
    }); 
}

// TODO: Create a function to initialize app
function init() {
    // prompts the user with the questions array to get the answers for markdown
    inquirer.prompt(questions).then((answers) => {
        // write the answers to a file
        writeToFile('README.md', answers);
    });
}

// Function call to initialize app
init();
