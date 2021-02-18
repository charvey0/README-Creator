// TODO: Include packages needed for this application
const inq = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        type: "input",
        message: "What is your project title?",        
    },
    {
        name: "description",
        type: "input",
        message: "Please describe your project.",        
    },
    {
        name: "default_installation",
        type: "confirm",
        message: "Would you like to use the default installation instructions?",        
    },
    {
        name: "usage",
        type: "input",
        message: "How is this project going to be used?",        
    },
    {
        name: "usage-addons",
        type: "confirm",
        message: "Do you have any additional resources for the Usage section?",        
    },
    {
        name: "license",
        type: "list",
        message: "Please select a license (listed from most restrictive to least restrictive):", 
        choices: ["GNU GPLv3","Apache 2.0","MIT","Unlicense"],       
    },
    {
        name: "default_contribute",
        type: "confirm",
        message: "Would you like to use the default contribution instructions?",        
    },
    {
        name: "tests",
        type: "input",
        message: "",        
    },
    {
        name: "github_username",
        type: "input",
        message: "What is your GitHub username?",        
    },
    {
        name: "email",
        type: "input",
        message: "What is your email address?",        
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inq.prompt(questions);
}

// Function call to initialize app
init();
