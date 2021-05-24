function celsiuskelvin(value){
    return value*1+273.15
}

function celsiusfahrenheit(value){
    return (value * 9/5) + 32
}

function kelvincelsius(value){
    return value*1-273.15
}

function kelvinfahrenheit(value){
    return (value-273.15) * (9/5) + 32
}

function fahrenheitkelvin(value){
    return (value-32) * (5/9) + 273.15
}

function fahrenheitcelsius(value){
    return (value - 32) * (5/9)
}

function fromto(firstUnit,secondUnit,value){
    if ((firstUnit === 'Fahrenheit') && (secondUnit==='Celsius')){
        return fahrenheitcelsius(value)
    }
    if ((firstUnit === 'Fahrenheit') && (secondUnit==='Kelvin')){
        return fahrenheitkelvin(value)
    }
    if ((firstUnit === 'Kelvin') && (secondUnit==='Celsius')){
        return kelvincelsius(value)
    }
    if ((firstUnit === 'Kelvin') && (secondUnit==='Fahrenheit')){
        return kelvinfahrenheit(value)
    }
    if ((firstUnit === 'Celsius') && (secondUnit==='Fahrenheit')){
        return celsiusfahrenheit(value)
    }
    if ((firstUnit === 'Celsius') && (secondUnit==='Kelvin')){
        return celsiuskelvin(value)
    }
}

function update(anwsers1, anwsers2, model){
    const source = anwsers1.source
    const value = anwsers1.value
    const firstUnit = anwsers2.from
    const secondUnit = anwsers2.to
    const convertion = fromto(firstUnit,secondUnit,value)

    let newleftValue = 0
    let newleftUnit = ''
    let newrightValue = 0
    let newrightUnit = ''

    if (source === true){
        newleftValue = value
        newleftUnit = firstUnit
        newrightValue = convertion
        newrightUnit = secondUnit
    }
    if (source === false){
        newleftValue = convertion
        newleftUnit = secondUnit
        newrightValue = value
        newrightUnit = firstUnit
    }

    return{
        ...model,
        leftValue: newleftValue,
        leftUnit: newleftUnit,
        rightValue: newrightValue,
        rightUnit: newrightUnit
    }
}

module.exports = {
    update
}