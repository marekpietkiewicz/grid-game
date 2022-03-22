import styled from "@emotion/styled";

interface ToolsHeaderProps {
  grid: number;
}

export const CellElement = styled.div<ToolsHeaderProps>`
  background-color: ${(props: ToolsHeaderProps) =>
    props.grid ? "black" : "#f7f7f7"};
  width: 15px;
  height: 15px;
  border: solid 1px gray;
  margin: 0px;
  padding: 0px;
`;

// `
//   backgroundcolor: green;
//   width: 15px;
//   height: 15px;
//   border: solid 1px gray;
//   margin: 0px;
//   padding: 0px;
// `;
