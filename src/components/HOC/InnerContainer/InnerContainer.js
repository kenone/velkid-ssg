import React from "react"
import styles from "./innerContainer.module.scss"

export default ({ children }) => (
  <div className={styles.innerContainer}>{children}</div>
)
