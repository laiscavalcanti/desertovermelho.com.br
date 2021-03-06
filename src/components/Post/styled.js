import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const PostLine = styled.div`
  height: 100rem;
  border-top: 1px solid red;
  margin-left: -5rem;
`
export const PostWrapper = styled.section`
  display: flex;
  align-items: center;
  margin: 4rem 0rem 3rem 0rem;
  width: 100%;
  height: auto;
  ${media.lessThan("large")`
    flex-direction: column;
    margin: 4rem 2rem 0rem 0rem;
  `}
`
export const PostHeader = styled.header`
  display: flex;
  max-width: 40rem;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin: 3rem 0 1rem 0;
  ${media.lessThan("large")`
    margin: 0.5rem 1rem 1rem 1rem;
    padding: 1rem 0 0;
    max-width: 100%;
  `}
`
export const PostTag = styled(Link)`
  display: flex;
  margin-top: .1rem;
  color: var(--black);
  text-decoration: none;
  font-size: 1rem;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  opacity: 0.9;
  &::selection {
    color: var(--white);
    background: var(--backgroundHoverPostItem);
  }
  ${media.lessThan("large")`
    opacity: 1;
    font-size: 0.95rem;
  `}
`
export const PostTitle = styled.h1`
  max-width: 35rem;
  margin: 0rem 2rem 0.5rem 3rem;
  padding: 0 1rem 0 1rem;
  font-family: "Share Tech Mono", monospace;
  font-size: 2.7rem;
  font-weight: 700;
  line-height: 1.15;
  color: var(--black);
  &::selection {
    color: var(--colorSelection);
    background: var(--backgroundSelection);
  }
  ${media.lessThan("large")`
    text-align: start;
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
    font-size: 1.7rem;
    margin: 1rem 0 1rem  0;  `}
`
export const PostDescription = styled.h2`
  max-width: 35rem;
  margin: 1rem 2rem 0.5rem 4rem;
  letter-spacing: 0rem;
  font-weight: 100;
  line-height: 1.5;
  font-family: "Lato", sans-serif;
  font-size: 1.3rem;
  font-style: italic;
  text-align: start;
  color: var(--black);
  opacity: 1;
  &::selection {
    color: var(--colorSelection);
    background: var(--backgroundSelection);
  }
  ${media.lessThan("large")`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
    margin: 0rem;
    text-align: start;
    opacity: 1;
    font-size: 0.9rem;
  `}
`
export const PostDate = styled.p`
  max-width: 35rem;
  height: auto;
  text-align: end;
  color: var(--colorHover);
  font-size: 0.9rem;
  font-weight: 100;
  font-family: "Lato", sans-serif;
  margin: 1.5rem 1.5rem 0.5rem 18.5rem;
  opacity: 0.7;
  &::selection {
    color: var(--colorSelection);
    background: var(--backgroundSelection);
  }
  ${media.lessThan("large")`
    opacity: 0.7;
    color: var(--colorHover);
    margin: 1rem 0rem 0 6rem;
    padding: 0.5rem;
    font-size: 0.7rem;
  `}
`
export const IconWrapper = styled.div`
  display: flex;
  justify-content: start;
  margin-left: 20rem;
  margin-bottom: 1.5rem;
  color: var(--white);
  opacity: 0.6;
  ${media.lessThan("large")`
    margin-left: 0;
    margin-right: 15rem;
   padding: 1rem 0 0 1rem;
  `};
`
export const Icon = styled.div`
  margin-right: 0.5rem;
  width: 25px;
  height: 25px;
  color: var(--black);
  opacity: 0.9;
  cursor: pointer;
  ${media.lessThan("large")`
  width: 25px;
  height: 25px;
  `}
`
export const IconArrowWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0.5rem 2rem 0rem;
`
export const PostImage = styled.div`
  display: block;
  width: 50%;
  height: 22rem;
  margin-top: 4rem;
  margin-left: 8.5rem;
  ${media.lessThan("large")`
    display: flex;
    width: 100%;
    height: 22rem;
    margin: 0;
`}
`
export const MainContent = styled.article`
  max-width: 47.5rem;
  padding: 8rem 0rem 2rem 7rem;
  text-align: justify;
  ${media.lessThan("large")`
    padding: 0;
    padding: 2rem 0;
    max-width: 100%;
    margin: 0 0.5rem 0 0.5rem;
  `}
  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    font-family: "Lato", sans-serif;
    color: var(--texts);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.8;
    letter-spacing: 0.005rem;
    padding: 0 1.4rem;
    &::selection {
      color: var(--colorSelection);
      background: var(--backgroundSelection);
    }

    ${media.lessThan("large")`
      padding: 0 1rem;
      word-break: break-word;
    `}
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
    ${media.lessThan("large")`
      padding: 0 1rem;
    `}
  }
  blockquote {
    color: #fff;
    border-left: 0.3rem solid var(--colorHover);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid #38444d;
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
    ${media.lessThan("large")`
      font-size: 1.875rem;
    `}
  }
  h2 {
    font-size: 2.1rem;
    ${media.lessThan("large")`
      font-size: 1.375rem;
    `}
  }
  h3 {
    font-size: 1.6rem;
    ${media.lessThan("large")`
      font-size: 1.125rem;
    `}
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    border-bottom: 1px dashed #1fa1f2;
    color: #1fa1f2;
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: #fff;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`
