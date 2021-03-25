import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      {/* must have it in this order */}
      {/* root/home page last in order to default */}
      <Router>
        <Header />
        <Switch>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
