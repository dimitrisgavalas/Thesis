import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Ecourses from "./pages/Ecourses";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/e-courses" component={Ecourses} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
