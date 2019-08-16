import React from "react";

import { convertUnit } from "../utils";

export default () => {
  const d = new Date();
  const hh = d.getHours();
  const mm = d.getMinutes();

  return (
    <h1>
      {convertUnit(hh)}:{convertUnit(mm)}
    </h1>
  );
};
