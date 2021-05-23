const figlet = require('figlet')
const chalk = require('chalk')

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

module.exports = {
    getTitle
}