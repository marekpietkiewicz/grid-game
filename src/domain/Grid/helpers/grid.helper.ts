import produce from "immer";
import type { gridElements } from "@domain/Grid/types/grid.types";

const neighborsPosiitons = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

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

export function getRandomInt(max: number) {
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

export const makeATick = (
  grid: gridElements,
  numRows: number,
  numCols: number
): gridElements => {
  return produce(grid, (gridCopy) => {
    for (let i = 0; i < numRows; i++) {
      for (let k = 0; k < numCols; k++) {
        let neighbors = 0;
        neighborsPosiitons.forEach(([x, y]) => {
          const newI = i + x;
          const newK = k + y;
          if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
            neighbors += grid[newI][newK];
          }
        });

        if (neighbors < 2 || neighbors > 3) {
          gridCopy[i][k] = 0;
        } else if (grid[i][k] === 0 && neighbors === 3) {
          gridCopy[i][k] = 1;
        }
      }
    }
  });
};
