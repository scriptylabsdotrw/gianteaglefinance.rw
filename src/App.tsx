import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ui/ScrollToTop'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import CalculatorPage from './pages/CalculatorPage'
import ProcessPage from './pages/ProcessPage'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'
import InsightsPage from './pages/InsightsPage'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink-charcoal">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
