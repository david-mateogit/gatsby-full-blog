import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Page not found</h1>
    <p>Sorry the page you requested is not on our servers.</p>
    <br />
    <Link> &larr; Go back Home!</Link>
  </Layout>
);
