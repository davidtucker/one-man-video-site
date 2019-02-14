import React from 'react'
import { Highlight, Snippet } from 'react-instantsearch-dom'
import { Link } from 'gatsby'
import styles from './search.module.css'

function PostHit({ hit }) {
  return (
    <div className={styles.hitWrapper}>
        <Link to={hit.url} className={styles.hitLink}>
            <h4 className={styles.hitTitle}>
                <Highlight attribute="title" hit={hit} tagName="mark"  />
            </h4>
        </Link>
        <Snippet attribute="body" hit={hit} tagName="mark" className={styles.hitSnippet} />
    </div>)
}

export default PostHit