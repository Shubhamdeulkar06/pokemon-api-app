import { useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <Header />
    </div>
  );
}

export default App;
