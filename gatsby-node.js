const Promise = require('bluebird')
const path = require('path')

const createBlogPosts = (graphql, createPage) => {
  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
};

const createPages = (graphql, createPage) => {
  return new Promise((resolve, reject) => {
    const pageComponent = path.resolve('./src/templates/page.js')
    resolve(
      graphql(
        `
          {
            allContentfulPage {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const pages = result.data.allContentfulPage.edges
        pages.forEach((page, index) => {
          createPage({
            path: `/${page.node.slug}/`,
            component: pageComponent,
            context: {
              slug: page.node.slug
            },
          })
        })
      })
    )
  })
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return Promise.all([createBlogPosts(graphql, createPage), createPages(graphql, createPage)]);
}
