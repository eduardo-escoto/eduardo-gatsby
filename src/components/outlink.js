import * as React from "react";

const OutLink = ({ children, href }) => {
  return (
    <a
      href={href}
      class="link-secondary text-decoration-none"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default OutLink;
