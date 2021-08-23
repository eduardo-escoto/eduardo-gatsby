import * as React from "react";
import Navbar from "../components/navbar";
import OutLink from "../components/outlink";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { graphql, Link } from "gatsby"; // highlight-line
import Img from "gatsby-image";

const socialLinks = [
  {
    type: "Resume",
    uri: "https://www.linkedin.com/in/eduardo-exists/",
    icon: faFileAlt,
  },
  {
    type: "LinkedIn",
    uri: "https://www.linkedin.com/in/eduardo-exists/",
    icon: faLinkedinIn,
  },
  {
    type: "Github",
    uri: "https://www.linkedin.com/in/eduardo-exists/",
    icon: faGithub,
  },
  {
    type: "Spotify",
    uri: "https://www.linkedin.com/in/eduardo-exists/",
    icon: faSpotify,
  },
];

const SocialsLinksListItem = ({ type, uri, icon }) => (
  <li class="list-inline-item mx-2 px-1">
    <OutLink href={uri}>
      <FontAwesomeIcon icon={icon} />
    </OutLink>
  </li>
);

const BioHeader = () => {
  const socialLinksList = socialLinks.map((socialLink) => (
    <SocialsLinksListItem {...socialLink} />
  ));
  return (
    <div class="h-100 py-4">
      <div class="row">
        <div class="col-md-7 text-center px-0 pt-md-5">
          <h2 class="display-3">Eduardo Escoto </h2>
          <ul class="list-unstyled mb-sm-0 mb-md-2">
            <li class="fs-4">
              AI Data Scientist at{" "}
              <OutLink href="https://afiniti.com">Afiniti</OutLink>
            </li>
            <li class="fs-4">
              <OutLink href="mailto:me@eduardo.wtf?subject=Hey Ed :)">
                me@eduardo.wtf
              </OutLink>
            </li>
          </ul>
          <ul class="list-inline ps-3 mb-3 fs-3">{socialLinksList}</ul>
        </div>
        <div class="col-md ms-md-5 pt-md-4 pt-sm-1 text-center">
          <StaticImage
            class="border border-secondary rounded-circle"
            src="../../images/me.jpg"
            width="220"
          />
        </div>
      </div>
    </div>
  );
};

const BioSection = () => (
  <div class="container-fluid">
    <div>
      <hr />
      <p>
        Hey there! I'm Ed :) I am a Data Scientist at{" "}
        <OutLink href="https://afiniti.com">Afiniti</OutLink> in Washington DC
        where my work focuses on Applied Artificial Intelligence. In my
        undergrad I completed a double major in Mathematics and Statistics at{" "}
        <OutLink href="https://https://www.ucsb.edu/">UC Santa Barbara</OutLink>
        . Previously, I was a Data Science Intern, and also a Teaching Assistant
        in the{" "}
        <OutLink href="https://cs.ucsb.edu/">
          UCSB Computer Science Department
        </OutLink>
        . My current passions lie in studying Deep Learning and its
        applications. More casually, I am a massive dweeb for math theory, a
        connoisseur of math rock and bedroom pop, and I spend more time than I
        should playing JRPGs and watching E-sports.
      </p>
    </div>
  </div>
);

const ProjectCard = (props) => (
  <div class="col p-4">
    <div class="card">
      <Img
        class="card-img-top"
        fluid={props.frontmatter.featuredImage.childImageSharp.fluid}
      />
      <div class="card-body">
        <h5 class="card-title">{props.frontmatter.title}</h5>
        <p class="card-text">{props.frontmatter.description}</p>
        <div class="d-flex">
          <div class="p-2 ml-auto">
            <Link
              to={"/projects/" + props.slug}
              class="link-secondary text-decoration-none"
            >
              Read More!
            </Link>
          </div>
          <div class="p-2">
            <OutLink href={props.frontmatter.githubUri}>
              <FontAwesomeIcon icon={faGithub} />
            </OutLink>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const IndexPage = ({ data }) => {
  let test_data = data.allMdx.nodes;
  console.log(test_data);
  return (
    <div class="pb-5">
      <div class="container-md pb-md-5 pb-sm-2">
        <Navbar />
        <div class="col-lg-10 offset-lg-1">
          <BioHeader />
          <BioSection />
        </div>
      </div>
      {/* <div class="container-md border-top pt-3">
        <div class="col-md-8 offset-md-2 text-center px-0 pb-2">
          <h2 class="display-5">Featured Projects</h2>
          <div class="row row-cols-1 row-cols-lg-2 g-4">
            {data.allMdx.nodes.map((nodeData) => (
              <ProjectCard {...nodeData} />
            ))}
          </div>
          <ProjectCardSection {...data.allMdx}/>
        </div>
      </div> */}
      <div class="album pb-5 bg-light border-top">
        <div class="col-md-8 offset-md-2 text-center px-0 py-4">
          <h2 class="display-5">Featured Projects</h2>
        </div>
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <svg
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>

                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <svg
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>

                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <svg
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>

                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card shadow-sm">
                <svg
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>

                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <svg
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>

                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <svg
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>

                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card shadow-sm">
                <svg
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>

                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <svg
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>

                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <svg
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>

                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    allMdx(
      sort: {
        order: [DESC, DESC]
        fields: [frontmatter___frontPage, frontmatter___date]
      }
      limit: 4
    ) {
      nodes {
        frontmatter {
          title
          date
          description
          githubUri
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        timeToRead
        slug
      }
    }
  }
`;

export default IndexPage;
