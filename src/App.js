import { Route, Routes } from 'react-router-dom';
import Navigation from './components/routes/navigation/navigation.component';
import AuthPage from './components/routes/authentication/authentication.component';
import HomePage from './components/routes/home/home.component';
import AboutPage from './components/routes/about/about.component';
import StorePage from './components/routes/store/store.component';
import Footer from './components/footer/footer.component';
import CartPreview from './components/cart-preview/cart-preview-component';
import LovedPage from './components/routes/loved/loved.component';
import './App.css';


function App() {
  return (
    <div className="app-container">
      <div className="app-content">
        <Navigation />
        <CartPreview />
        <Routes>
            <Route path ="/" index element={<HomePage />} />
            <Route path="/auth" element={< AuthPage/>} />
            <Route path="/about" element={< AboutPage/>} />
            <Route path="/store" element={< StorePage/>} />
            <Route path="/loved" element={<LovedPage/>} />
        </Routes>
      </div>
    <Footer />
    </div>
  );
}

export default App;
