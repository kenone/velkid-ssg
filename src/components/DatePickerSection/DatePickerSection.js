// import "react-dates/initialize"

import React from "react"
// import { useStateValue } from "../../../state"
// import * as actionTypes from "../../../state/actionTypes"
// import { DateRangePicker } from "react-dates"
import DatePicker from "./DatePicker/DatePicker"
import InnerContainer from "../HOC/InnerContainer/InnerContainer"

import styles from "./datePicker.module.scss"

export default () => {
  //   const [{ bookingRequestChart }, dispatch] = useStateValue()

  return (
    <section className={styles.datePickerSection}>
      <InnerContainer>
        <DatePicker />
        <p>hello date</p>
      </InnerContainer>
    </section>
  )
}

// import React from 'react';
//   export default React.PureComponent;
//   export const pureComponentAvailable = true;
