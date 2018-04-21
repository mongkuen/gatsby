import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import FadeTransition from 'src/utils/FadeTransition';
import Hero from 'src/templates/shared/Block/Hero';
import { postsPathPrefix } from 'src/siteMetadata';
import { transitionEase, nearWhite } from 'src/styles';
import WorkFooter from 'src/templates/shared/WorkFooter';

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

    h2,
    h4 {
      ${transitionEase};
    }

    &:hover {
      h2,
      h4 {
        text-shadow: 0 0 0.2rem ${nearWhite};
        transform: scale(1.005);
      }
    }
  }

  .hero {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Posts = ({ pathContext }) => {
  const { group, index, pageCount } = pathContext;

  return (
    <FadeTransition>
      <AllPosts>
        {group.map(({ node }) => (
          <Link to={node.frontmatter.slug} className="post" key={node.id}>
            <Hero
              className="hero"
              color={node.frontmatter.backgroundColor}
              brand={node.frontmatter.image}
              jobDescription={
                <div>
                  <h4>{node.frontmatter.date}</h4>
                </div>
              }
              title={node.frontmatter.title}
              blurb={<h4>{node.frontmatter.lead}</h4>}
            />
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
