import { FC } from "react";
import { GridInterface } from "@domain/Grid/types/grid.types";
import Cell from "@domain/Grid/Cell";

export const Grid: FC<GridInterface> = ({ grid, numCols }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numCols}, 15px)`,
      }}
    >
      {grid.map((rows, i) =>
        rows.map((_, k) => <Cell grid={grid} row={i} col={k} />)
      )}
    </div>
  );
};

export default Grid;
