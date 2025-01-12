import React from 'react'

function Card(props) {
  return (
    <div>{props.name}{props.children}</div>
  )
}

export default Card