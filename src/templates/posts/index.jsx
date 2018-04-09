import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const NavLink = ({ index, pageCount }) => {
  const notFirst = index !== 1;
  const notLast = index !== pageCount;
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
    <div>
      {notFirst && <Link to={previousUrl}>Previous Page</Link>}
      <br />
      {notLast && <Link to={nextUrl}>Next Page</Link>}
    </div>
  );
};

NavLink.propTypes = {
  index: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
};

const Posts = ({ pathContext }) => {
  const { group, index, pageCount } = pathContext;

  return (
    <div>
      <div>Blog Index</div>
      {group.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.frontmatter.slug}>
            <p>Title: {node.frontmatter.title}</p>
            <p>Date: {node.frontmatter.date}</p>
            <p>Lead: {node.frontmatter.lead}</p>
          </Link>
          <hr />
        </div>
      ))}
      <NavLink index={index} pageCount={pageCount} />
    </div>
  );
};

Posts.propTypes = {
  pathContext: PropTypes.shape({
    group: PropTypes.object,
    index: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default Posts;
