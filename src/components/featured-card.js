import React from 'react'
import { Link } from 'gatsby'
import styles from './featured-card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import HamburgerMenu from 'react-hamburger-menu'
import { CSSTransitionGroup } from 'react-transition-group'

class FeaturedArticleCard extends React.Component { 

  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className={styles.articleCard}>
        <div className={styles.imageSide} style={{
            backgroundImage: 'url(/images/featured-1.jpg)'
        }}>
        </div>
        <div className={styles.textSide}>
            <h4>Featured Article</h4>
            <h2>Exporting Videos for the HyperDeck Mini with After Effects</h2>
            <p className={styles.description}>It is not always easy to configure videos for the HyperDeck Mini. We'll show you how to get them exported from After Effects.</p>
            <p className={styles.dateTime}>January 18, 2019</p>
            <div className={styles.byline}>
                <img className={styles.authorImage} src="/images/david-tucker.png" />
                <p className={styles.authorName}>Written by <Link to="/">David Tucker</Link></p>
            </div>
            
        </div>
      </div>
    )
  }
}

export default FeaturedArticleCard
