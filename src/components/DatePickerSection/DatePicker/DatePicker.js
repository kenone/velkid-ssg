/** @jsx jsx */

// https://tresko.dev/create-a-custom-react-date-picker-in-10-minutes
import { useState } from "react"
import { useDatepicker, START_DATE } from "@datepicker-react/hooks"
import { useStateValue } from "../../../state"
import Moment from "react-moment"

import { jsx } from "@emotion/core"
import Month from "./Month"
import DatepickerContext from "./datepickerContext"
import * as actionTypes from "../../../state/actionTypes"

function Datepicker() {
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE,
  })
  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonths,
    goToNextMonths,
  } = useDatepicker({
    startDate: state.startDate,
    endDate: state.endDate,
    focusedInput: state.focusedInput,
    onDatesChange: handleDateChange,
  })

  const [{ date }, dispatch] = useStateValue()

  const storeDate = data => {
    dispatch({ type: actionTypes.DATE_CHANGED, date: data })
  }

  function handleDateChange(data) {
    if (!data.focusedInput) {
      setState({ ...data, focusedInput: START_DATE })
      storeDate(data)
    } else {
      setState(data)
      storeDate(data)
    }
  }
  if (date.startDate) {
    console.log(new Date(date.startDate))
  }
  return (
    <DatepickerContext.Provider
      value={{
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover,
      }}
    >
      <div
        css={{
          maxWidth: "350px",
          margin: "0 auto",
        }}
      >
        {
          <Month
            key={`${activeMonths[0].year}-${activeMonths[0].month}`}
            year={activeMonths[0].year}
            month={activeMonths[0].month}
            firstDayOfWeek={firstDayOfWeek}
            goToPreviousMonths={goToPreviousMonths}
            goToNextMonths={goToNextMonths}
          />
        }

        <div css={{ margin: "20px 0" }}>
          <span css={{ display: "block" }}>
            <strong>Start date: </strong>{" "}
            {date.startDate && date.startDate.toLocaleString()}
          </span>

          <span>
            <strong>End date: </strong>{" "}
            {date.endDate && date.endDate.toLocaleString()}
          </span>
        </div>
      </div>
    </DatepickerContext.Provider>
  )
}
export default Datepicker
