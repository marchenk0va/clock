import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: 10px;
  height: 60px;
  font-size: 12px;
  width: 60px;
  border-radius: 50%;
  border: 1px solid #ecfcff;
  background-color: #5edfff;

  &:active {
    border: 2px dotted #ecfcff;
    color: #ecfcff;
    background-color: #3e64ff;
  }
`;

export default props => {
  const lapBtn = !props.stop ? (
    <Button className='btn' onClick={() => props.lap()}>Lap</Button>
  ) : (
    <Button className='btn' disabled>Lap</Button>
  );

  const resetBtn =
    props.stop && props.milisec > 0 ? (
      <Button className='btn' onClick={() => props.reset()}>Reset</Button>
    ) : null;

  return (
    <div>
      <Button onClick={() => props.start()} className='btn'>
        {props.stop ? "Start" : "Stop"}
      </Button>
      {props.stop && props.milisec > 0 ? null : lapBtn}
      {resetBtn}
    </div>
  );
};
