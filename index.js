// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: 'Enter a short description for your project:'   
    },
    {
        type: 'input',
        name: 'description1',
        message: 'Enter a short answer for what your motivation was:'   
    },
    {
        type: 'input',
        name: 'description2',
        message: 'Enter a short answer for why you built this project:'   
    },
    {
        type: 'input',
        name: 'description3',
        message: 'Enter a short answer for what problem(s) it solves:'   
    },
    {
        type: 'input',
        name: 'description4',
        message: 'Enter a short answer for what you learned:'   
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
    // const answersString = JSON.stringify(answers);

    fs.writeFile(fileName, generateMarkdown(answers), (err) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(`Wrote user answers to ${fileName}`);
        console.log(`Please review punctuations to make any additional revisions.`);
        console.log(`Note: This is only a template generator!`);
        console.log(`You may need to add additional syntax to get your desired outcome.`);
        console.log(`Thank you again for using this README generator :)`);
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
