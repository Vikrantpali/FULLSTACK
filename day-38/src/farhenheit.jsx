import { useState } from "react";
import React from "react";

function FarhenheitInput({ temperature, onTemperatureChange }) {
  return (
    <fieldset style={{
        width: '320px'
    }}>
      <legend>Enter Temperature</legend>
      <input
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
        type="text"
        style={{
            border: '0'
        }}
      />
    </fieldset>
  );
}

export default FarhenheitInput;
