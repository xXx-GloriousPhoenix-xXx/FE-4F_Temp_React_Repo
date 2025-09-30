import './App.css';

import { BrowserRouter, Routes, Route } from "react-router";

import Landing from './pages/Landing/Landing';

function App() {
    return <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/landing" element={<Landing/>} />
            </Routes>
        </BrowserRouter>
    </div>
}

export default App;
