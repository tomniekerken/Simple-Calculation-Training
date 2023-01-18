window.addEventListener('load', () => {
    let form = document.querySelector('#form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })

    let firstNumberSpan = document.querySelector('#firstNumber')
    let secondNumberSpan = document.querySelector('#secondNumber')
    let mathOperatorSpan = document.querySelector('#mathOperator')
    
    let inputField = document.querySelector('#inputNumber')

    const min = 1
    const max = 10
    const operators = ["+", "-", "*", "/"]

    let result;

    const generateCalculation = () => {
        let firstNumber = generateRandomNumber()
        let secondNumber = generateRandomNumber()
        let mathOperator  = generateRandomMathOperator()

        assignToHTML(firstNumber, secondNumber, mathOperator)

        switch(mathOperator) {
            case "+":
                result = firstNumber + secondNumber
                break
            case "-":
                result = firstNumber - secondNumber
                break
            case "*":
                result = firstNumber * secondNumber
                break;
            case "/":
                result = firstNumber / secondNumber
                break;
            default:
                break
        }

        return
    }

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const generateRandomMathOperator = () => {
        return [...operators][Math.floor(Math.random() * operators.length)]
    }

    const assignToHTML= (firstNumber, secondNumber, mathOperator) => {
        firstNumberSpan.innerHTML = firstNumber
        secondNumberSpan.innerHTML = secondNumber
        mathOperatorSpan.innerHTML = mathOperator
        return
    }

    const isCalculationCorrect = (input, result) => {
        if (input == result) {
            console.log("success")
        }
        if (input !== result) {
            console.log("wrong")
        }
    }

    inputField.addEventListener('input', (e) => {
        let inputValue = parseFloat(e.target.value)
        
        if (typeof inputValue === "number") {
            isCalculationCorrect(e.target.value, result)
        }
    })

    generateCalculation()
})



