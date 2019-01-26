import React from 'react'
import { Link } from 'gatsby'
import styles from './article-card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import HamburgerMenu from 'react-hamburger-menu'
import { CSSTransitionGroup } from 'react-transition-group'

class ArticleCard extends React.Component { 

  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className={styles.articleCard}>
        <div className={styles.imageSide} style={{
            backgroundImage: `url('${this.props.articleData.heroImage.fluid.src}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top'
        }}>
        </div>
        <div className={styles.textSide}>
            <h4>Article</h4>
            <h2><Link to={`/blog/${this.props.articleData.slug}`}>{this.props.articleData.title}</Link></h2>
            <p className={styles.description} dangerouslySetInnerHTML={{
                __html: this.props.articleData.description.childMarkdownRemark.html
              }}></p>
        </div>
      </div>
    )
  }
}

export default ArticleCard
