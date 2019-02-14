import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import HamburgerMenu from 'react-hamburger-menu'
import { CSSTransitionGroup } from 'react-transition-group'
import { Search } from 'styled-icons/fa-solid/Search'

class Navigation extends React.Component { 

  constructor (props) {
    super(props);
    this.state = {
      showMobileMenu: false
    };
  }

  toggleMobileMenu () {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    })
  }

  render() {
    return (
      <nav role="navigation">
        <div className={styles.navigationBar}>
          <ul className={styles.navigation}>
            <li className={styles.logo}>
              <Link to="/">
                <img src="/images/one-man-video-logo.svg" />
              </Link>
            </li>
            <li className={styles.navigationItem}>
              <Link to="/about/">About</Link>
            </li>
            <li className={styles.navigationItem}>
              <Link to="/blog/">Blog</Link>
            </li>
            <li className={styles.navigationItem}>
              <Link to="/contact/">Contact</Link>
            </li>
            <li className={styles.navigationHighlightedItem}>
              <a href="https://www.youtube.com/channel/UCj72bZAgJHENdhQnKoYvb5A">YouTube</a>
            </li>
            <li className={styles.navigationItem}>
              <Link to="/search/">
                <Search 
                    className="searchIcon" />
              </Link>
            </li>
            <li className={styles.hamburgerIcon}>
              <HamburgerMenu
                isOpen={this.state.showMobileMenu}
                menuClicked={this.toggleMobileMenu.bind(this)}
                width={18}
                height={15}
                strokeWidth={2}
                rotate={0}
                color='white'
                borderRadius={0}
                animationDuration={0.5} />
            </li>
          </ul>
        </div>
        <CSSTransitionGroup
          transitionName="slide"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={200}>
          { this.state.showMobileMenu && <MobileMenu /> }
        </CSSTransitionGroup>
      </nav>
    )
  }
}

class MobileMenu extends React.Component {

  render() {
    return (
      <ul className={styles.mobileNavigation}>
        <li className={styles.mobileNavigationItem}>
          <Link to="/about/">About</Link>
        </li>
        <li className={styles.mobileNavigationItem}>
          <Link to="/blog/">Blog</Link>
        </li>
        <li className={styles.mobileNavigationItem}>
          <Link to="/contact/">Contact</Link>
        </li>
        <li className={styles.mobileNavigationItem}>
          <a href="https://www.youtube.com/channel/UCj72bZAgJHENdhQnKoYvb5A">YouTube</a>
        </li>
        <li className={styles.mobileNavigationItem}>
          <Link to="/search/">Search</Link>
        </li>
      </ul>
    )
  }

}

export default Navigation
