import { Header } from '@/layout';
import { Album } from '@/pages/album';
import { Artist } from '@/pages/artist';
import { Category } from '@/pages/category';
import { Home } from '@/pages/home';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/artist/:id" element={<Artist />} />
            <Route path="/album/:id" element={<Album />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
