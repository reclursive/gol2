import React, { useState, useEffect } from 'react';
import { Button, Checkbox } from 'react-bootstrap';


// const root = ReactDOM.createRoot(document.getElementById('root'));

const Grid = () => {
  const [grid, setGrid] = useState(grid);
  const [running, setRunning] = useState(false);

  const handleToggleCheckbox = (row, col) => {
  };

  const handleToggleSimulation = () => {
    setRunning(!running);
  };

  const onestep = () => {

    // Checked box less than two becomes UNCHECKED (verify surrounding coordinates)
        // -checked box touching 2-3 checked boxes stays the same 
        // -checked box touching 4 becomes UNCHECKED
        // -UNCHECKED box surrounded by three checked, becomes CHECKED
  };
  
}

export default Grid;