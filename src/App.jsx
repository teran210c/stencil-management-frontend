import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Layout from './layout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthView from "./pages/AuthView"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/auth"
          element={<AuthView />}
        />

        <Route
          path="/*"
          element={<Layout />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App
