const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = ([
    //print to readme file sections?
    {type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Describe your project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Provide installation instructions:',
      name: 'installation',
    },
        {type: 'input',
      message: 'Add usage information',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Include contribution guidlines',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'List your test instructions',
      name: 'tests',
    },
    {
      type: 'list',
          message: 'Choose one license:',
          choices: ["MIT", "ISC", "Apache-2.0"],
      name: 'license',
    },
    {
      type: 'input',
      message: 'Enter your github username:',
      name: 'username',
    },
    {
      type: 'input',
      message: 'Enter your email address:',
      name: 'email',
    }
]);

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(`output-${fileName}`, data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markDown = generateMarkdown(answers);
        writeToFile("README.md", markDown);
    });
}

// function call to initialize program
init();
