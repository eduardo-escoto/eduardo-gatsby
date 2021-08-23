import * as React from "react";
import Navbar from "../../components/navbar";
import { graphql } from "gatsby"; // highlight-line
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react"

const MyBlockquote = (props) => <blockquote class="blockquote" {...props}/>

const ProjectPage = ({ data }) => {
  return (
    <div>
      <div class="container-md py-3">
        <Navbar />
            <div class="col-md-10 offset-md-1 px-0 pt-2">
              <MDXProvider components={{blockquote: MyBlockquote}}><MDXRenderer>{data.mdx.body}</MDXRenderer></MDXProvider>
        </div>
      </div>
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
