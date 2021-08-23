import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import EdIcon from "../../svg/edlogoFinal_circle_clipped_thick.svg";

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

const pageNavigationLinks = [
  { text: "About", uri: "/", customClasses: "" },
  { text: "Projects", uri: "/#projects", customClasses: "" },
  // { text: "Featured Blogs", uri: "/#projects", customClasses: ""},
  // { text: "Blogs", uri:"/blogs", customClasses: " disabled"}
];

const siteNavigationLinks = [
  { text: "All Projects", uri: "/projects", customClasses: "" },
  // { text: "Blogs", uri: "/projects", customClasses: ""},
];

const pageNavigationListItem = ({ text, uri, customClasses }) => (
  <li class="nav-item">
    <Link
      class={"nav-link" + customClasses}
      activeClassName={"nav-link" + customClasses}
      aria-current="page"
      to={uri}
    >
      {text}
    </Link>
  </li>
);

const socialsLinksListItem = ({ type, uri, icon }) => (
  <li class="nav-item me-2">
    <a
      class="nav-link"
      aria-current="page"
      href={uri}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span class="icon-desc me-2" style={{ fontSize: "18px" }}>
        {type}
      </span>
      <FontAwesomeIcon icon={icon} style={{ fontSize: "28px" }} />
    </a>
  </li>
);

const Navbar = () => {
  const siteNavigationLinksList = siteNavigationLinks.map((navLink) =>
    pageNavigationListItem(navLink)
  );
  const pageNavigationLinksList = pageNavigationLinks.map((navLink) =>
    pageNavigationListItem(navLink)
  );
  return (
    <nav class="navbar navbar-expand-md navbar-light bg-white fixed-top border-bottom">
      <div class="container-lg">
        <Link
          class="navbar-brand"
          activeClassName="navbar-brand"
          to="/"
          style={{ fontSize: "25px" }}
        >
          <EdIcon
            width="60"
            class="d-inline-block align-text-center edIcon me-3"
          />
          Eduardo Escoto
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav_dropdown"
          aria-controls="nav_dropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nav_dropdown">
          <ul class="navbar-nav me-auto ms-auto" style={{ fontSize: "18px" }}>
            {pageNavigationLinksList}
            <li class="icon-desc">
              <hr class="dropdown-divider" />
            </li>
          </ul>
          <ul class="navbar-nav me-auto ms-auto" style={{ fontSize: "18px" }}>
            {siteNavigationLinksList}
            <li class="icon-desc">
              <hr class="dropdown-divider" />
            </li>
          </ul>
          <ul class="navbar-nav navbar-right">
            {socialLinks.map((socialLink) => socialsLinksListItem(socialLink))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
