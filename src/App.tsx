import { FC, useState } from "react";
import produce from "immer";
import logo from "./logo.svg";
import "./App.css";
import Cell from "@components/Cell";

const numRows = 30;
const numCols = 60;

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }

  return rows;
};

const App: FC = () => {
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${numCols}, 15px)`,
          }}
        >
          {grid.map((rows, i) =>
            rows.map((col, k) => (
              <div
                key={`${i}-${k}`}
                onClick={() => {
                  const newGrid = produce(grid, (gridCopy) => {
                    gridCopy[i][k] = grid[i][k] ? 0 : 1;
                  });
                  setGrid(newGrid);
                }}
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: grid[i][k] ? "pink" : "#f7f7f7",
                  border: "solid 1px gray",
                  margin: "0px",
                  padding: "0px",
                }}
              />
            ))
          )}
        </div>
      </header>
    </div>
  );
};

export default App;
