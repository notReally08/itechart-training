import styled from "styled-components";

export const ProgressContainer = styled.div`
  width: 500px;
  border: 6px solid #61dafb;
  border-radius: 5px;
  margin-top: 20px;
  padding: 3px;
`;

export const ProgressLine = styled.div`
  padding: 10px;
  background: #5b678a;
  max-width: ${props => props.progressLineWidth || "1"}%;
`;