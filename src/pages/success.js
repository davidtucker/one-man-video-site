import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import ContactForm from '../components/contact-form'

class Success extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title="Contact Us" />
          <div className="wrapper">
            <h2 className="section-headline">Contact Us</h2>
            Thank you for contacting us!
          </div>
        </div>
      </Layout>
    )
  }
}

export default Success
