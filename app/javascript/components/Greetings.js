import React, { useState } from "react";
import { useSelector } from "react-redux";

const Greetings = () => {
  const greeting = useSelector((state) => Object.values(state.greeting));
  //const greeting3 = Object.values(greeting);


  return (
    <div>
      <h1>{ greeting[1] }</h1>



    </div>
  )
}

export default Greetings;