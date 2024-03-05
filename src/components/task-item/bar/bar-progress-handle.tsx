import React from "react";
import styles from "./bar.module.css";

type BarProgressHandleProps = {
  progressPoint: string;
  onMouseDown: (event: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
};
const BarProgressHandle: React.FC<BarProgressHandleProps> = ({
  progressPoint,
  onMouseDown,
}) => {
  return (
    <polygon
      className={styles.barHandle}
      points={progressPoint}
      onMouseDown={onMouseDown}
    />
  );
};

const BarProgressHandleMemo = React.memo(BarProgressHandle);
export { BarProgressHandleMemo as BarProgressHandle };
