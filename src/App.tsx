import { FC, useState, useRef, useCallback, useEffect } from "react";
import produce from "immer";
import logo from "./logo.svg";
import "./App.css";
import Grid from "@domain/Grid";

import { generateRandomCellPosition } from "@domain/Grid/helpers/grid.helper";

const numRows = 30;
const numCols = 60;

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const App: FC = () => {
  const [grid, setGrid] = useState(
    generateRandomCellPosition(numRows, numCols, 300)
  );

  const runningRef = useRef(false);
  runningRef.current = false;

  const runSimulation = useCallback(() => {
    console.log("OK");
    // // if (!runningRef.current) {
    // //   return;
    // // }
    // console.log("OK2");
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, 400);
  }, []);

  useEffect(() => {
    // const newGrid = produce(grid, (gridCopy) => {
    //   gridCopy[1][1] = 1;
    //   gridCopy[1][2] = 1;
    // });
    // // console.log(newGrid);
    // setGrid(newGrid);
    // runSimulation();
    //only to be able to see the start elements
    setTimeout(() => {
      console.log("sprawdzam");
      // if (!runningRef.current) {
      runningRef.current = true;
      runSimulation();
      // }
    }, 2000);
  }, [runSimulation]);

  // setTimeout(() => {
  //   if (!runningRef.current) {
  //     runningRef.current = true;
  //     // runSimulation();
  //   }
  // }, 1000);

  // const [running, setRunning] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Grid grid={grid} numCols={numCols} />
      </header>
    </div>
  );
};

export default App;
