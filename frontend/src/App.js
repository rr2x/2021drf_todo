import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

function App() {
  const[items, setItems] = useState(undefined);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://127.0.0.1:8000/api/', { method: 'GET' });
      const lists = await response.json();
      setItems(lists);
    })()
  },[]);

  return (
    <div>
      {
        (items === undefined
          ? null
          : items.map(item=>(
              <div key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
              </div>
        )))
      }
    </div>
  );
}

export default App;
