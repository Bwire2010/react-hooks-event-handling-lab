// Code Keypad Component Here
import React from "react";

function Keypad (){
    function keypadFn (eventFunction){
        console.log(eventFunction.target.name);
    }
    return (
        <div>
            <input
          type="password"
          name="Entering password..."
          onChange={keypadFn}
          placeholder="Enter your password..."
        />
        </div>
    );
}

export default Keypad;