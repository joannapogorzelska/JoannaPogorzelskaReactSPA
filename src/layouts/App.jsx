import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import Footer from "./Footer"
import Header from "./Header"
import Navigation from "./Navigation"
import Page from "./Page"


import '../style/index.css';
import '../style/app.css'



class App extends Component{
  render() {
    return (
      <Router>
        <div className='app'>
          <header>
            {<Header/>}
          </header>
          <main>
            <aside>
              {<Navigation/>}
            </aside>
            <section>
              {<Page/>}
            </section>
          </main>
          <footer>
            {<Footer/>}
          </footer>
        </div>
      </Router>
    
    );
  }
}

export default App;