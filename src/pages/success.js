import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import styles from './contact.module.css'

class Success extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} >
        <Hero 
          backgroundImage="/images/contact-bg.jpg"
          title="Contact Us" />
        <Helmet title="Contact Us | One Man Video" />
        <div style={{ background: '#fff' }}>
          <div className={styles.contactWrapper}>
            <div className={styles.contactLeft}>
              <h2>We Want to Hear From You.</h2>
              <p>Send us your ideas, thoughts, opportunities, or just say hi. We will get back in touch with you soon.</p>
            </div>
            <div className={styles.contactRight}>
              <p>We have received your message.  We'll be back in touch soon!</p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Success
