import React from 'react'

//Components
import AboutUs from './pages/AboutUs'
import Portifolio from './pages/Portifolio'
import ContactMe from './pages/ContactMe'
import Nav from './components/Nav'
//Global Style
import GlobalStyle from './components/GlobalStyle'

//Roteamento
import {Route, Switch} from 'react-router-dom';

const leDados = () =>{
  fetch('/api')
  .then(resultado =>{
    console.log("dados do backend", resultado)
  })
}
function App() {
  return (
    <div>
      {/* {leDados()} */}
      {/* Bem vindo ao frontend! */}
      <GlobalStyle />
      <Nav />
        <Switch>
          <Route exact path="/">
            <AboutUs />
          </Route>
          <Route path="/portifolio">
            <Portifolio />
          </Route>
          <Route path="/contact">
            <ContactMe />
          </Route>
        </Switch>
      
    </div>
  );
}

export default App;
