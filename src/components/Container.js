import { css } from "@emotion/core";
import styled from "@emotion/styled";

const ContainerStyles = css`
  display: flex;
  justify-contents: flex-start;
  align-items: stretch;
`;

export const ColumnContainer = styled.div`
  flex-direction: column;

  & > * + * {
    margin-top: 0.8rem;
  }

  ${ContainerStyles}
`;

export const RowContainer = styled.div`
  flex-direction: row;

  & > * + * {
    margin-left: 0.8rem;
  }

  ${ContainerStyles}
`;
