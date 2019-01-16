import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import styles from './footer.module.css'

export default ({ }) => (
    <form name="contact" method="POST" action="/success" data-netlify-recaptcha="true" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
        </div>
        <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
        </div>
        <ul className="actions">
            <li><input type="submit" value="Send Message" className="special" /></li>
            <li><input type="reset" value="Clear" /></li>
        </ul>
    </form>
)
