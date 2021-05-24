const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.yellow(
        figlet.textSync(
            'Unit Converter App',{
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {leftValue} = model
    const {leftUnit} = model
    const {rightValue} = model
    const {rightUnit} = model
    return[
        {
            'leftValue': leftValue,
            'leftUnit': leftUnit,
            'rightValue': rightValue,
            'rightUnit': rightUnit,
        }
    ]
}
function inputForm(model){
    const{input1,input2} = model
    const message1 = 'Left temperature is source? '
    const message2 = 'Temperature value to convert? '
    return inquirer.prompt([
        {
            name: 'input1',
            type: 'input',
            message: message1,
            default: input1,
        },
        {
            name: 'input2',
            type: 'input',
            message: message2,
            default: input2,
        }
    ])
}
function listForm(model){
    const {input3,input4} = model
    const message1 = 'From? '
    const message2 = 'To? '
    const choices = ['Celsius','Fahrenheit','Kelvin']
    return inquirer.prompt([
        {
            name: 'input3',
            type: 'list',
            message: message1,
            default: input3,
            choices: choices
        },
        {
            name: 'input4',
            type: 'list',
            message: message2,
            default: input4,
            choices: choices
        }
    ])
}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    listForm,
    inputForm
}