import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./navbar.module.scss"

export default props => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      datoCmsGeneral {
        logo {
          url
        }
      }
    }
  `)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContentContainer}>
        <img
          className={styles.logo}
          alt="logo"
          src={data.datoCmsGeneral.logo.url}
        />

        <ul className={styles.links}>
          <li className={styles.links__item}>How it works</li>
          <li className={styles.links__item}>Contact</li>
        </ul>
      </div>
    </nav>
  )
}
