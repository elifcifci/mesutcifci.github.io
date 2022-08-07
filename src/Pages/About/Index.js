import React from "react";
import { name, surname, Avatar } from "react-lorem-ipsum";

import { contactConstants } from "../../Constants/contactConstants";
import { colors } from "../../styles/globalStyles";

import {
  Container,
  Wrapper,
  AboutMe,
  ContactContainer,
  ContactLink,
} from "./styles";

const variants = {
  hover: {
    scale: 1.8,
    color: colors.secondary,
  },
};

const About = () => {
  return (
    <Container>
      <h1 className="about-heading">Who am I?</h1>
      <Wrapper>
        <Avatar gender="female" className="about-img" />

        <AboutMe>
          Hello, I am {name('female')} {surname()}, I have been working as a frontend developer
          for a year and a half. Everyday I learn something new and try to
          improve myself.
        </AboutMe>
      </Wrapper>

      <ContactContainer>
        {contactConstants.map((contactConstant, index) => {
          return (
            <ContactLink
              key={index}
              href={contactConstant.contactLink}
              target="_blank"
              className={`${contactConstant.contactIcon}`}
              variants={variants}
              whileHover="hover"
            />
          );
        })}
      </ContactContainer>
    </Container>
  );
};

export default About;
