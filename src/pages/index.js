import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Title = styled.h2.attrs({
  className: 'blue'
})``

export default ({ data }) => {
  return (
    <div>
      <Title>Blog index</Title>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <div key={node.id}>
            <p>Title: {node.frontmatter.title}</p>
            <p>Date: {node.frontmatter.date}</p>
            <p>Excerpt: {node.excerpt}</p>
            <hr/>
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            slug
          }
          excerpt
        }
      }
    }
  }
`
