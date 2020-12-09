const inquirer = require("inquirer");
const fs = require("fs");

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
    //choose license options from a list?

]);

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
