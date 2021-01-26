import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Home';
import Circle from './sketches/circle/circle';
import Circle2 from './sketches/circle2/circle2';

function App() {
  const [activeView, setActiveView] = useState('true');
  const [components, setComponents] = useState();

  // TODO: Render list of sketch names (or pictures?) along with buttons
  // for each sketch on Home view. Set active view based on the name
  const showHome = () => (
  <div className="homeContainer">
      <Home setActiveView={setActiveView} />
  </div>
  );
  // Each drawing should have a button to go back home
  const showComponents = () => (
  <div className="triviaContainer">
    {activeView
      ? <Circle/>
      : <Circle2/>
    }
  </div>
  );

  useEffect(() => {
    if (activeView === 'home') {
      setComponents(showHome);
    } else {
      setComponents(showComponents);
    }
  }, [activeView]);

  return (
    <div className="App">
    {components}
    <button onClick={() => setActiveView(!activeView)}>Toggle Circles</button>
    </div>
  );
}

export default App;
