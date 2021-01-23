import { Link } from "react-router-dom";
import { CourseLab, Timer, TopicIcon } from "../ui";
import { agenda } from "../book/manifest.json";
import { totalTime, urlFriendly, pickFirst } from "../lib";
import { fonts, colors } from "../theme";
import styled from "styled-components";

const TopicList = ({ agenda = [] }) => (
  <List>
    {agenda.map((topic, i) => {
      const time = totalTime(topic);
      return (
        topic.type !== "meta" && (
          <Item key={urlFriendly(topic.title)}>
            <TopicIcon size={20} type={topic.type} />
            <span>{topic.title}</span>
            {time ? <span>{time} mins</span> : null}
          </Item>
        )
      );
    })}
  </List>
);

function Block({ id, section }) {
  const time = totalTime(section);
  return (
    <Section
      onClick={() => {
        const [, route] = pickFirst(section);
        window.location = `/agenda/${route}`;
      }}
    >
      <ID>
        {id < 4 ? <span>{id}</span> : <CourseLab color="white" size={30} />}
      </ID>
      <SubTitle>{section.title}</SubTitle>
      <Time>
        <Timer color={colors.primary} size={30} />
        <span>{time} mins</span>
      </Time>
      <TopicList agenda={section.agenda} />
    </Section>
  );
}

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

const Layout = styled.section`
  width: calc(100% - 50px);
  height: calc(100% - 50px);
  display: grid;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;

    > div {
      margin: 1em 0.2em;
    }
  }

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(11, 1fr);

  grid-column-gap: 25px;
  grid-row-gap: 25px;
  margin: 25px;
`;

const Title = styled.h1`
  grid-area: 1 / 1 / 2 / 5;
  font-family: ${fonts.title};
  color: ${colors.primary};
  font-size: 3em;
  text-align: center;
  min-width: 355px;
`;

const Section = styled.div`
  border: solid 4px ${colors.primary};
  border-radius: 0 20%;
  overflow: hidden;
  min-width: 355px;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(13, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  &:nth-child(2) {
    grid-area: 2 / 1 / 7 / 3;
  }
  &:nth-child(3) {
    grid-area: 2 / 3 / 7 / 5;
  }
  &:nth-child(4) {
    grid-area: 7 / 1 / 12 / 3;
  }
  &:nth-child(5) {
    grid-area: 7 / 3 / 12 / 5;
    background-color: ${colors.secondary};
    color: ${colors.dark};
    h2 {
      color: white;
      background-color: ${colors.primary};
    }
  }
`;

const ID = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  font-family: ${fonts.text};
  color: white;
  background-color: ${colors.primary};
  font-size: 2.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 25% 0;
`;

const SubTitle = styled.h2`
  grid-area: 1 / 2 / 3 / 7;
  font-family: ${fonts.subtitle};
  color: ${colors.primary};
  background-color: ${colors.contrastLight};
  font-size: 2em;
  padding: 0 0.2em;
`;

const Time = styled.div`
  grid-area: 3 / 5 / 4 / 7;
  color: black;
  font-family: ${fonts.title};
  color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1em;
  span {
    position: relative;
    top: 2px;
    padding-left: 5px;
    font-size: 1.5em;
  }
`;

const List = styled.div`
  grid-area: 4 / 2 / 14 / 7;
  width: 100%;
  height: 100%;
`;

const Item = styled.div`
  margin: 0.3em;
  font-size: 1em;
  font-family: ${fonts.subtitle};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  svg {
    color; ${colors.primary};
    fill: ${colors.primary};
    path {
      stroke: ${colors.primary};
    }
  }

  > span:first-of-type {
    flex: 1;
    padding-left: 1em;
  }
`;
