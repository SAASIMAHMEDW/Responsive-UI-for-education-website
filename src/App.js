// import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import course from './Components/Course';
import About from './Components/About';
import Navigationbar from './Components/Navigationbar';

// function App() { aasim aahmed 
//   return (
//     <div className="App">
//     <Home />
//     <About />
//     <Course />
// </div>
//   );
// }
function App() {
  return (
    <div className="App">
        <Router>
            <Navigationbar />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/Course' component={course}/>
                <Route path='/About' component={About}/>
            </Switch>
        </Router>
        {/* <Home /> */}
    </div>
  );
}

export default App;
