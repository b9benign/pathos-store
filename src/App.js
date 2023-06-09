import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/routes/navigation/navigation.component';
import AuthPage from './components/routes/authentication/authentication.component';
import HomePage from './components/routes/home/home.component';
import AboutPage from './components/routes/about/about.component';
import StorePage from './components/routes/store/store.component';

function App() {
  return (
    <Routes>
      <Route element={<Navigation />}>
        <Route path ="/" index element={<HomePage />} />
        <Route path="/auth" element={< AuthPage/>} />
        <Route path="/about" element={< AboutPage/>} />
        <Route path="/store" element={< StorePage/>} />
      </Route>
    </Routes>
    
  );
}

export default App;
