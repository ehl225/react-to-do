import React from 'react';
import './App.css';
import ToDo from './components/ToDo.js';
function App() {
  return (
    <div className="App">
	<ul>
		<ToDo />
		<ToDo />
	</ul>
    </div>
  );
}

export default App;
