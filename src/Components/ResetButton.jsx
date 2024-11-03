import React from 'react'

const ResetButton = ({ result , onReset }) => {
  return (
    <div>
      <button
        onClick={onReset}
        className={!result ? "none" : "show"}
        style={{ color: "black" }}
      >
        Reset
      </button>
    </div>
  )
}

export default ResetButton;
