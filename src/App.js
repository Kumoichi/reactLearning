import React from 'react'; // Import React from the package, not your ToDoList file
import ToDoList from './ToDoList.js';

function App() {
  return (  // Make sure you're returning the JSX
    <div>
      <ToDoList />
    </div>
  );
}

export default App;
