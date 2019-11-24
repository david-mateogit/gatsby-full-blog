/* eslint-disable react/display-name */
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';

export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <h1>Hello!</h1>
      <p>Hi everybody</p>
      <Link to="/about/">Learn about me &rarr;</Link>

      <h2>Read my blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};

/* <pre>{JSON.stringify(post, null, 2)}</pre> */
