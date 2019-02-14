const removeMarkdown = require('remove-markdown');
const moment = require('moment');

const postQuery = `{
    posts: allContentfulBlogPost {
        edges {
            node {
                objectID: slug
                publishDate
                title
                body {
                    body
                }
                videoTranscript {
                    videoTranscript
                }
            }
        }
    }
}`
  
const flatten = arr =>
arr.map((obj) => ({
    title: obj.node.title,
    objectID: obj.node.objectID,
    publishDate: new Date(obj.node.publishDate).getTime(),
    displayDate: moment(obj.node.publishDate).format('MMMM D, YYYY'),
    url: `/blog/${obj.node.objectID}`,
    body: `${removeMarkdown(obj.node.body.body)} ${removeMarkdown(obj.node.videoTranscript.videoTranscript)}`
}))

const settings = { attributesToSnippet: [
    `body:20`
] }

const queries = [
    {
        query: postQuery,
        transformer: ({ data }) => flatten(data.posts.edges),
        indexName: `${process.env.SEARCH_INDEX_PREFIX}_omv_posts`,
        settings
    }
]

module.exports = queries