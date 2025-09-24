import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomePage from './Views/HomePage';
import AboutPage from './Views/AboutPage';
import ProductPage from './Views/ProductPage';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <BrowserRouter> 
        <Header />

        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/about" element={<AboutPage />}></Route>
          <Route exact path="/products/:id" element={<ProductPage />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
