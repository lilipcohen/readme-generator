// function to generate markdown for README
function generateMarkdown(data) {
  let badge;
  switch (data.license) {
    case "MIT":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    case "ISC": 
      badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
      break;
    case "Apache-2.0": 
      badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
  }
  return `# ${data.title} 
  ${badge}
  ## Description 
  ${data.description}
  ### Table of Contents
  [Installation](#Installation)
  [Usage](#Usage)
  [Contributing](#Contributing)
  [Test](#Test)
  [Questions](#Questions)
  #### Installation
  ${data.installation}
  #### Usage
  ${data.usage}
  #### Contributing
  ${data.contribution}
  #### Test
  ${data.tests}
  #### Questions
  [your github link](https://github.com/${data.username})
  
  
  Please email me, ${data.email}, if you have any further questions.
`;
}

module.exports = generateMarkdown;
