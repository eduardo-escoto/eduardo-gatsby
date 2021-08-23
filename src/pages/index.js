import * as React from "react";
import Navbar from "../components/navbar";
import OutLink from "../components/outlink";
import socialLinks from "../config/socialLinks";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { graphql, Link } from "gatsby"; // highlight-line
import { GatsbyImage } from "gatsby-plugin-image";

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
          <ul class="list-inline  mb-3 fs-3">{socialLinksList}</ul>
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
        <OutLink href="https://www.ucsb.edu/">UC Santa Barbara</OutLink>
        . Previously, I was a Data Science Intern, and also a Teaching Assistant
        in the{" "}
        <OutLink href="https://cs.ucsb.edu/">
          UCSB Computer Science Department
        </OutLink>
        .</p>
      <span id="projects"/>
         <p>My current passions lie in studying Deep Learning and its
        applications. More casually, I am a massive dweeb for math theory, a
        connoisseur of math rock and bedroom pop, and I spend more time than I
        should playing JRPGs and watching E-sports.
      </p>
    </div>
  </div>
);

const ProjectCard = ({ frontmatter, timeToRead, slug }) => (
  <div class="col">
    <div class="card shadow-sm">
      <GatsbyImage
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="230"
        role="img"
        aria-label="Placeholder: Thumbnail"
        // fluid={frontmatter.featuredImage.childImageSharp.fluid}
        image={frontmatter.featuredImage.childImageSharp.gatsbyImageData}
      />
      <div class="card-body">
        <h5 class="card-title">{frontmatter.title}</h5>
        <p class="card-text">{frontmatter.description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <Link
              to={"projects/" + slug}
              class="btn btn-sm btn-outline-secondary"
            >
              Read More
            </Link>
            <a
              href={frontmatter.githubUri}
              class="btn btn-sm btn-outline-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Project Repo <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <small class="text-muted">
            {timeToRead}
            {timeToRead > 1 ? " mins" : " min"}
          </small>
        </div>
      </div>
    </div>
  </div>
);

const ProjectListSection = ({ data }) => (
  <div class="album pb-5 bg-light border-top">
    <div class="col-lg-10 offset-lg-1 text-center px-0 py-4">
      <h2 class="display-5">Featured Projects</h2>
    </div>
    <div class="container-md">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {data.allMdx.nodes.map((nodeData) => (
          <ProjectCard {...nodeData} />
        ))}
      </div>
    </div>
  </div>
);

const IndexPage = (props) => {
  return (
    <div>
      <div class="container-md pb-md-5 pb-sm-2">
        <Navbar />
        <div class="col-lg-10 offset-lg-1">
          <BioHeader />
          <BioSection />
        </div>
      </div>
      <ProjectListSection {...props} />
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
      limit: 6
    ) {
      nodes {
        frontmatter {
          title
          date
          description
          githubUri
          featuredImage {
            childImageSharp {
              gatsbyImageData(layout:CONSTRAINED, width: 400)
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
