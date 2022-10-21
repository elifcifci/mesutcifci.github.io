//React
import React from "react";
import { Avatar } from "react-lorem-ipsum";

//constants
import { contactConstants } from "../../constants/contactConstants";
import { personConstant } from "../../constants/personConstant";

//Styles
import { colors } from "../../styles/globalStyles";
import { Container, Wrapper, AboutMe, ContactContainer } from "./styles";

import { motion } from "framer-motion";

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

        <AboutMe>{personConstant[3]}</AboutMe>
      </Wrapper>

      {/* There is not link address for href attributes for the template. 
      User should add "contactLink" in "contactConstants".*/}
      <ContactContainer>
        {contactConstants.map((contactConstant, index) => {
          return (
            <motion.a
              key={index}
              href={contactConstant.contactLink}
              // target="_blank"
              className={`${contactConstant.contactIcon} contact_link`}
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
