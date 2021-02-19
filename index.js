// TODO: Include packages needed for this application
const inq = require('inquirer');
const fs = require("fs");

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
function writeToFile(fileName, data) {
    var text = `
    [![MIT License][license-shield]][license-url]
    [![LinkedIn][linkedin-shield]][linkedin-url]
 
 # ${data.title}
 
 ## Description
 
 ${data.description}
 
 [![Product Name Screen Shot][product-screenshot]](https://example.com)
 
 ### Built With
     
    * [Bootstrap](https://getbootstrap.com)
    * [JQuery](https://jquery.com)
    * [Laravel](https://laravel.com)
 
 ## Table of Contents
 
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
 ## Installation
 
    ### Prerequisites
     
    This is an example of how to list things you need to use the software and how to install them.
    * npm
 \`\`\`sh
     npm install npm@latest -g
 \`\`\`
 
 ### Let's Begin
     
    1. Get a free API Key at [https://example.com](https://example.com)
    2. Clone the repo
 \`\`\`sh
 git clone https://github.com/your_username_/Project-Name.git
 \`\`\`
    3. Install NPM packages
  \`\`\`sh
  npm install
  \`\`\`
  4. Enter your API in \`config.js\`
 \`\`\`JS
  const API_KEY = 'ENTER YOUR API';
  \`\`\`
 
 ## Usage
 
    Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.
     
    _For more examples, please refer to the [Documentation](https://example.com)_
     
     
     
    <!-- ROADMAP -->
 ### Roadmap
     
 See the [open issues](https://github.com/${data.github_username}/${data.title}/issues) for a list of proposed features (and known issues).
 
 ## License
 Distributed under the MIT License. See \`LICENSE\` for more information.
 
 
 ## Contributing
 Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
     
 1. Fork the Project
 2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
 3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
 4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
 5. Open a Pull Request
 
 
 ## Tests
 
 
 ## Questions
     
     
     Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com
     
     Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)
    
`;

    fs.writeFile(fileName, text, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

}

// TODO: Create a function to initialize app
function init() {
    inq.prompt(questions)
    .then(data => writeToFile("README.md", data));
}

// Function call to initialize app
init();
