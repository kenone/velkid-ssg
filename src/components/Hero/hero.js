import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default props => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      datoCmsHero {
        title
        pitch
      }
    }
  `)

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{data.datoCmsHero.title}</h1>
        <div className="devider" />
        <p>{data.datoCmsHero.pitch}</p>
      </div>
    </section>
  )
}
