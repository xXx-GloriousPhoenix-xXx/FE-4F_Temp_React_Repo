import './App.css';

import Header from "./components/UI/Header/Header";
import Main from "./components/UI/Main/Main";
import Footer from "./components/UI/Footer/Footer";
import Logo from "./img/logo.svg";

function App() {
    return (
        <div className="App">
            <Header logoSrc={Logo}/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
