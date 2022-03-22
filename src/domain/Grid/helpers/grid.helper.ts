import produce from "immer";
import type { gridElements } from "@domain/Grid/types/grid.types";

export const generateEmptyGrid = (
  numRows: number,
  numCols: number
): gridElements => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }

  return rows;
};

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export const generateRandomCellPosition = (
  numRows: number,
  numCols: number,
  cellsQuantity: number = 1
): gridElements => {
  const newGrid = produce(generateEmptyGrid(numRows, numCols), (gridCopy) => {
    for (let i = 0; i < cellsQuantity; i++) {
      const randomColumn = getRandomInt(numCols);
      const randomRow = getRandomInt(numRows);
      gridCopy[randomRow][randomColumn] = 1;
    }
  });

  return newGrid;
};
