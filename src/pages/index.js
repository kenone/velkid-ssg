import React from "react"
import Hero from "../components/Hero/Hero"
import SearchItems from "../components/SearchItems/SearchItems"
import RentalItems from "../components/RentalItems/RentalItems"
import { StateProvider } from "../state"
import * as actionTypes from "../state/actionTypes"

export default () => {
  const initialState = {
    searchWord: "",
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SEARCH_WORD_CHANGED:
        return {
          ...state,
          searchWord: action.newSearchWord,
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
    </StateProvider>
  )
}
