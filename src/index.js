import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'bootstrap', Vou só buscar o CSS disto, porque assim vai buscar o js...
// import App from './App';
import './assets/bootstrap.css' //Isto exporta tipo como num documento HTML?
import NavBar from "./Components/NavBar"
import Body from "./Components/Body"
import Footer from "./Components/Footer"
// import * as serviceWorker from './serviceWorker';

function App() {
    return (
        <div>
            <NavBar />
            <Body />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));