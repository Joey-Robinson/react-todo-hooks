import React, { useState } from "react"

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    onChange: event => {
      setValue(event.target.value)
    },
    resetValue: () => setValue("")
  }
}

export default ({ onSubmit }) => {
  const { resetValue, ...text } = useInputValue("")
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        onSubmit(text.value)
        resetValue()
      }}
    >
      <input type="text" {...text} />
    </form>
  )
}
