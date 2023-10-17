import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart, Home, NavBar } from './components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
