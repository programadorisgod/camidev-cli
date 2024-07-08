#!/usr/bin/env node

import chalk from "chalk";
import { Command } from "commander";
import inquirer from "inquirer";
import ora from 'ora'
import figlet from "figlet";
import { switchOptions } from "./options/switchOptions.js";
const program = new Command()

console.log(
    chalk.blueBright(figlet.textSync('Camidev CLI', { horizontalLayout: "full" }))
);

program
    .version("1.0.0")
    .description('My Node CLI')
    .action(() => {
        console.log(chalk.italic.blue(`User session: ${process.env.USER}!`))
        inquirer.prompt([

            {
                type: 'list',
                name: "choice",
                message: "What do you want to do today?\n Choose an option:",
                choices: ['Jugar mine', 'Ver el directo Midudev', 'Jugar bullet force']
            }

        ]).then(answers => {
            const spinner = ora(`Doing ${answers.choice}...`).start()
            const { choice } = answers
            switchOptions(choice, spinner)
        })

    })


program.parse(process.argv)
process.on('uncaughtException', (err) =>
    console.log(chalk.yellow('See you soon')))