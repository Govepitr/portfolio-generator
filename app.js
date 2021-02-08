const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        }else{
          console.log("GIMME A NAAAAAAME!");
        }
      }
    },
    {
      type: 'input',
      name: 'GitHub username',
      message: 'Enter your GitHub Username',
      validate: userNameInput => {
        if (userNameInput) {
          return true;
        }else{
          console.log("Dude, just give me your username for GitHub..");
        }
      }
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      validate: bioInput => {
        if (bioInput) {
          return true;
        }else{
          console.log("I'd like to get to know those are about to be in my thrall.");
        }
      }
    }
  ]);
};

const promptProject = (portfolioData) => {
  console.log(`
=================
Add a New Project
=================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
  .prompt([
    {
      type: 'input',
      name: 'Project name',
      message: 'What is the name of your project?',
      validate: projectName => {
        if (projectName) {
          return true;
        }else{
          console.log("STAAAAHP! Share it's name with me.");
        }
      }
    },
    {
      type: 'input',
      name: 'Project description',
      message: 'Provide a description of the project (Required)',
      validate: projectBio => {
        if (projectBio) {
          return true;
        }else {
          console.log("Don't be bashful, introduce the little binary lady.");
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'Project GitHub link',
      message: 'Enter the GitHub link to your project. (Required)',
      validate: githubLink => {
        if (githubLink) {
          return true;
        }else {
          console.log("I'm not asking for your PIN. Just the URL dude.");
        }
      }
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ])
  .then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } else {
      return portfolioData;
    }
  });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });