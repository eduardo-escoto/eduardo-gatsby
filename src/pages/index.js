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
import { graphql } from "gatsby"; // highlight-line
import "../scss/pages.scss";

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

const socialsLinksListItem = ({ type, uri, icon }) => (
  <li class="list-inline-item mx-2 px-1">
    <OutLink href={uri}>
      <FontAwesomeIcon icon={icon} />
    </OutLink>
  </li>
);

const IndexPage = ({ data }) => {
  const socialLinksList = socialLinks.map((socialLink) =>
    socialsLinksListItem(socialLink)
  );
  return (
    <div class="container-md">
      <Navbar />
      <div class="col-lg-8 offset-lg-2">
        <div class="h-100 py-4">
          <div class="row">
            <div class="col-md-7 text-center px-0">
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
              <ul class="list-inline ps-3 mb-0 fs-3">{socialLinksList}</ul>
            </div>
            <div class="col-md ms-md-5 pt-md-4 pt-sm-3 text-center">
              <StaticImage
                class="border border-secondary rounded-circle"
                src="../images/me.jpg"
                width="220"
              />
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div>
            <hr />
            <p>
              Hey there! I'm Ed :) I am a Data Scientist at{" "}
              <OutLink href="https://afiniti.com">Afiniti</OutLink> in
              Washington DC where my work focuses on Applied Artificial
              Intelligence. In my undergrad I completed a double major in
              Mathematics and Statistics at{" "}
              <OutLink href="https://https://www.ucsb.edu/">
                UC Santa Barbara
              </OutLink>
              . Previously, I was a Data Science Intern, and also a Teaching
              Assistant in the{" "}
              <OutLink href="https://cs.ucsb.edu/">
                UCSB Computer Science Department
              </OutLink>
              . My current passions lie in studying Deep Learning and its
              applications. More casually, I am a massive dweeb for math theory,
              a connoisseur of math rock and bedroom pop, and I spend more time
              than I should playing JRPGs and watching E-sports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          date
          frontPage
        }
      }
    }
  }
`;

export default IndexPage;
