import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';

const infos = {
    character : "Homer Simpson",
    image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    quotes : "I hope I didn't brain my damage.",
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteCard character={infos.character} image={infos.image} quote={infos.quotes} />
    </div>
  );
}

export default App;
