import * as React from 'react'
import { Link, graphql }from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
const ArticlePage = ({ data }) => {
  return (
    <Layout>
    <Seo title="Select articles from Meditrinalia Naturopathic" />
    <div className="blog">
    <section class="w3-container">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2><Link to={`/articles/${node.slug}`}>{node.frontmatter.title}</Link></h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
      </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
        
      }
    }
  }
`

export default ArticlePage