import React from "react";
import styled from "styled-components";
import { MdWarning } from "react-icons/md";

export const Warning = ({ children }) => (
  <WarningContainer>
    <MdWarning />
    <p>{children}</p>
  </WarningContainer>
);

export const WarningContainer = styled.div`
  margin: 10px 50px;
  padding: 10px;
  border: solid 1px red;
  color: red;
  background-color: #ededed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {children.map(({ props }, i) => (
          <li key={i}>{props.children}</li>
        ))}
      </ul>
    </div>
  );
};
