import { useState } from "react"

export default function buttons({id, number, setNumber, isDecimal, setDecimal}) {
    let buttonList = []

    const handleNumberClick = (digit) => {
        if(number === 0) {
            number = ''
        }

        if(digit === '.' && number === '') {
            setNumber('0.')
            return
        }

        let numberString = number.toString()
        let digitString = digit.toString()
        if(isDecimal) {
            if(digit === -1) {
                setNumber(0)
                setDecimal(false)
            }else {
                if(!numberString.includes('.')) { 
                    setNumber(numberString + '.' + digitString)
                }else {
                    setNumber(numberString + digitString)
                } 
            }    
        }else {
            if(digit === -1) {
                setNumber(0)
                setDecimal(false)
            }
            if(numberString.length <= 0 && digit === 0){
            }else {
                setNumber(numberString + digitString)
            }
                    
        }
        
    }

    for(let i = 1; i <= 9; i++) {
      buttonList.push(<button key={id+i} onClick={() => {handleNumberClick(i)}}>{i}</button>)
    }

    buttonList.push(<button key={id+20} onClick={() => {handleNumberClick(0)}}>0</button>)
    buttonList.push(<button key={id+21} onClick={() => {setDecimal(true), handleNumberClick('.')}}>.</button>)
    buttonList.push(<button key={id+22} onClick={() => {handleNumberClick(-1)}}>clear</button>)

    return (
    <div className="panel">
        <p>{number || 0}</p>
        <div className="numbers">
            {buttonList}
        </div>
    </div>
    )    
}


function appendNumber(oldNumber, newNumber) {



}