import Home from "./pages/Home"
import Header from "./components/header/Header"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  
  
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
