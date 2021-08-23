import * as React from "react";

const OutLink = ({ children, href, ...props }) => {
  return (
    <a
    {...props}
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
