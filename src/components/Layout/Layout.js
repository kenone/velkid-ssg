import React from "react"
import Navbar from "../Navbar/Navbar"

export default ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
)
