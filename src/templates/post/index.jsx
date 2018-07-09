import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import PageTransition from 'gatsby-plugin-page-transitions';
import Hero from 'src/templates/shared/Block/Hero';
import WorkFooter from 'src/templates/shared/WorkFooter';
import { siteName } from 'src/siteMetadata';
import { media, transitionEase } from 'src/styles';

const PostContainer = styled.div`
  padding: 3rem 1rem;
  max-width: 35rem;
  margin-right: auto;
  margin-left: auto;
  display: block;

  ${media.tablet`
    padding: 3rem 0;
  `};

  a {
    text-decoration: underline;
    ${transitionEase};

    &:hover {
      opacity: 0.7;
    }
  }
`;

const Post = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <PageTransition>
      <Helmet>
        <title>
          {post.frontmatter.title} | {siteName}
        </title>
      </Helmet>
      <Hero
        color={post.frontmatter.backgroundColor}
        brand={post.frontmatter.image}
        jobDescription={
          <div>
            <h4>{post.frontmatter.date}</h4>
          </div>
        }
        title={post.frontmatter.title}
        blurb={<h4>{post.frontmatter.lead}</h4>}
      />
      <PostContainer>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </PostContainer>
      <WorkFooter />
    </PageTransition>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Post;

// eslint-disable-next-line no-undef
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        lead
        backgroundColor
        image
      }
    }
  }
`;
