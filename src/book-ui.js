import React from "react";
import styled from "styled-components";
import {
  MdWarning,
  MdQuestionAnswer
} from "react-icons/md";

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
  > svg {
    padding: 10px;
  }
`;

export const Note = ({ children }) => (
  <NoteContainer>
    <h2>Note: </h2>
    <p>{children}</p>
  </NoteContainer>
);

export const NoteContainer = styled.div`
  margin: 10px 50px;
  padding: 10px;
  border: solid 1px blue;
  color: blue;
  background-color: #ededed;
  display: flex;
  justify-content: center;
  align-items: center;
  > h2 {
    padding: 10px;
  }
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

export const PossibleQuestions = ({ children }) => {
  return (
    <PossibleQuestionContainer>
      <MdQuestionAnswer />
      {children.map((child, i) =>
        child.props.originalType === "h3" ? (
          <h3 key={i}>Question: {child.props.children}</h3>
        ) : (
          <p key={i}>Answer: {child.props.children}</p>
        )
      )}
    </PossibleQuestionContainer>
  );
};

export const PossibleQuestionContainer = styled.div`
  margin: 10px 50px;
  padding: 10px;
  border: solid 1px black;
  color: black;
  background-color: #ededed;
`;

export const Sidebar = ({ children }) => (
  <SidebarContainer>
    <div>{children}</div>
  </SidebarContainer>
);

export const SidebarContainer = styled.aside`
  margin: 10px 50px;
  padding: 10px;
  border: solid 1px green;
  color: green;
  background-color: #ededed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Definition = ({ children }) => {
  return (
    <DefinitionContainer>{children}</DefinitionContainer>
  );
};

export const DefinitionContainer = styled.dl`
  margin: 10px 50px;
  padding: 10px;
  border: solid 1px purple;
  color: purple;
  background-color: #ededed;
  > dt {
    font-weight: bold;
  }
`;
