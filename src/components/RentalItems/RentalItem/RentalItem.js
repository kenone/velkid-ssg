import React from "react"
import { useStateValue } from "../../../state"
import * as actionTypes from "../../../state/actionTypes"
import { excerpText } from "../../../utils"
import cx from "classnames"
import styles from "./rentalItem.module.scss"

export default ({ title, description, price, tags, image, id }) => {
  const [{ bookingRequestChart }, dispatch] = useStateValue()

  let isAdded

  if (bookingRequestChart.filter(item => item.id === id).length > 0) {
    isAdded = true
  } else {
    isAdded = false
  }

  const handleAddOrRemoveItem = () => {
    const item = {
      title,
      description,
      price,
      tags,
      image,
      id,
    }

    if (isAdded) {
      dispatch({ type: actionTypes.REMOVE_REQUEST, requestItemId: item.id })
    } else {
      dispatch({ type: actionTypes.ADD_REQUEST, requestItem: item })
    }
  }

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
        <div>
          <p>
            <span className={styles.priceLabel}>Price </span>
            <span className={styles.price}>{`${price} SEK / day`}</span>
          </p>
          <button
            className={cx(styles.button, { [styles.addedToRequests]: isAdded })}
            onClick={handleAddOrRemoveItem}
          >
            {isAdded
              ? "Remove from booking requests"
              : "Add to booking request"}
          </button>
        </div>
      </div>
    </div>
  )
}
