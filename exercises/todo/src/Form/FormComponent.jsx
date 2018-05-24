import React from 'react'

const FormComponent = (props) => {
  return (
    <form >
      Title:<input type="text" value={props.title} onChange={props.handleChange}/>
    </form>
  )
}

export default FormComponent
