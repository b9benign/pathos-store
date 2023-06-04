import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/routes/navigation/navigation.component';
import AuthPage from './components/routes/authentication/authentication.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/auth" element={< AuthPage/>}/>
      </Route>
    </Routes>
    
  );
}

export default App;
