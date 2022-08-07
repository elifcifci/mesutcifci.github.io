import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { colors, devices } from "../../styles/globalStyles";

export const NavbarLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: white;
  width: 100%;
  background-color: ${colors.secondary};
  border-radius: 15px;
  height: 55px;
  line-height: 55px;

  @media ${devices.laptop} {
    padding: 20px;
    background-color: unset;
    border-radius: 0;
    height: 50px;
  }
`;

export const ItemContainer = styled(motion.li)`
  list-style-type: none;
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 15px;
  width: 300px;
  height: 50px;
  text-align: center;
  flex: 1;
  list-style: none;
  font-weight: bold;

  @media ${devices.laptop} {
    line-height: 25px;
    height: 75px;
    margin-bottom: 0px;
    border-radius: 0px;
    opacity: 1 !important;
    transform: unset !important;
    background-color: ${(props) =>
      props.selected ? colors.cardTitle : colors.primary} !important;

    &:hover {
      background-color: ${colors.secondary} !important;
    }
  }
`;

export const NavbarIcon = styled(motion.svg)`
  border-radius: 50%;
  flex: 90px 0;
  padding: 3px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  margin-right: 20px;
  background-color: ${colors.secondary};
  border: solid 3px ${colors.secondary};

  @media ${devices.laptop} {
    display: none;
  }
`;

export const Paths = styled(motion.path)`
  width: 56%;
  overflow: visible;
  stroke: ${colors.primary};
  stroke-width: 35;
  stroke-linejoin: round;
  stroke-linecap: round;
`;
