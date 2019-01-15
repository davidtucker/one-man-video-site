import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.css'
import FeaturedArticleCard from '../components/featured-card'
import ArticleCard from '../components/article-card'

class RootIndex extends React.Component {

  state = {
    resizeNotifier: () => {},
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const videoOptions = {
      src: '/videos/one-man-video-header.mp4',
      autoPlay: true,
      muted: true,
      loop: true,
      ref: videoRef => {
        this.videoRef = videoRef;
      }
    }

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className={styles.siteHeaderContainer}>
            <h1 className={styles.siteHeader}>We help you create content.</h1>
            <p>Resources for the solo video content creator</p>
            <div className={styles.buttonGroup}>
              <a href="#" className={styles.ctaButton}>Subscribe</a>
              <a href="#" className={styles.secondaryButton}>Getting Started</a>
            </div>
          </div>
          <div className="wrapper"> 
            <div className={styles.featuredSection}>
              <h2 className={styles.sectionHeader}>Featured Articles</h2>   
              <FeaturedArticleCard />
            </div>
            <div className={styles.recentSection}>
              <h2 className={styles.sectionHeader}>Recent Articles</h2>
              <ul className={styles.articleList}>
                {posts.map(({ node }) => {
                  return (
                    <li key={node.slug}>
                      <ArticleCard />
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className={styles.postArticles}>
                <Link to="/blog/">More Articles</Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              src
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              src
            }
          }
        }
      }
    }
  }
`
