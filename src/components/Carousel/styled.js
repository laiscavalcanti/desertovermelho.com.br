import styled from "styled-components"
import media from "styled-media-query"
import { Link }from "gatsby"


export const CarouselWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 2rem;
  ${media.lessThan("large")`
    display: flex;
    flex-direction: column;
`}
  .swiper-container {
    display: flex;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    z-index: 0;
  }
  .slideshow {
    display: flex;
    text-align: left;
    width: 100%;
    height: 100%;
    color: black;
    padding: 0;

    .swiper-button-next,
    .swiper-button-prev {
      color: #ffffff;
      width: 10px;
      margin: 10px;
      cursor: pointer;
      ${media.lessThan("large")`
        width: 20px;
        height: 20px;
        top: 30%;
`}
    }

    .swiper-pagination {
      bottom: 0px;

      .swiper-pagination-bullet {
        position: relative;
        background: transparent !important;
        width: auto;
        opacity: 0.5;
        
        &:focus {
          outline: none;
        }
        &:before {
          cursor: pointer;
          display: inline-block;
          width: 20px;
          font-size: 20px;
          color: var(--black);
        }

        &:first-child:before {
          content: "◼";
          color: #be1622;
        }
        &:nth-child(2):before {
          content: "◼";
          color: #be1622;
        }
        &:nth-child(3):before {
          content: "◼";
          color: #be1622;
        }
        &:nth-child(4):before {
          content: "◼";
          color: #be1622;
        }
        &:nth-child(5):before {
          content: "◼";
          color: #be1622;
        }
        &:nth-child(6):before {
          content: "◼";
          color: #be1622;
        }
        &:nth-child(7):before {
          content: "◼";
          color: #be1622;
        }
      }
      .swiper-pagination-bullet-active {
        margin: 10px 30px 0 0;
        position: relative;
        opacity: 1;

        &:after {
          content: "";
          width: 30px;
          position: absolute;
          left: 25px;
          top: 70px;
        }
        &:last-child {
          margin: 0px 8px 0 0;
          &:after {
            display: none;
          }
        }
      }
    }
  }
`
export const CarouselLink = styled(Link)`
 display: flex;
  width: 100%;
  color: var(--black);
  height: 30rem;
  padding: 0.5rem 0rem 3rem 0rem;

`
export const CarouselImage = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 30rem;
  ${media.lessThan("large")`
  position: relative;
    display: flex;
    width: 100%;
    height: 22rem;
`}
`
export const CarouselInfo = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 3rem 1rem 0 1rem;
  width: 40%;
  left: 20px;
  bottom: 20px;
  font-family: "Lato", sans-serif;
  ${media.lessThan("large")`
  position: absolute;
    display: flex;
    width: 100%;
    margin: 1.5rem 0rem 0 0rem;
    padding: 0 3rem 0 .5rem;
`}
  &:hover {
    color: var(--backgroundSelection);
    transition: opacity 0.6s, transform 0.3s;
  }
`
export const CarouselDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 1rem 0 0 0;
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  opacity: 0.7;
  ${media.lessThan("large")`
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
`}
`
export const CarouselTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin: 2.5rem 1rem 0rem 1rem;
  text-align: center;
  font-family: "Share Tech Mono", monospace;
  line-height: 1.3;
  font-size: 2.7rem;
  font-weight: 700;
  line-height: 50px;
  background-color: #be1622;
  color: #ffffff;
  ${media.lessThan("large")`
    width: 100%;
    margin: 1rem 0.5rem 0 0.3rem;
    font-size: 1.5rem;
    line-height: 1.1;
`}
`
export const CarouselAuthor = styled.span`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  margin: 2rem 0 0 0;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  font-size: 0.8rem;
  opacity: 0.7;
  ${media.lessThan("large")`
    margin: 1rem 0.5rem 0 0.3rem;
    font-size: 0.7rem;
    line-height: 1.1;
`}
`
export const CarouselDescription = styled.span`
  display: flex;
  justify-content: center;
  margin: 2.5rem 2rem 0rem 2rem;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 300;
  font-family: "Lato", sans-serif;
  line-height: 1.3;
  background-color: var(--sameColorBlack);
  color: var(--sameColorWhite);
  ${media.lessThan("large")`
    margin: 1rem 1rem 0 1rem;
    font-size: 1rem;
    line-height: 1.1;
`}
`
