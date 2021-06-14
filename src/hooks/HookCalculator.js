import React from 'react'

const HookCalculator = () => {
  const [number, setNumber] = React.useState()

  const renderNumbers = () => {
    const numbers = [1,2,3,4,5,6,7,8,9]
    return numbers.map((number) => {
      return (
        <div className="number" key={number} onClick={() => setNumber(number)}>
          {number}
        </div>
      )
    })
  }

  return (
    <div className="calculator">
      <div className="display">
        {number}
      </div>
      <div className="number-grid">
        {renderNumbers()}
      </div>
    </div>
  )
}

export default HookCalculator