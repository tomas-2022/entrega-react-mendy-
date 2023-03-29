import React from 'react'

const Text = (props) => {
  return (
    <div>
        <label>{props.textarea}</label> <br />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <br />
    </div>
  )
}

export default Text