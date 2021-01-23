import styled from "styled-components";
import { MdTimer } from "react-icons/md";
import { RiSlideshowFill } from "react-icons/ri";
import { GrWorkshop } from "react-icons/gr";
import { ImLab } from "react-icons/im";
import { FaCode, FaUserGraduate } from "react-icons/fa";
import { colors } from "./theme";

export const PrevNextBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Centered = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BookPage = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

export const TopicIcon = ({ type, ...props }) =>
  type === "sample" ? (
    <Sample {...props} />
  ) : type === "lab" ? (
    <Lab {...props} />
  ) : type === "course-lab" ? (
    <CourseLab {...props} />
  ) : type === "exercise" ? (
    <Exercise />
  ) : (
    <Slides />
  );

export const Timer = ({ color = "#898989", size = 25, ...props }) => (
  <MdTimer size={size} color={color} {...props} />
);

export const Slides = ({ color = colors.primary, size = 25, ...props }) => (
  <RiSlideshowFill size={size} color={color} {...props} />
);

export const Sample = ({ color = "#898989", size = 25, ...props }) => (
  <GrWorkshop size={size} color={color} {...props} />
);

export const Lab = ({ color = "#898989", size = 25, ...props }) => (
  <ImLab size={size} color={color} {...props} />
);

export const Exercise = ({ color = "#898989", size = 25, ...props }) => (
  <FaCode size={size} color={color} {...props} />
);

export const CourseLab = ({ color = "#898989", size = 25, ...props }) => (
  <FaUserGraduate size={size} color={color} {...props} />
);
