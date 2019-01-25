import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Hero from '../components/hero'
import styles from './page.module.css'

import heroStyles from '../components/hero.module.css'

class PageTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulPage')

    return (
      <Layout location={this.props.location} >
        <Hero 
          backgroundImage={post.heroImage.fixed.src}
          title={post.title} />
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title}`} />
          <div className="wrapper">
            <div className={styles.pageContent}
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        fixed(width: 1920) {
          width
          height
          src
          srcSet
        }
      }
    }
  }
`
