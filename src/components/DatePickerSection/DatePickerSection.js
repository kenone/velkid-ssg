import React from "react"

import DatePicker from "./DatePicker/DatePicker"
import InnerContainer from "../HOC/InnerContainer/InnerContainer"

import styles from "./datePicker.module.scss"

export default () => {
  return (
    <section className={styles.datePickerSection}>
      <InnerContainer>
        <h1>Choose date</h1>
        <DatePicker />
      </InnerContainer>
    </section>
  )
}
