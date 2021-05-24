const {getTitle} = require('./view')
const {inputForm, listForm} = require('./view')
const {printTable} = require('console-table-printer')
const {interval} = require('rxjs')

async function app(state,update,view){
    while(true){
        const {model, currentView} = state
        const {title, table} = currentView
        console.clear
        console.log(title)
        printTable(table)
        const anwsers1 = await inputForm(model)
        const anwsers2 = await listForm(model)
        
        const updatedModel = update(anwsers1, anwsers2, model)

        state = {
            ...state,
            model: updatedModel,
            currentView : view(updatedModel)

        }
    }
}

module.exports = {
    app
}  