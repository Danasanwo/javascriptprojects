

class Calculator {
    constructor(calculusElement, resultElment) {
        this.calculusElement = calculusElement
        this.resultElment = resultElment
        this.clear()
    }


    clear() {
        this.calculusElement = ''
        this.resultElment = ''
        this.operation = undefined
    }

    updateScreen() {
        this.resultElment.innerHTML = this.result
        this.calculusElement.innerHTML = this.calculus


    }

    deleteValue() {

    }

    compute() {
        // let computation
        // const prev = parseFloat(this.calculus)
        // const now = parseFloat(this.result)
        // if (isNaN(prev) || isNaN(now)) return
        // switch (this.operation) {
        //     case '+':
        //         computation = prev + now
        //         break;
        //     case 'x':
        //         computation = prev * now
        //         break;
        //     case '÷':
        //         computation = prev / now
        //         break;
        //     case '-':
        //         computation = prev - now
        //         break;




        //     default:
        //         return
        //         break;
        // }
        // this.result = computation
        // this.operation = undefined
        // this.calculus = ''
    }

    chooseOperation(oper) {
        // if (result === '') return
        // if (calculus !== '') {
        //     this.compute()
        // }
        // this.operation = oper
        // this.calculus = this.result
        // this.result = ''
    }

    appendNumber(num) {
        if (num === '.' && this.result.indexOf('.') > 0) return

        this.result = this.result.toString() + num.toString()

        console.log('rryuii');


    }
}


const numberButtons = document.querySelectorAll('[data-button]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const allclearButton = document.querySelector('[data-all-clear]')
const calculusElement = document.querySelector('[data-calculus]')
const resultElment = document.querySelector('[data-result]')

console.log(resultElment.innerHTML)

let calculating = new Calculator(calculusElement, resultElment)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculating.appendNumber(button.innerHTML);
        calculating.updateScreen()
    })

})

// operationButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculating.chooseOperation(button.innerHTML);
//         calculating.updateScreen()
//     })

// })

// equalsButton.addEventListener('click', () => {
//     calculating.compute()
//     calculating.updateScreen()
// })


