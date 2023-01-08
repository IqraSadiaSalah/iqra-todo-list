#! /usr/bin/env node
// import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import figlet from 'figlet';
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
};
async function invitation() {
    figlet(`TODO LIST`, (err, data) => {
        console.log(gradient.pastel.multiline(data) + '\n');
    });
    await sleep();
}
;
async function game() {
    let todos = [];
    let loop = true;
    while (loop) {
        const whendone = await inquirer.prompt([{
                type: "input",
                name: "TODO",
                message: "Add item in your todo-list"
            },
            {
                type: "confirm",
                name: "addmoreitems",
                message: "Do you want to add more item in your list?",
                default: false
            }
        ]);
        const { TODO, addmoreitems } = whendone;
        //console.log(whendone)
        loop = addmoreitems;
        if (TODO) {
            todos.push(TODO);
        }
        else {
            console.log("Add items first");
        }
    }
    if (todos.length > 0) {
        console.log("Your Todo list:");
        todos.forEach(todo => {
            console.log(todo);
        });
    }
    else {
        console.log("No todos found");
    }
}
await invitation();
await game();
