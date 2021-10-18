
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Services from './Components/Service/Services';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/doctors-list">

          </Route>
          <Route path="/service">
          <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
