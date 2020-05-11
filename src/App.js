import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "reactstrap";
import "./styles.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <Container className="App text-center">
      <h1 className="text-light">Counter using State</h1>
      <h2 className="text-light ">The value of count is {count}</h2>
      <div className="mt-4">
        <button className="mb-4 btn btn-primary" onClick={() => setCount(0)}>
          Reset Counter
        </button>
        <br />
        <button
          className="mb-4 btn btn-primary"
          onClick={() => setCount(count + 1)}
        >
          Increase Counter
        </button>
        <br />
        <button className="btn btn-primary" onClick={() => setCount(count - 1)}>
          Decrease Counter
        </button>
        <br />
      </div>
    </Container>
  );
};

export default App;
