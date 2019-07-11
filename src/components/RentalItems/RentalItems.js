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
            url: fixed(height: 400) {
              src
            }
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

  const renderRentalItems = rentalItemsData.map(item => (
    <RentalItem
      key={item.id}
      title={item.title}
      description={item.description}
      price={item.price}
      tags={item.tagname}
      id={item.id}
      image={item.image[0].url.src}
    />
  ))

  return (
    <section className={styles.rentalItemsSection}>
      <InnerContainer>
        <div className={styles.grid}>{renderRentalItems}</div>
      </InnerContainer>
    </section>
  )
}
