import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";import HomePage from './components/HomePage';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <br/>
    //   <Route path='/' exact component={HomePage} />
    //   <Route path='/movies' component ={MoviePage} />
    // </Router>
    <Router>
        <Link to="/">Home</Link>
      
      <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          
        </Switch>
    </Router>
  );
}

export default App;
