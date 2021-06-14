import React from 'react'

const HookCalculator = () => {
  const renderNumbers = () => {
    const numbers = [1,2,3,4,5,6,7,8,9]
    return numbers.map((number) => {
      return (
        <div className="number" key={number}>
          {number}
        </div>
      )
    })
  }

  return (
    <>
      <div className="number-grid">
        {renderNumbers()}
      </div>
    </>
  )
}

export default HookCalculator