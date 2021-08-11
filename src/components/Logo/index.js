import React from "react"
import { Link } from "gatsby"
import * as S  from'./styled'
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => (
  <Link to="/" >
    <S.LogoWrapper>
      <StaticImage src="./desertologo.svg" alt="logo" className="logo" />
      </S.LogoWrapper>
  </Link>
)

export default Logo
