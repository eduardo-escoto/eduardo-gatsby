import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import EdIcon from "../svg/edlogoFinal_circle_clipped_thick.svg";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-light bg-white fixed-top border-bottom">
      <div class="container">
        <Link
          class="navbar-brand"
          activeClassName="navbar-brand"
          to="/"
          style={{ fontSize: "25px" }}
        >
          <EdIcon
            width="80"
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
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/projects">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="/blogs" aria-disabled="true">
                Blogs
              </a>
            </li>
            <li class="icon-desc"><hr class="dropdown-divider"/></li>
          </ul>
          <ul class="navbar-nav navbar-right">
            <li class="nav-item me-2">
              <a
                class="nav-link"
                aria-current="page"
                href="https://www.linkedin.com/in/eduardo-exists/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="icon-desc me-2" style={{ fontSize: "18px" }}>
                  Linkedin
                </span>
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  style={{ fontSize: "28px" }}
                />
              </a>
            </li>
            <li class="nav-item me-2">
              <a
                class="nav-link"
                href="https://github.com/eduardo-exists"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="icon-desc me-2" style={{ fontSize: "18px" }}>
                  Github
                </span>
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: "28px" }} />
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://eduardo.wtf/eduardo_escoto_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="icon-desc me-2" style={{ fontSize: "18px" }}>
                  Resume
                </span>
                <FontAwesomeIcon
                  icon={faFileAlt}
                  style={{ fontSize: "28px" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <div
    //   class="navbar navbar-expand-sm fixed-top navbar-light"
    //   style={{ backgroundColor: "#FFF", borderBottom: "1px solid grey" }}
    // >
    //   <div class="container">
    //     <Link
    //       class="navbar-brand"
    //       activeClassName="navbar-brand"
    //       to="/"
    //       style={{ fontSize: "25px" }}
    //     >
    //       <EdIcon
    //         width="50"
    //         class="d-inline-block align-text-center edIcon"
    //         style={{ marginRight: "0.5em" }}
    //       />
    //       Eduardo Escoto
    //     </Link>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNavAltMarkup"
    //       aria-controls="navbarNavAltMarkup"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    //       <Link
    //         class="nav-link rounded"
    //         activeClassName="nav-item nav-link active rounded"
    //         aria-current="page"
    //         to="/"
    //       >
    //         About
    //       </Link>
    //       <Link
    //         class="nav-item nav-link rounded"
    //         activeClassName="nav-item nav-link active rounded"
    //         to="/projects"
    //       >
    //         Projects
    //       </Link>
    //       <Link
    //         class="nav-link disabled rounded"
    //         activeClassName="nav-link active rounded"
    //         to="/blogs"
    //         tabindex="-1"
    //         aria-disabled="true"
    //       >
    //         Blog
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
