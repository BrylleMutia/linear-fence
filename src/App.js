import Navbar from './components/Navbar';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Vinyl from './pages/Vinyl';
import Ornamental from './pages/Ornamental';
import ChainLink from './pages/Chainlink';
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/vinyl" exact component={Vinyl} />
        <Route path="/ornamental" exact component={Ornamental} />
        <Route path="/chainlink" exact component={ChainLink} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
