import React from "react";
import { useSelector } from "react-redux";

const Greetings = () => {
  const greeting = useSelector((state) => state);

  return (
    <div>
      <h1>Greetings here...</h1>

    </div>
  )
}

export default Greetings;