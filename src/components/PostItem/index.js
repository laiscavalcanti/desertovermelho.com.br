import React from "react"
import PropTypes from "prop-types"
//import getThemeColor from "../../utils/getThemeColor"
import { GatsbyImage, getImage} from 'gatsby-plugin-image'
import * as S from "./styled"

const PostItem = ({ slug, description, title, image, date, tags, author }) => (
  <S.PostItemLink
    to={slug}
  >
    <S.PostWrapper>
      <S.PostItemWrapper>
      <S.PostItemImg>
        <GatsbyImage image={getImage(image)} className=".img" />
      </S.PostItemImg>
        <S.PostItemInfo>
          <S.PostItemDate>
            {date} - {tags}
          </S.PostItemDate>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  tags: PropTypes.array,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  author: PropTypes.object,
}

export default PostItem
