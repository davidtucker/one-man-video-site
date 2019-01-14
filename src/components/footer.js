import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import styles from './footer.module.css'

export default ({ data }) => (
  <div className={styles.footerContainer}>
      <div className={styles.preFooter}>
        <div className={styles.innerContainer}>
            <div className={styles.preFooter1}>
                <Link to="/">
                    <img src="/images/one-man-video-logo.svg" />
                </Link>
                <p>This is some sample text.  This is the best sample text in the history of the Internet. This is some sample text.  This is the best sample text in the history of the Internet.</p>
                <a href="#" className={styles.footerButton}>Subscribe</a>
            </div>
            <div className={styles.preFooter2}>
                <h4>Pages</h4>
                <ul>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="">About</Link></li>
                    <li><Link to="">Blog</Link></li>
                    <li><Link to="">Contact</Link></li>
                </ul>
            </div>
            <div className={styles.preFooter3}>
                <h4>Social</h4>
                <ul>
                    <li><Link to="">YouTube</Link></li>
                    <li><Link to="">Twitter</Link></li>
                </ul>
            </div>
        </div>
      </div>
      <div className={styles.footer}>
        Copyright © 2019 <Link to="/">One Man Video</Link> a part of <a href="https://mindmillmedia.com/">Mind Mill Media, LLC</a>
      </div>
  </div>
)
