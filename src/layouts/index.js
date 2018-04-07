import React from 'react'
import styled from 'styled-components'
import 'tachyons'


const Title = styled.h1.attrs({
  className: "red"
})``

export default ({ children }) => {
  return (
    <div>
      <Title>Layout Title</Title>
      {children()}
    </div>
  )
}
