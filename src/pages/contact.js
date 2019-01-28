import React from "react";
import { navigateTo } from "gatsby-link";
import Recaptcha from "react-google-recaptcha";
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import styles from './contact.module.css'
import Hero from '../components/hero'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRecaptcha = value => {
    this.setState({ "g-recaptcha-response": value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

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
              <form
                name="contact-recaptcha"
                method="post"
                action="/success/"
                data-netlify="true"
                data-netlify-recaptcha="true"
                onSubmit={this.handleSubmit}
              >
                <noscript>
                  <p>This form won’t work with Javascript disabled</p>
                </noscript>
                <p>
                  <label>
                    Your name:<br />
                    <input type="text" name="name" onChange={this.handleChange} />
                  </label>
                </p>
                <p>
                  <label>
                    Your email:<br />
                    <input type="email" name="email" onChange={this.handleChange} />
                  </label>
                </p>
                <p>
                  <label>
                    Message:<br />
                    <textarea name="message" onChange={this.handleChange} />
                  </label>
                </p>
                <Recaptcha
                  ref="recaptcha"
                  sitekey={process.env.SITE_RECAPTCHA_KEY}
                  onChange={this.handleRecaptcha}
                />
                <p>
                  <button type="submit" className={styles.submitButton}>Send Message</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
