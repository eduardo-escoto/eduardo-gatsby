import * as React from "react";
import Navbar from "../../components/navbar";
import { graphql } from "gatsby"; // highlight-line
import { MDXRenderer } from "gatsby-plugin-mdx";

const ProjectPage = ({ data }) => {
  return (
    <div>
      <Navbar></Navbar>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default ProjectPage;

// highlight-start
