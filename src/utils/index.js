import React from "react";

export function convertUnit(unit) {
  if ((unit + "").length > 2) {
    return unit;
  }
  return ("0" + unit).slice(-2);
}

export function useInterval(callback, delay) {
  const currentCall = React.useRef();

  React.useEffect(() => {
    currentCall.current = callback;
  });

  React.useEffect(() => {
    function fn() {
      currentCall.current();
    }
    if (delay !== null) {
      let id = setInterval(fn, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
