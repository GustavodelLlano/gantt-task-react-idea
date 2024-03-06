import React from "react";
import { GridBody, GridBodyProps } from "./grid-body";

export type GridProps = GridBodyProps;
const Grid: React.FC<GridProps> = props => {
  return (
    <g className="grid">
      <GridBody {...props} />
    </g>
  );
};
const GridMemo = React.memo(Grid);
export { GridMemo as Grid };
