import React, { Component, createRef } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Hero from '../components/hero'
import styles from './search.module.css'

import {
    InstantSearch,
    Hits,
    SearchBox,
    Highlight,
    RefinementList,
    Pagination,
    CurrentRefinements,
    ClearRefinements,
    Configure,
    connectStateResults,

  } from 'react-instantsearch-dom';

  import PostHit from '../components/search/PostHit'



const Stats = connectStateResults(
  ({ searchResults: res, searchState }) =>
    res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
)

class Results extends React.Component {
  
  render() {
    const { searchState, searchResults, children } = this.props;
    const hasResults = searchResults && searchResults.nbHits !== 0;
    const hasQuery = searchState.query !== '' && searchState.query !== undefined;
    return (
      <div>
        { (hasQuery && hasResults) ? children : null }
        <div hidden={hasResults || !hasQuery} className={styles.noResults}>
            No results found for <span className={styles.term}>{searchState.query}</span>
        </div>   
      </div>
    );
  }
}

const ConnectedResults = connectStateResults(Results);

class SearchPage extends React.Component {

  render() {
    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title="Search | One Man Video" />
          <div className="wrapper">
            <h2 className={styles.pageTitle}>Search.</h2>
            <p className={styles.pageSubtitle}>Please enter your search terms below.</p>
            <InstantSearch
                appId={process.env.GATSBY_ALGOLIA_APP_ID}
                apiKey={process.env.GATSBY_ALGOLIA_SEARCH_KEY}
                indexName={process.env.GATSBY_SEARCH_INDEX_PREFIX + '_omv_posts'}
                onSearchStateChange={this.updateState}
                root={{ Root: 'div' }}>
                <div className="ais-container">
                    <Configure hitsPerPage={5} />
                    <SearchBox />
                    <ConnectedResults>
                      <div className={styles.stats}>
                        <Stats />
                      </div>
                      <Hits hitComponent={PostHit} />
                      <Pagination />
                    </ConnectedResults>
                </div>
            </InstantSearch>
        </div>
      </div>
    </Layout>
    )
  }
}

export default SearchPage
