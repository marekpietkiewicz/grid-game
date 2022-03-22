import { FC } from "react";
import type { gridElements } from "@domain/Grid/types/grid.types";
import { CellElement } from "@domain/Grid/Cell/cell.styles";

interface props {
  grid: gridElements;
  row: number;
  col: number;
}

const Cell: FC<props> = ({ grid, row, col }) => {
  return <CellElement key={`${row}-${col}`} grid={grid[row][col]} />;
};

export default Cell;
