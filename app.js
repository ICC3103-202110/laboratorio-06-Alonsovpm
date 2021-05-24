const {getTitle} = require('./view')
const {inputForm, listForm} = require('./view')
const {printTable} = require('console-table-printer')

async function app(state,update,view){
    const {model, currentView} = state
    const {title, table} = currentView
    console.clear
    console.log(title)
    printTable(table)
    const{input1} = await inputForm(model)
    const{input2} = await listForm(model)
    
}

module.exports = {
    app
}  