import React from "react"
import Hero from "../components/Hero/Hero"
import SearchItems from "../components/SearchItems/SearchItems"
import RentalItems from "../components/RentalItems/RentalItems"
import Summary from "../components/Summary/Summary"
import { StateProvider } from "../state"
import * as actionTypes from "../state/actionTypes"

export default () => {
  const initialState = {
    searchWord: "",
    bookingRequestChart: [],
    date: {
      startDate: null,
      endDate: null,
      numberOfDays: null,
    },
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
        return {
          ...state,
          bookingRequestChart: state.bookingRequestChart.filter(
            item => item.id !== action.requestItemId
          ),
        }

      case actionTypes.DATE_CHANGED:
        return {
          ...state,
          date: action.date,
        }

      default:
        return state
    }
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Hero />
      <SearchItems />
      <RentalItems />
      <Summary />
    </StateProvider>
  )
}
