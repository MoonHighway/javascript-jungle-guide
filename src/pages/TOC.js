import { Link } from "react-router-dom";
import { CourseLab, Timer } from "../ui";
import { agenda } from "../book/manifest.json";
import { totalTime, urlFriendly } from "../lib";
import { fonts, colors } from "../theme";
import styled from "styled-components";

const TopicList = ({ agenda = [] }) => (
  <List>
    {agenda.map((topic, i) => {
      const time = totalTime(topic);
      return (
        topic.type !== "meta" && (
          <Item key={urlFriendly(topic.title)}>
            <span>{topic.title}</span>
            {time ? <span>{time} mins</span> : null}
          </Item>
        )
      );
    })}
  </List>
);

const Block = ({ id, section }) => (
  <Section>
    <ID>
      {id < 4 ? <span>{id}</span> : <CourseLab color="white" size={30} />}
    </ID>
    <SubTitle>{section.title}</SubTitle>
    <Time>
      <Timer color={colors.primary} size={30} t={totalTime(section)} />
    </Time>
    <TopicList agenda={section.agenda} />
  </Section>
);

export default function TOC() {
  return (
    <Layout>
      <Title>Welcome to the JavaScript Jungle</Title>
      {agenda.map((section, i) => (
        <Block key={urlFriendly(section.title)} id={i + 1} section={section} />
      ))}
    </Layout>
  );
}

const List = styled.ul`
  width: 80%;
  position: absolute;
  top: 50px;
  right: 20px;
`;

const Item = styled.li`
  font-size: 2em;
  font-size: 1em;
  font-family: ${fonts.subtitle};
  margin: 3px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ID = styled.div`
  font-family: ${fonts.title};
  color: white;
  background-color: ${colors.primary};
  font-size: 3em;
  position: absolute;
  top: 0;
  left: 0;
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 25% 0;
`;

const Title = styled.h1`
  font-family: ${fonts.title};
  font-size: 3em;
  text-align: center;
  margin: 0.5em;
  color: ${colors.primary};
`;

const SubTitle = styled.h2`
  font-family: ${fonts.subtitle};
  color: ${colors.primary};
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0px;
  left: 70px;
  width: 100%;
  font-size: 1.6em;
  padding: 0.25em;
  background-color: ${colors.contrastLight};
`;

const Time = styled.div`
  color: black;
  font-size: 1.5em;
  font-family: ${fonts.title};
  color: ${colors.primary};
  position: absolute;
  top: 15px;
  right: 20px;

  span {
    padding-left: 5px;
  }
`;

const Section = styled.div`
  overflow: hidden;
  position: relative;
  margin: 0 10%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  border: solid 4px ${colors.primary};
  border-radius: 0 20%;

  &:nth-child(5) {
    background-color: ${colors.secondary};
    color: ${colors.dark};

    h2 {
      color: white;
      background-color: ${colors.primary};
    }

    div {
      color: white;
      svg {
        fill: white;
      }
    }
  }

  &:nth-child(1) &:nth-child(3) {
    align-items: flex-end;
  }
`;

const Layout = styled.section`
  width: 100%;
  height: 100%;
  overflow: clip;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(11, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  > h1:first-child {
    grid-area: 1 / 1 / 2 / 5;
  }
  div:nth-child(2) {
    grid-area: 2 / 1 / 7 / 3;
  }
  div:nth-child(3) {
    grid-area: 2 / 3 / 7 / 5;
  }
  div:nth-child(4) {
    grid-area: 7 / 1 / 12 / 3;
  }
  div:nth-child(5) {
    grid-area: 7 / 3 / 12 / 5;
  }
`;
