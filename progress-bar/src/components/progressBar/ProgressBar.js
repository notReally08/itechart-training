import React from "react";
import { useRecoilValue } from "recoil";
import { inputValueState } from "./../../store/atoms";
import { ProgressContainer, ProgressLine } from "./progressBarStyles";


export const ProgressBar = () => {
  const value = useRecoilValue(inputValueState);
  return(
    <ProgressContainer value={value} max="100">
      <ProgressLine progressLineWidth={value}/>
    </ProgressContainer>
  );
}