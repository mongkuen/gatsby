import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import FadeTransition from 'src/utils/FadeTransition';
import { WorkFooter } from 'src/pages/work/shared';
import { Container } from 'src/pages/shared/styles';
import { postsPathPrefix } from 'src/siteMetadata';
import { transitionEase, media, nearBlack } from 'src/styles';

const NavLink = ({ index, pageCount }) => {
  const notFirst = index !== 1;
  const notLast = index !== pageCount;
  const previousUrl =
    index - 1 === 1
      ? `/${postsPathPrefix}`
      : `/${postsPathPrefix}/${(index - 1).toString()}`;
  const nextUrl = `/${postsPathPrefix}/${(index + 1).toString()}`;

  return (
    <div>
      {notFirst && <Link to={previousUrl}>Previous Page</Link>}
      {notLast && <Link to={nextUrl}>Next Page</Link>}
    </div>
  );
};

NavLink.propTypes = {
  index: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
};

const AllPosts = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  a.post {
    flex-grow: 1;
    display: flex;
  }
`;

const Post = styled.div`
  background-color: ${props => props.backgroundColor};
  text-align: center;
  padding: 4rem 1rem;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  ${transitionEase};

  ${media.tablet`
    padding: 10rem 4rem;
  `};

  &:hover {
    transform: scale(1, 1.01);
    opacity: 0.7;
  }
`;

const PostTitle = styled.h2``;

const PostDate = styled.p`
  color: ${nearBlack};
  opacity: 0.4;
`;

const PostLead = styled.h4``;

const Posts = ({ pathContext }) => {
  const { group, index, pageCount } = pathContext;

  return (
    <FadeTransition>
      <AllPosts>
        {group.map(({ node }) => (
          <Link to={node.frontmatter.slug} className="post" key={node.id}>
            <Post backgroundColor={node.frontmatter.backgroundColor}>
              <Container>
                <PostTitle>{node.frontmatter.title}</PostTitle>
                <PostDate>Date: {node.frontmatter.date}</PostDate>
                <PostLead>{node.frontmatter.lead}</PostLead>
              </Container>
            </Post>
          </Link>
        ))}
        <NavLink index={index} pageCount={pageCount} />
        <WorkFooter />
      </AllPosts>
    </FadeTransition>
  );
};

Posts.propTypes = {
  pathContext: PropTypes.shape({
    group: PropTypes.array,
    index: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default Posts;
