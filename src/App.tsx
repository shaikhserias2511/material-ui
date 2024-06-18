import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Sub from './component/Sub'


function App() {
  return (
    <div>
      <Button variant="text">Text</Button><br /><br />
      <Button variant="contained">Contained</Button><br /><br />
      <Button variant="outlined">Outlined</Button>
       <Sub/>
    </div>
  );
}

export default App;
