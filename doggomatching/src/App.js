import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        {/* <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
