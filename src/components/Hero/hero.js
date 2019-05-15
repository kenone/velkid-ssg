import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      datoCmsHero {
        title
      }
    }
  `)

  return (
    <section className="hero">
      <h1>{data.datoCmsHero.title}</h1>
    </section>
  )
}
