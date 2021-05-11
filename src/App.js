import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/index';
import Home from './pages'
import About from './pages/about'
import ContactUs from './pages/contactus'
import SignUp from './pages/signup'
import Services from './pages/services'

function App() {
  return (
    <>
      <Router>
        <Navbar/>

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/services' exact component={Services} />
        <Route path='/contact-us' exact component={ContactUs} />
        <Route path='/sign-up' exact component={SignUp} />
      </Switch>

      </Router>
    </>
  );
}

export default App;
