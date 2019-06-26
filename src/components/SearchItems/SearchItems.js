import React from "react"
import { useStateValue } from "../../state"
import * as actionTypes from "../../state/actionTypes"

export default () => {
  const [{ searchWord }, dispatch] = useStateValue()

  const handleSearchWordChanged = value => {
    dispatch({ type: actionTypes.SEARCH_WORD_CHANGED, newSearchWord: value })
  }

  return (
    <section>
      <form onSubmit={event => event.preventDefault()}>
        <h2 className="form-title">Find an item to rent</h2>
        <input
          type="text"
          value={searchWord}
          onChange={event => handleSearchWordChanged(event.target.value)}
        />
      </form>

      <div className="search-graphic">
        <p>some graphic</p>
      </div>
    </section>
  )
}
