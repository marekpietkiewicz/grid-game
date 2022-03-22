import styled from "@emotion/styled";

interface CellElementProps {
  grid: number;
}

export const CellElement = styled.div<CellElementProps>`
  background-color: ${(props: CellElementProps) =>
    props.grid ? "black" : "#f7f7f7"};
  width: 15px;
  height: 15px;
  border: solid 1px gray;
  margin: 0px;
  padding: 0px;
`;
