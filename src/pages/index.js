import React from "react"
import Hero from "../components/Hero/Hero"
import SearchItems from "../components/SearchItems/SearchItems"
import RentalItems from "../components/RentalItems/RentalItems"
import DatePickerSection from "../components/DatePickerSection/DatePickerSection"
import { StateProvider } from "../state"
import * as actionTypes from "../state/actionTypes"

export default () => {
  const initialState = {
    searchWord: "",
    bookingRequestChart: [],
    startDate: "",
    endDate: "",
    // datePicker: {
    //   focusedDate: null,
    //   isDateFocused: () => false,
    //   isDateSelected: () => false,
    //   isDateHovered: () => false,
    //   isDateBlocked: () => false,
    //   isFirstOrLastSelectedDate: () => false,
    //   onDateFocus: () => {},
    //   onDateHover: () => {},
    //   onDateSelect: () => {},
    // },
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SEARCH_WORD_CHANGED:
        return {
          ...state,
          searchWord: action.newSearchWord,
        }

      case actionTypes.ADD_REQUEST:
        return {
          ...state,
          bookingRequestChart: state.bookingRequestChart.concat(
            action.requestItem
          ),
        }

      case actionTypes.REMOVE_REQUEST:
        const updateChart = state.bookingRequestChart.filter(
          item => item.id !== action.requestItemId
        )
        return {
          ...state,
          bookingRequestChart: state.bookingRequestChart.filter(
            item => item.id !== action.requestItemId
          ),
        }
      default:
        return state
    }
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Hero />
      <SearchItems />
      <DatePickerSection />
      <RentalItems />
    </StateProvider>
  )
}
