import React from "react"
import Navbar from "../Navbar/Navbar"
import "./layout.scss"

export default ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
)
