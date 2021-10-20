
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Services from './Components/Service/Services';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import GetService from './Components/GetService/GetService';
import Doctor from './Doctor/Doctor';
import GetDoctors from './Components/GetDoctors/GetDoctors';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
   <AuthProvider>
   <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route exact path="/home">
          <Home></Home>
          </Route>
          <PrivateRoute path="/doctors-list">
         <Doctor></Doctor>
          </PrivateRoute>
          <PrivateRoute path="/service">
          <Services></Services>
          </PrivateRoute>
          <Route path="/login">
          <Login></Login>
          </Route>
          <PrivateRoute path="/about-us">
        <About></About>
          </PrivateRoute>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/GetService/:serviceId">
        <GetService></GetService>
          </Route>
          <Route path="/GetDoctors/:serviceId">
          <GetDoctors></GetDoctors>
          </Route>
          <Route path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer/>
      </Router>
   </AuthProvider>
    </div>
  );
}

export default App;
