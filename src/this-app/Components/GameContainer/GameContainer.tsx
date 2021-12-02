import React, { memo } from "react";
import ActionButton from "../../../global/Components/ActionButton";

const GameContainer = function () {
  return (
    <div>
      <ActionButton buttonText="Start game" />
    </div>
  );
};

export default memo(GameContainer);
