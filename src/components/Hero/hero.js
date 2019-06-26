import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./hero.module.scss"

export default props => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      datoCmsHero {
        title
        pitch
        image {
          url
        }
      }
    }
  `)

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${data.datoCmsHero.image.url})` }}
    >
      <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{data.datoCmsHero.title}</h1>
          <div className={styles.devider} />
          <p className={styles.heroPitch}>{data.datoCmsHero.pitch}</p>
        </div>
      </div>
    </section>
  )
}
