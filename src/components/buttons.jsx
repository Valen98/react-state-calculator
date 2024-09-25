import { useState } from "react"

export default function buttons({id, number, setFirstnumber, setSecondNumber, isDecimal, setDecimal}) {
    let buttonList = []

    const handleNumberClick = (digit) => {
        if(number === 0) {
            number = ''
        }
        let numberString = number.toString()
        let digitString = digit.toString()
        if(isDecimal) {
            if(id === 0) {
                if(digit === -1) {
                    setFirstnumber(0)
                    setDecimal(false)
                }else {
                    if(!numberString.includes('.')) {
                        setFirstnumber(numberString + '.' + digitString)
                    }else {
                        setFirstnumber(numberString + digitString)
                    } 
                }
            }else {
                if(digit === -1) {
                    setSecondNumber(0)
                    setDecimal(false)    
                }else {
                    if(!numberString.includes('.')) {
                        setSecondNumber(numberString + '.' + digitString)
                    }else {
                        setSecondNumber(numberString + digitString)
                    }
                } 
            }
        }else {
            if(id === 0) {
                if(digit === -1) {
                    setFirstnumber(0)
                    setDecimal(false)
                }else {
                    if(numberString.length <= 0 && digit === 0) {
                        
                    } else {
                        setFirstnumber(numberString + digitString)
                    }
                }
            }else {
                if(digit === -1) {
                    setSecondNumber(0)  
                    setDecimal(false)  
                }else {
                    if(numberString.length <= 0 && digit === 0){

                    }else {
                        setSecondNumber(numberString + digitString)
                    }
                    
                }
                
            }
        }

        
    }

    for(let i = 1; i <= 9; i++) {
      buttonList.push(<button key={id+i} onClick={() => {handleNumberClick(i)}}>{i}</button>)
    }

    buttonList.push(<button key={id+20} onClick={() => {handleNumberClick(0)}}>0</button>)
    buttonList.push(<button key={id+21} onClick={() => {setDecimal(true)}}>.</button>)
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