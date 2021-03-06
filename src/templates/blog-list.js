import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"
import Pagination from "../components/Pagination"
import { GridWrapper, Line } from "../components/GridPost/styled"
import Slideshow from "../components/Carousel"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Deserto Vermelho" />
      <Slideshow />
      <Line />
      <GridWrapper>
        {postList.map(
          ({
            node: {
              frontmatter: {
                tags,
                author,
                date,
                description,
                title,
                image
              },
              timeToRead,
              fields: { slug },
            },
          }) => (
            <PostItem
              slug={slug}
              tags={tags}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
              image={image}
              author={author}
            />
          )
        )}
      </GridWrapper>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}
export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            author
            tags
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 350
                  height: 200
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  quality: 50
                  breakpoints: [750, 1080, 1366, 1920]
                  backgroundColor: "transparent"
                )
              }
            }
          }
          timeToRead
        }
      }
    }
  }
`
export default BlogList
