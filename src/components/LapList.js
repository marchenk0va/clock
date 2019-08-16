import React from "react";
import styled from "styled-components";

import TimeFormat from "./TimeFormat";

const List = styled.ul`
  padding: 0;
  list-style-type: none;
`

const LappedTime = styled.p`
  background-color: #ecfcff;
  padding: 4px;
  span {
    font-weight: 600;
  }
`

export default props => {
  const item = props.lap.map((item, index) => {
    return (
      <li key={index}>
        <LappedTime>
          <span>Lap {index + 1} </span>
          <TimeFormat milisec={item} />
        </LappedTime>
      </li>
    );
  });
  return <List>{item}</List>;
};
