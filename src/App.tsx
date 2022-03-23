import { FC, useState, useCallback, useEffect } from "react";
import {
  numCols,
  numRows,
  randomCellsQuantity,
  nextTickTime,
  startingScreenFreez,
} from "@configs/base.config";
import Grid from "@domain/Grid";
import "./App.css";
import {
  generateRandomCellPosition,
  makeATick,
} from "@domain/Grid/helpers/grid.helper";

const App: FC = () => {
  const [grid, setGrid] = useState(
    generateRandomCellPosition(numRows, numCols, randomCellsQuantity)
  );

  const runSimulation = useCallback(() => {
    setGrid((grid) => makeATick(grid, numRows, numCols));
    setTimeout(runSimulation, nextTickTime);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      runSimulation();
    }, startingScreenFreez);
  }, [runSimulation]);

  return (
    <div className="App">
      <header className="App-header">
        <Grid grid={grid} numCols={numCols} />
      </header>
    </div>
  );
};

export default App;
