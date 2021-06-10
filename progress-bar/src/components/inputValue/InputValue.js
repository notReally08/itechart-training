import React from "react";
import { useRecoilState } from "recoil";
import { inputValueState } from "./../../store/atoms";
import { Input } from "./inputValueStyles"

export const InputValue = () => {
  const [value, setValue] = useRecoilState(inputValueState);


  const handleChange = (e) => {
    if (e.target.value > 100) {
      setValue(1);
      return;
    }

    if (e.target.value < 1) {
      setValue(1);
      return;
    }

    setValue(e.target.value);
  }

  console.log(value)
  return(
    <Input type="number" value={value} onChange={handleChange} maxLength="3"/>
  );
}