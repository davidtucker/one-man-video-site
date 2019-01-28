import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import styles from './blog.module.css'
import Layout from "../components/layout"
import ArticlePreview from '../components/article-preview'
import ArticleCard from '../components/article-card'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location} >
        <Hero 
          backgroundImage="/images/blog-bg.jpg"
          title="Blog" />
        <Helmet title="Blog | One Man Video" />
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticleCard articleData={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 1920, maxHeight: 1080) {
              src
            }
          }
          description {
            description
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
