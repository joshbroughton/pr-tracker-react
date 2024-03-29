import React, { useState } from "react";
import { LiftRecord } from "../Home/Home";
import './Calculator.css';

interface CalculatorProps {
  rowData: LiftRecord[] | undefined,
  e1rm: number,
  lift: string,
}

function Calculator({ rowData, e1rm, lift }:CalculatorProps) {
  const [weight, setWeight] = useState<number>(1)
  const [newE1rm, setNewE1rm] = useState<number>(0);
  const [repsRequired, setRepsRequired] = useState<number>(0);

  let tempMax:number;
  let isMaxFound = false;
  let i = 1
  const calculateMax = (e:React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    while (isMaxFound === false) {
      tempMax = weight / (1.0278 - (0.0278 * i));
      i++;
      if (tempMax > e1rm) {
        setNewE1rm(tempMax);
        isMaxFound = true;
        setRepsRequired(i);
      } else if (i > 50) {
        break;
      }
    }
  };

  return(
    <div className="calc-content">
      <h2>Lift Type: {lift}</h2>
      <form onSubmit={calculateMax}>
        <label>
          Enter the weight for the AMRAP set:
          <input
            type="text"
            pattern="[0-9]*" // this fixes the weird leading zero issue
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h2>Reps required for new high estimated 1 rep max:</h2>
      <p>{repsRequired}</p>
      <h2>New estimated 1 rep max if successful:</h2>
      <p>{newE1rm}</p>
    </div>
  )
}

export default Calculator;
