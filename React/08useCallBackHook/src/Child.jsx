import React from 'react'
import { memo } from 'react';

function Child() {
    console.log("Child component called");
  return (
    <div>Child Component</div>
  )
}
// memo cache this and only re-render when any change happend, but if we pass any prop to Child
// memo does not work
export default memo(Child);