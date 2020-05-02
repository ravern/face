import { css } from "@emotion/core";
import styled from "@emotion/styled";

const ContainerStyles = css`
  display: flex;
  justify-contents: flex-start;
  align-items: stretch;
`;

export const CardContainer = styled.div`
  ${ContainerStyles}

  background-color: ${(props) => props.theme.colors.lightGray};
  padding: 1.6rem;
  border-radius: 0.6rem;
`;

export const ColumnContainer = styled.div`
  ${ContainerStyles}

  flex-direction: column;

  & > * + * {
    margin-top: 0.8rem;
  }
`;

export const RowContainer = styled.div`
  ${ContainerStyles}

  flex-direction: row;

  & > * + * {
    margin-left: 0.8rem;
  }
`;
