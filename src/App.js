import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {
  const [categories] =useState([
    {
      name:'commercial',
      description: 'photos of products and other projects',
    },
    { name: 'nature', description: 'Animals, flora and fauna' },
    { name: 'seascapes', description: 'Ocean views, and beaches from my travels' },
    { name: 'landscape', description: 'Mountains, and beauty of landscapes' },
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  return (
      <div>
          <Nav>
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
          </Nav>
          <main>
              <Gallery></Gallery>
              <About></About>
          </main>
      </div>
  );
}

export default App;
