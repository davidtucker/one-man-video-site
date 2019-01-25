import React from 'react'
import Img from 'gatsby-image'
import styles from './hero.module.css'
import Byline from './byline'

export default class Hero extends React.Component {

  constructor(props) {
    super(props);
  }

  renderSubtitle(props) {
    if(this.props.subtitle) {
      return (
        <h4>{this.props.subtitle}</h4>
      );
    }
  }

  renderByline() {
    if(this.props.hasOwnProperty('authorName') && this.props.authorName.length > 1) {
      return (
        <Byline 
          authorName={this.props.authorName}
          authorImage={this.props.authorImage}
          publishDate={this.props.publishDate} />
      );
    }
  }

  render () {
    return (
      <div>
        <div className={styles.hero} style={{
          backgroundImage: `linear-gradient(black, black), url(${this.props.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundBlendMode: 'saturation'
        }}>
          <div className={styles.heroContent}>
            {this.renderSubtitle()}
            <h2>{this.props.title}</h2>
            {this.renderByline()}
          </div>
        </div>
      </div>
    );
  }

}
