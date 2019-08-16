/** @jsx jsx */

// https://tresko.dev/create-a-custom-react-date-picker-in-10-minutes
import { useState } from "react"
import { jsx } from "@emotion/core"
import { useDatepicker, START_DATE } from "@datepicker-react/hooks"
import { useStateValue } from "../../state"
import * as actionTypes from "../../state/actionTypes"

import Month from "./Month"
import DateRange from "./DateRange/DateRange"

import DatepickerContext from "./datepickerContext"

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
    const oneDayInSeconds = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds

    if (data.startDate && data.endDate) {
      const numberOfDays = Math.round(
        Math.abs(
          (data.startDate.getTime() - data.endDate.getTime()) / oneDayInSeconds
        ) + 1
      )
      data.numberOfDays = numberOfDays
    }

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
        <DateRange />
      </div>
    </DatepickerContext.Provider>
  )
}
export default Datepicker
