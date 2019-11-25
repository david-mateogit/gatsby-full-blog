import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;
  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 5vw 2rem;
  width: 100%;
  margin-top: 0;

  @media (min-width: 550px) {
    padding-left: calc((100vw - 550px) / 2);
    padding-right: calc((100vw - 550px) / 2);
  }

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;
const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "steve-johnson-hero.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <>
      <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
        <TextBox>
          <h1>Sosua Self Storage &hearts;</h1>
          <p>
            Hello! <Link to="/about/">Learn about us &rarr;</Link>{' '}
          </p>
        </TextBox>
      </ImageBackground>
    </>
  );
};

export default Hero;
