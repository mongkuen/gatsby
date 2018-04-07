import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Title = styled.h2.attrs({
  className: 'blue'
})``

export default () => {
  return (
    <div>
      <Title>Hello world!</Title>
      <Link to="/2/">Navigate to 2</Link>
    </div>
  )
}
