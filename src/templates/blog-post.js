import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Hero from '../components/hero'

import styles from './blog-post.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    let body = "";
    if(post.headerEmbed && post.headerEmbed.childMarkdownRemark.html.length > 1) {
      body += `<div class="video-responsive">${post.headerEmbed.childMarkdownRemark.html}</div>`;
      body += `<h2>Video Notes</h2>`;
    }
    body += `<div class="content-body">${post.body.childMarkdownRemark.html}</div>`

    return (
      <Layout location={this.props.location} >
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div style={{ background: '#fff' }}>
        <Hero 
          backgroundImage={post.heroImage.fixed.src}
          title={post.title}
          authorName={post.author.name}
          authorImage={post.author.image.fluid.src}
          publishDate={post.publishDate}
          subtitle="Article" />
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
      author {
        name
        image {
          fluid(maxWidth: 100, maxHeight: 100, resizingBehavior: SCALE) {
            src
          }
        }
      }
    }
  }
`
