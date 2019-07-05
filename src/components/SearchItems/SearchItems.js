import React from "react"
import { useStateValue } from "../../state"
import * as actionTypes from "../../state/actionTypes"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import InnerContainer from "../HOC/InnerContainer/InnerContainer"
import styles from "./searchItems.module.scss"

export default () => {
  const [{ searchWord }, dispatch] = useStateValue()

  const handleSearchWordChanged = value => {
    dispatch({ type: actionTypes.SEARCH_WORD_CHANGED, newSearchWord: value })
  }

  return (
    <section className={styles.searchSection}>
      <InnerContainer>
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
      </InnerContainer>
    </section>
  )
}
