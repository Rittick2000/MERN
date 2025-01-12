import React from 'react'

function Button(props) {
  return (
    <>
    <div>{props.children}</div>
    <button onClick={props.handleClick}>
        {props.text}
    </button>
    </>
  )
}

export default Button