import React from "react";

import "../styles.scss";
import TimeFormat from "./TimeFormat";
import LapList from "./LapList";
import Controller from "./Controller";
import { useInterval } from "../utils";

export default function Stopwatch() {
  const [milisec, setMilisec] = React.useState(0);
  const [lap, setLap] = React.useState([]);
  const [stop, setStop] = React.useState(true);

  useInterval(
    () => {
      setMilisec(milisec + 1);
    },
    stop ? null : 10
  );

  function resetHandler() {
    setMilisec(0);
    setLap([]);
    setStop(true);
  }

  function startHandler() {
    setStop(!stop);
  }

  function lapHandler() {
    setLap(lap.concat(milisec));
  }

  return (
    <div>
      <div className="Stopwatch">
        <p>Stopwatch</p>
        <h3><TimeFormat milisec={milisec} /></h3>
        <Controller
          stop={stop}
          milisec={milisec}
          start={startHandler}
          lap={lapHandler}
          reset={resetHandler}
        />
      </div>
      <LapList lap={lap} />
    </div>
  );
}
