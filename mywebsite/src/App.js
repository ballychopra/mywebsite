import React, { Component } from 'react';
import Home from './Home';
import "./Style.css"
import Header from './Header';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                
                <Footer />
            </div>
        );
    }
}
export default App;