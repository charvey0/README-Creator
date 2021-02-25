const inq = require('inquirer');
const fs = require("fs");
const fileName = "sampleREADME.md";


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
         name: "installation",
         type: "input",
         message: "What are the installation instructions?",        
     },
     {
         name: "usage",
         type: "input",
         message: "How is this project going to be used?",        
     },
     {
         name: "license",
         type: "list",
         message: "Please select a license (listed from most restrictive to least restrictive):", 
         choices: ["GNU_GPLv3","Apache_2.0","MIT","Unlicensed"],       
     },
     {
         name: "contributors",
         type: "input",
         message: "What are the contribution instructions?",        
     },
     {
         name: "tests",
         type: "input",
         message: "How can the user perform tests?",        
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
 function writeToFile(fileName, data) {
     var text = `
[![license](https://img.shields.io/badge/License-${data.license}-blue)](https://img.shields.io/badge/License-${data.license}-blue)  
# **${data.title}**
# Table of Contents
* [Project Description](#project-description)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)
* [Contributions](#contributions)
* [Questions](#questions)
# Project Description
${data.description}
    
# Installation
${data.installation}
# Usage
${data.usage}
# Tests
${data.tests}
# License
${data.license}
# Contributions
${data.contributors}
# Questions
If you have any questions, please contact the project owner by clicking on the email listed below.  
     
#### [${data.github_username}](https://github.com/${data.github_username})
#### [${data.email}](mailto:${data.email})
`;

     fs.writeFile(fileName, text, (err) => {
         if (err) throw err;
     });

 }

// TODO: Create a function to initialize app
function init() {
    inq.prompt(questions)
    .then(data => writeToFile(fileName, data))
    .catch(err => new Error("Something went wrong: "+err));
}

// Function call to initialize app
init();
