import React from "react"
import styles from "./chartList.module.scss"

import { useStateValue } from "../../state"
import * as actionTypes from "../../state/actionTypes"

const ChartList = () => {
  const [{ bookingRequestChart, date }, dispatch] = useStateValue()

  let totalPrice = 0

  bookingRequestChart.forEach(item => {
    totalPrice += date.numberOfDays * item.price
  })

  const renderPrice = price => {
    if (date.numberOfDays) {
      return `${date.numberOfDays * price} SEK (
            ${price} / day)`
    } else {
      return null
    }
  }

  return (
    <div className={styles.chartList}>
      <p>Days: {date.numberOfDays}</p>
      <ul>
        {bookingRequestChart.map(item => {
          return (
            <li key={item.id}>
              {item.title} - {renderPrice(item.price)}
            </li>
          )
        })}
      </ul>

      {date.numberOfDays && <p>{`total price: ${totalPrice} SEK`}</p>}
    </div>
  )
}

export default ChartList
