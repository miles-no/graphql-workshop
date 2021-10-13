import { Header } from '@/layout';
import { Album } from '@/pages/album';
import { Artist } from '@/pages/artist';
import { Category } from '@/pages/category';
import { Home } from '@/pages/home';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/artist/:id">
              <Artist />
            </Route>
            <Route path="/album/:id">
              <Album />
            </Route>
            <Route path="/category/:id">
              <Category />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
