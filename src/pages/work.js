import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 30px;
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(1200px, 1fr));
  }
`;
const projects = [
  {
    title: 'Vale Church',
    link: 'http://vale.church',
    image: 'vale',
    order: 2,
  },
  {
    title: 'The Magical Toy Shoppe',
    link: 'https://magicaltoyshoppe.com/',
    image: 'toyShoppe',
    order: 1,
  },
  {
    title: 'The Dax Foundation',
    link: 'https://thedaxfoundation.org/',
    image: 'dax',
    order: 3,
  },
  {
    title: 'Franke Construction',
    link: 'https://frankeconstruction.com/',
    image: 'franke',
  },
  {
    title: 'Amish Country of Illinois',
    link: 'https://amishcountryofillinois.com/',
    image: 'amish',
  },
  {
    title: 'Grossinger Motors Arena',
    link: 'http://www.grossingermotorsarena.com/',
    image: 'grossinger',
  },
];
const Link = styled.a`
  text-decoration: none;

  border: none;
  filter: grayscale(1);
  transition-duration: 0.5s;
  transition-property: filter, transform;
  transition-timing-function: ease;
  text-align: center;
  &:hover {
    filter: none;
    h2 {
      color: #009999;
    }
  }
  figure {
    position: relative;

    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: 0;
  }
  figcaption {
    /* position: absolute; */
    left: 50%;
    top: 100%;
    /* transform: translateX(-50%); */
    z-index: 1;
    width: 100%;
    margin: 0;
    h2 {
      letter-spacing: 1px;
      font-size: 1.8rem;
      margin: 0;
      transition: color 0.5s ease;
    }
  }
`;
const Work = props => {
  const { data } = props;
  return (
    <Grid>
      {projects.sort((a, b) => a.order - b.order).map(project => {
        const { title, image, link } = project;
        return (
          <Link
            key={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure>
              <Img
                fluid={data[image].childImageSharp.fluid}
                alt="Benjamin with family"
                style={{
                  maxWidth: 400,
                  margin: '0',

                  width: '100%',
                  objectFit: 'cover',
                }}
              />
              <figcaption>
                <h2>{title}</h2>
              </figcaption>
            </figure>
          </Link>
        );
      })}
    </Grid>
  );
};

export const pageQuery = graphql`
  query {
    vale: file(relativePath: { eq: "vale.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    amish: file(relativePath: { eq: "amish.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    grossinger: file(relativePath: { eq: "grossinger.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    toyShoppe: file(relativePath: { eq: "toyShoppe.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    franke: file(relativePath: { eq: "franke.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dax: file(relativePath: { eq: "dax.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
export default Work;
