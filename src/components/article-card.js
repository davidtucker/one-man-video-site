import React from 'react'
import { Link } from 'gatsby'
import styles from './article-card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import HamburgerMenu from 'react-hamburger-menu'
import { CSSTransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types'

const ArticleCard = ({ articleData }) => (
  <div className={styles.articleCard}>
      <div className={styles.imageSide} style={{
          backgroundImage: `url('${articleData.heroImage.fluid.src}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top'
      }}>
      </div>
      <div className={styles.textSide}>
          <h4>Article</h4>
          <h2><Link to={`/blog/${articleData.slug}`}>{articleData.title}</Link></h2>
          <p className={styles.description} dangerouslySetInnerHTML={{
              __html: articleData.description.description
            }}></p>
      </div>
    </div>
)

ArticleCard.propTypes = {
  articleData: PropTypes.object,
}

export default ArticleCard
