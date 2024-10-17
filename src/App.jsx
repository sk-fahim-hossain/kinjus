import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { useSmoothScoll } from "./hooks/useSmoothScroll"
import Home from "./Pages/Home"

function App(children) {
  useSmoothScoll()
  return (
    <div>
     

      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
