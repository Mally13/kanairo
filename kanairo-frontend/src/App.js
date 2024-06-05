import React from 'react';
import ReactDOM from 'react-dom';
// import "./App.css"
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';


function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default App;
