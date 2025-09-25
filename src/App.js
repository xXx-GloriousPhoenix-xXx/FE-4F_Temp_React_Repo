import './App.css';

import Header from "./components/UI/Header/Header";
import Main from "./components/UI/Main/Main";
import Footer from "./components/UI/Footer/Footer";

function App() {
    const navbarProps = [
        { text: 'Campsites', ref: '' },
        { text: 'Shop', ref: '' },
        { text: 'Blog', ref: '' },
        { text: 'About Us', ref: '' },
        { text: 'Contact', ref: '' }
    ];
    const footerText = "Copyright © 2025 CampOut.com";
    return (
        <div className="App">
            <Header navbarProps={navbarProps}/>
            <Main/>
            <Footer text={footerText}/>
        </div>
    );
}

export default App;
