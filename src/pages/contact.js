import React from "react";
import { navigateTo } from "gatsby-link";
import Recaptcha from "react-google-recaptcha";
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import Layout from "../components/layout"

let recaptchaConfig

try {
  // Load the Contentful config from the .contentful.json
  recaptchaConfig = require('../../.recaptcha')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
recaptchaConfig = {
  RECAPTCHA_KEY: process.env.SITE_RECAPTCHA_KEY || recaptchaConfig.siteKey,
  RECAPTCHA_SECRET: process.env.SITE_RECAPTCHA_SECRET || recaptchaConfig.secretKey,
}

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
        <div style={{ background: '#fff' }}>
          <div className={styles.hero}>
            Blog
          </div>
          <div className="wrapper">
            <h1>reCAPTCHA 2</h1>
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
                sitekey={recaptchaConfig.RECAPTCHA_KEY}
                onChange={this.handleRecaptcha}
              />
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}