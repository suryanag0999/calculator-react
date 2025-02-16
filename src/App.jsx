import React, { useState } from "react";

const Calculator =()=>{
  const [display, setDisplay] = useState("");

  const handelClick =(value)=>{
    if (value==="C"){
      setDisplay("");
    }else if(value === "="){
      try{
      setDisplay(eval(display).toString());
    }catch{
      setDisplay("Error");
    }
  }else{
    setDisplay(display+value);
  }
};


return (
  <div className="calculator">
    <div className="display">{display || "0"}</div>
      <div className="buttons">
        {[
            "7",
            "8",
            "9",
            "+",
            "4",
            "5",
            "6",
            "-",
            "1",
            "2",
            "3",
            "*",
            "C",
            "0",
            "=",
            "/",
          ].map((btn) => (
            <button key={btn} onClick={() => handelClick(btn)}>
              {btn}
            </button>
          ))}

      </div>
  </div>
);
};

export default Calculator;