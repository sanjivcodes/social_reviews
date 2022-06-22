import React from "react"
import { Auth } from "./Auth"
import { Intro } from "./Intro"
import { Home } from "./Home"
import  Dashboard  from "./Dashoard"

function App() {
  return (
    <div className="App">
      <Auth />
      <Dashboard />
    </div>
  )
}

export default App
