import styled from "styled-components";
import { MdTimer } from "react-icons/md";
import { RiSlideshowFill } from "react-icons/ri";
import { GrWorkshop } from "react-icons/gr";
import { ImLab } from "react-icons/im";
import { FaCode, FaUserGraduate } from "react-icons/fa";

export const PrevNextBar = styled.div`
  margin: 80px;
  align-self: center;
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const Timer = ({ color = "#898989", size = 25, ...props }) => (
  <MdTimer size={size} color={color} {...props} />
);

export const Slides = ({ color = "#898989", size = 25, ...props }) => (
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
