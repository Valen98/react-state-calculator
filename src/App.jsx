import "./App.css"
import { useState } from "react"
import Buttons from './components/buttons'

function App() {
  let [firstNumber, setFirstNumber] = useState(0)
  let [secondNumber, setSecondNumber] = useState(0)
  let [operator, setOperator] = useState('+')
  let [result, setResult] = useState(0)
  let [isDecimal, setDecimal] = useState(false)
  let [isSecondDecimal, setSecondDecimal] = useState(false)
  let [storeVal, setStoreVal] = useState(0)

  const calculate = () => {
    let fixedResult = ''
    switch(operator) {
      case '-':
        fixedResult += (parseFloat(firstNumber) - parseFloat(secondNumber))
        break
      case 'x':
        fixedResult += (parseFloat(firstNumber ) * parseFloat(secondNumber))
        break
      case '÷':
        if(firstNumber === 0 && secondNumber === 0) {
          setResult(0)
        }else {
          fixedResult += (parseFloat(firstNumber ) / parseFloat(secondNumber))
        }
        break
      default: 
        fixedResult += (parseFloat(firstNumber ) + parseFloat(secondNumber))
        break
    }

    if(fixedResult.includes('.')) {
      fixedResult = parseFloat(fixedResult).toFixed(3)
    }

    setResult(fixedResult)

  }

  return (
    <div className="calculator">
      <Buttons id={0} number={firstNumber} setNumber={setFirstNumber} isDecimal={isDecimal} setDecimal={setDecimal} storeVal={storeVal}/> 
      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => setOperator('+')}>+</button>
          <button onClick={() => setOperator('-')}>-</button>
          <button onClick={() => setOperator('x')}>x</button>
          <button onClick={() => setOperator('÷')}>÷</button>
        </div>
      </div>
      <Buttons id={10} number={secondNumber} setNumber={setSecondNumber} isDecimal={isSecondDecimal} setDecimal={setSecondDecimal} storeVal={storeVal}/>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => calculate()}>=</button>
          <button onClick={() => setStoreVal(result)}>Store</button>
        </div>
      </div>
    </div>
  )
}

export default App
