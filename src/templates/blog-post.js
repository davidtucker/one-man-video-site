import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import styles from './blog-post.module.css'

class BlogPostTemplate extends React.Component {
  
  Body(props) {
    
  }

  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    let body = "";
    if(post.headerEmbed.childMarkdownRemark.html && post.headerEmbed.childMarkdownRemark.html.length > 1) {
      body += `<div class="video-responsive">${post.headerEmbed.childMarkdownRemark.html}</div>`;
    }
    body += `<div class="content-body">${post.body.childMarkdownRemark.html}</div>`

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className={styles.hero} style={{
            backgroundImage: `url(${post.heroImage.fixed.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}>
            <div className={styles.heroContent}>
              <h4>Article</h4>
              <h2>{post.title}</h2>
              <div className={styles.byline}>
                  <img className={styles.authorImage} src="/images/david-tucker.png" />
                  <div className={styles.metadata}>
                    <div className={styles.authorName}><Link to="/">David Tucker</Link></div>
                    <div className={styles.dateTime}>{post.publishDate}</div>
                  </div>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div
              dangerouslySetInnerHTML={{
                __html: body,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fixed(width: 1920) {
            width
            height
            src
            srcSet
          }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      headerEmbed {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
