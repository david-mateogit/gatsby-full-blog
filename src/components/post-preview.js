import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import ReadLink from './read-link';

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      margin-top: 0.75rem;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1rem;
      }
    `}
  >
    <h3>
      <Link to={post.slug}>{post.title}</Link>
    </h3>
    <p>{post.excerpt}</p>
    <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
  </article>
);

PostPreview.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostPreview;
