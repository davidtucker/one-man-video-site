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
                <p>Sharing knowledge on video production and optimization for the solo video content creator.</p>
                <a href="http://eepurl.com/gffuhT" className={styles.footerButton}>Subscribe</a>
            </div>
            <div className={styles.preFooter2}>
                <h4>Pages</h4>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about/">About</Link></li>
                    <li><Link to="/blog/">Blog</Link></li>
                    <li><Link to="/contact/">Contact</Link></li>
                </ul>
            </div>
            <div className={styles.preFooter3}>
                <h4>Social</h4>
                <ul>
                    <li><a href="https://www.youtube.com/channel/UCj72bZAgJHENdhQnKoYvb5A">YouTube</a></li>
                    <li><a href="https://twitter.com/oneman_video">Twitter</a></li>
                </ul>
            </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p>Copyright © 2019 <Link to="/">One Man Video</Link> a project of <a href="https://mindmillmedia.com/">Mind Mill Media, LLC</a></p>
      </div>
  </div>
)
