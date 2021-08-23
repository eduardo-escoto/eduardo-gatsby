import * as React from "react";
import Navbar from "../components/navbar";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import "../scss/pages.scss";

const IndexPage = () => {
  return (
    <div class="container">
      <Navbar />

      <div class="h-100 p-5 bg-light border rounded-3">
        <div class="row">
          <div class="col-md text-center py-4">
            <h2 class="display-3">Eduardo Escoto </h2>
            <ul class="list-unstyled">
              <li class="fs-4">
                AI Data Scientist at{" "}
                <a href="https://afiniti.com" class="link-secondary text-decoration-none" target="_blank" rel="noreferrer">
                  Afiniti
                </a>
              </li>
              <li class="fs-4">
                <a href="mailto:me@eduardo.wtf" class="link-secondary text-decoration-none">me@eduardo.wtf</a>
              </li>
            </ul>
            <ul class="list-inline ps-3">
              <li class="list-inline-item me-3 px-1">
                <a
                  href="https://www.linkedin.com/in/eduardo-exists/"
                  target="_blank"
                  rel="noreferrer"
                  class="link-secondary fs-3"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li class="list-inline-item px-1">
                <a
                  href="https://github.com/eduardo-exists"
                  target="_blank"
                  rel="noreferrer"
                  class="link-secondary fs-3"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li class="list-inline-item ms-3 px-1">
                <a
                  href="https://github.com/eduardo-exists"
                  target="_blank"
                  rel="noreferrer"
                  class="link-secondary fs-3"
                >
                  <FontAwesomeIcon icon={faFileAlt} />
                </a>
              </li>
              <li class="list-inline-item mx-3 px-1">
                <a
                  href="https://open.spotify.com/user/maneddyawesome?si=8065cf7d1d6e4a78"
                  target="_blank"
                  rel="noreferrer"
                  class="link-secondary fs-3"
                >
                  <FontAwesomeIcon icon={faSpotify} />
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md ms-md-5 pt-md-0 pt-sm-4 text-center">
            <StaticImage
              class="border border-secondary rounded-circle"
              src="../images/me.jpg"
              width="260"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
