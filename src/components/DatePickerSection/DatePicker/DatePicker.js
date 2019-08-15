/** @jsx jsx */

// https://tresko.dev/create-a-custom-react-date-picker-in-10-minutes
import { useState } from "react"
import { useDatepicker, START_DATE } from "@datepicker-react/hooks"
import { useStateValue } from "../../../state"
import { jsx } from "@emotion/core"
import Month from "./Month"
import NavButton from "./NavButton"
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
      <div>
        <strong>Start date: </strong>
        <p>{date.startDate && date.startDate.toLocaleString()}</p>
      </div>
      <div>
        <strong>End date: </strong>
        <p>{date.endDate && date.endDate.toLocaleString()}</p>
      </div>
      <NavButton onClick={goToPreviousMonths}>Previous</NavButton>
      <NavButton onClick={goToNextMonths}>Next</NavButton>
      <div
        css={{
          display: "grid",
          margin: "32px 0 0",
          gridTemplateColumns: `repeat(${activeMonths.length}, 300px)`,
          gridGap: "0 64px",
        }}
      >
        {activeMonths.map(month => (
          <Month
            key={`${month.year}-${month.month}`}
            year={month.year}
            month={month.month}
            firstDayOfWeek={firstDayOfWeek}
          />
        ))}
      </div>
    </DatepickerContext.Provider>
  )
}
export default Datepicker
