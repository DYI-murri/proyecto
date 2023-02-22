import React, { useState } from 'react';

const Contador = () => {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 3)}>
        Click me
      </button>
    </div>
  );
}

export default Contador;
