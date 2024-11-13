// src/App.js
import React from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <main className="p-4">
        <h2 className="text-2xl font-semibold">Welcome to My Website!</h2>
        <p className="mt-4">This is a simple React app with a top navbar.</p>
      </main>
    </div>
  );
}

export default App;
