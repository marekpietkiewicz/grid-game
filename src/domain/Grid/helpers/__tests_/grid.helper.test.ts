import {
  getRandomInt,
  generateEmptyGrid,
  generateRandomCellPosition,
  makeATick,
} from "@domain/Grid/helpers/grid.helper";

import { tick0, tick1, tick2, tick3 } from "@domain/Grid/mocks/mockedTicks";

describe("getRandomInt generates properly random digits", () => {
  it("randomDigit is: 1", () => {
    const randomDigit = getRandomInt(1);
    expect(randomDigit).toBeGreaterThanOrEqual(0);
    expect(randomDigit).toBeLessThan(2);
  });

  it("randomDigit is: 50", () => {
    const randomDigit = getRandomInt(50);
    expect(randomDigit).toBeGreaterThanOrEqual(0);
    expect(randomDigit).toBeLessThan(51);
  });

  it("randomDigit is: 500", () => {
    const randomDigit = getRandomInt(500);
    expect(randomDigit).toBeGreaterThanOrEqual(0);
    expect(randomDigit).toBeLessThan(501);
  });
});

describe("generateEmptyGrid generates properly starting set of cells", () => {
  it("there are 50 elements", () => {
    const emptyGrid = generateEmptyGrid(50, 50);
    expect(emptyGrid).toHaveLength(50);
  });

  it("all fields are empty", () => {
    const emptyGrid = generateEmptyGrid(50, 50);
    expect(emptyGrid).toEqual(tick0);
  });
});

describe("generateRandomCellPosition modify empty set of cells", () => {
  it("there are 50 elements", () => {
    const randomGrid = generateRandomCellPosition(50, 50);
    expect(randomGrid).toHaveLength(50);
  });

  it("some fields are NOT empty", () => {
    const randomGrid = generateRandomCellPosition(50, 50);
    expect(randomGrid).not.toEqual(tick0);
  });
});

describe("makeATick will evolve properly the cells set", () => {
  it("2nd tick", () => {
    const tickedGrid = makeATick(tick1, 50, 50);
    expect(tickedGrid).toEqual(tick2);
  });

  it("3td tick", () => {
    const tickedGrid = makeATick(tick2, 50, 50);
    expect(tickedGrid).toEqual(tick3);
  });
});
