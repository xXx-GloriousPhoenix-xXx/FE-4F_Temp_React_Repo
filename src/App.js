import './App.css';

import Header from "./components/UI/Header/Header";
import Logo from "./img/logo.svg";

function App() {
    return (
        <div className="App">
            <Header logoSrc={Logo}/>
        </div>
    );
}

export default App;
