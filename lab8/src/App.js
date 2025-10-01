import './App.css';

import { BrowserRouter, Routes, Route } from "react-router";

import Report from './pages/Report/Report';
import Landing from './pages/Landing/Landing';

function App() {
    return <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Report/>} />
                <Route path="/landing" element={<Landing/>} />
            </Routes>
        </BrowserRouter>
    </div>
}

export default App;
