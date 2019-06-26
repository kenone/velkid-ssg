import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import RentalItem from "../RentalItem/RentalItem"

export default () => {
  const data = useStaticQuery(graphql`
    query RentalItems {
      allDatoCmsRentalItem {
        edges {
          node {
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
    }
  `)

  const rentalItemsData = data.allDatoCmsRentalItem.edges

  // use UseState-hook to store items
  console.log(rentalItemsData)

  const rentalItems = rentalItemsData.map(item => (
    <RentalItem data={item.node} />
  ))

  return (
    <section style={{ backgroundColor: "red" }} className="rental-items">
      <div style={{ backgroundColor: "blue", height: "200px" }} />
      />
      {rentalItems}
    </section>
  )
}
