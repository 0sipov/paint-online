import React, { useRef, useEffect, useState } from "react";

import { observer } from "mobx-react-lite";

import toolState from "../../store/toolState";

const ColorSetter = observer(() => {
  const colorSetterRef = useRef();
  useEffect(() => {
    toolState.setColor(colorSetterRef.current.value);
  }, []);

  return (
    <input
      type="color"
      ref={colorSetterRef}
      onChange={() => toolState.setColor(colorSetterRef.current.value)}
    />
  );
});

export default ColorSetter;
