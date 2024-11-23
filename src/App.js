import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home_page from './client/home';
import Home from './client/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element ={<Home/>} />
          <Route path = "/Home" element ={<Home/>} />
          <Route/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
