import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import RentalItem from "./RentalItem/RentalItem"
import InnerContainer from "../HOC/InnerContainer/InnerContainer"
import styles from "./rentalItems.module.scss"

export default () => {
  const data = useStaticQuery(graphql`
    query RentalItems {
      allDatoCmsRentalItem {
        nodes {
          id
          title
          description
          image {
            url
          }
          tags {
            tagname
          }
          price
          location {
            latitude
            longitude
          }
          isAvailable
        }
      }
    }
  `)

  const rentalItemsData = data.allDatoCmsRentalItem.nodes

  // use UseState-hook to store items
  console.log("rental Items data", rentalItemsData)

  const renderRentalItems = rentalItemsData.map(item => (
    <RentalItem key={item.id} data={item} />
  ))

  return (
    <section className={styles.rentalItemsSection}>
      <InnerContainer>{renderRentalItems}</InnerContainer>
    </section>
  )
}
