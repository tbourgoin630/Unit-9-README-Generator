const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

function promptUser() {
    {
        type: "input",
        name: "fullname",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's title?",
    },
    {
        type: "input",
        name: "desciption",
        message: "Description of your project",
    },
    {
        type: "input",
        name: "installation",
        message: "Enter steps to install application",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter instructions for use",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "tests",
        message: "Enter tests for the project",
    }
    {
        type: "input",
        name: "license",
        message: "Which license do you want to use for the application?",
        choices: ["MIT", "Apache 2.0", "Mozilla", "Unlicense", "BSD 3"],
    }


}