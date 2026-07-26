import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import ProductPreview from './components/ProductPreview'
import Pricing from './components/Pricing'
import Offer from './components/Offer'
import EmailCapture from './components/EmailCapture'
import Dashboard from './components/Dashboard'
import Delivery from './components/Delivery'
import Payment from './components/Payment'
import Testimonials from './components/Testimonials'
import Trust from './components/Trust'
import FAQ from './components/FAQ'
import Referral from './components/Referral'
import Blog from './components/Blog'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <ProductPreview />
        <Pricing />
        <Offer />
        <EmailCapture />
        <Dashboard />
        <Delivery />
        <Payment />
        <Testimonials />
        <Trust />
        <FAQ />
        <Referral />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
