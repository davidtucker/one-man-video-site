import styles from './byline.module.css'
import React from 'react'
import { Link } from 'gatsby'

export default class Byline extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.byline}>
                <img className={styles.authorImage} src={this.props.authorImage} />
                <div className={styles.metadata}>
                  <div className={styles.authorName}><Link to="/">{this.props.authorName}</Link></div>
                  <div className={styles.dateTime}>{this.props.publishDate}</div>
                </div>
            </div>
        )
    }

}          