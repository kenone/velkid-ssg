import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"
import { useStateValue } from "../../../../state"
import styles from "./dateRange.module.scss"

const DateRange = () => {
  const [{ date }, dispatch] = useStateValue()

  const dateConfig = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  }

  /* Render Start date */
  const renderStartDate = () => {
    return date.startDate
      ? renderStartDateElement()
      : renderStartDateDefaultTextElement()
  }
  const renderStartDateDefaultTextElement = () => {
    return <span className={styles.defaultText}>Start date</span>
  }

  const renderStartDateElement = () => {
    return (
      <span className={styles.dateText}>
        {date.startDate.toLocaleString("en-US", dateConfig)}
      </span>
    )
  }

  /* Render End date */
  const renderEndDate = () => {
    return date.endDate
      ? renderEndDateElement()
      : renderEndDateDefaultTextElement()
  }

  const renderEndDateDefaultTextElement = () => {
    return <span className={styles.defaultText}>End date</span>
  }

  const renderEndDateElement = () => {
    return (
      <span className={styles.dateText}>
        {date.endDate.toLocaleString("en-US", dateConfig)}
      </span>
    )
  }

  return (
    <div className={styles.dateRange}>
      {renderStartDate()}
      <FontAwesomeIcon icon={faLongArrowAltRight} />
      {renderEndDate()}
    </div>
  )
}
export default DateRange
