import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './components/Home';
import Navigation from './components/Navigation';
import SignUpContainer from './components/SignUpContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/signup" component={SignUpContainer}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
