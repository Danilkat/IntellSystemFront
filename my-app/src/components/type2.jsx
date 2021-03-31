import React from 'react';
import { Slider } from '@material-ui/core'



const type2 = () => {
  return (
    <Slider
      defaultValue={0.00000005}
      aria-labelledby="discrete-slider-small-steps"
      step={0.00000001}
      marks
      min={-0.00000005}
      max={0.0000001}
      valueLabelDisplay="auto"
    />

  );
}


export default type2;