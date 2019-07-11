import React from "react"
import { excerpText } from "../../../utils"
import styles from "./rentalItem.module.scss"

export default ({ title, description, price, tags, image, id }) => {
  return (
    <div className={styles.rentalItem}>
      <div className={styles.topSection}>
        <h3 className={styles.title}>{title}</h3>
        <div
          className={styles.bgImage}
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className={styles.bottomSection}>
        <p className={styles.description}>{excerpText(description)}</p>
        <p className={styles.price}>{price}</p>
        <button className={styles.button}>Make booking request</button>
      </div>
    </div>
  )
}
