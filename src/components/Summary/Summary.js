import React from "react"

import DatePicker from "../DatePicker/DatePicker"
import InnerContainer from "../HOC/InnerContainer/InnerContainer"
import ChartList from "../ChartList/ChartList"
import styles from "./summary.module.scss"

export default () => {
  return (
    <section className={styles.summarySection}>
      <InnerContainer>
        <h1>Summary</h1>
        <ChartList />
        <DatePicker />
      </InnerContainer>
    </section>
  )
}
