import React from "react"
import styles from "./navbar.module.scss"

export default () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.brandName}>Velkid</h1>

      <ul className={styles.links}>
        <li className={styles.links__item}>How it works</li>
        <li className={styles.links__item}>Contact</li>
      </ul>
    </nav>
  )
}
