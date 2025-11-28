import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import SupplyChain from './components/SupplyChain'
import Value from './components/Value'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <SupplyChain />
      <Value />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
