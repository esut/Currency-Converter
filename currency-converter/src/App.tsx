import CurrencyConverter from '@/components/CurrencyConverter.js'; 
import Footer from './components/Footer.js'; 





function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-4" >
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Home</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Support</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Help</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">More</a></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Currency Converter</h1>
        <CurrencyConverter />
      </main>
      <Footer />

    </div>
  )
}

export default App