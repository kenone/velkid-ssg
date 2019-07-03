import React from "react"
import { useStateValue } from "../../state"
import * as actionTypes from "../../state/actionTypes"
import styles from "./searchItems.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default () => {
  const [{ searchWord }, dispatch] = useStateValue()

  const handleSearchWordChanged = value => {
    dispatch({ type: actionTypes.SEARCH_WORD_CHANGED, newSearchWord: value })
  }

  return (
    <section className={styles.searchSection}>
      <form
        className={styles.searchForm}
        onSubmit={event => event.preventDefault()}
      >
        <h2 className={styles.formTitle}>Find an item to rent</h2>
        <div className={styles.inputWrapper}>
          <span className={styles.iconWrapper}>
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            className={styles.inputField}
            type="text"
            value={searchWord}
            onChange={event => handleSearchWordChanged(event.target.value)}
          />
        </div>
      </form>

      <div className="search-graphic">
        <p>some graphic</p>
      </div>
    </section>
  )
}
