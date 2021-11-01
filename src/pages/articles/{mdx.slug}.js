import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
//import { Hero } from "../components/hero-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "../../components/seo"

const ArticlePost = ({data}) => {

    return (
        <Layout>
            <Seo title={data.mdx.frontmatter.title} />
            <div className="blog">
            <section class="w3-container">
            
       <article className="w3-container ">
            <h2>{data.mdx.frontmatter.title}</h2>
            <p className="w3-small">Posted: {data.mdx.frontmatter.date}</p>
            <MDXRenderer>
              {data.mdx.body}
            </MDXRenderer>
          </article>
     
      
                
            </section>
            </div>
        </Layout>
    )
    }
export const query = graphql`
query($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "MMMM DD,YYYY")
    }
    body
  }
}
`
export default ArticlePost