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
    <HomePage/>
  );
}

export default App;
