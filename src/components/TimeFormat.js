import React from "react";
import { convertUnit } from "../utils";

export default props => {
  const msec = props.milisec;
  let hh = Math.floor((msec / 12960000) % 60).toString();
  let mm = Math.floor((msec / 3600) % 60).toString();
  let ss = Math.floor((msec / 60) % 60).toString();
  let ms = Math.floor(msec % 60).toString();

  return `${convertUnit(hh)}:${convertUnit(mm)}:${convertUnit(ss)}.${convertUnit(ms)}`;
};
