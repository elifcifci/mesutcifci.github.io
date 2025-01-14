import React from "react";

import { personConstant } from "../../constants/personConstant";
import { Container, WelcomeContainer, Description } from "./styles";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
    },
  },
};

const Main = () => {
  return (
    <>
      <Container>
        <WelcomeContainer>
          <h1 className="main-heading">
            Welcome! <span>{personConstant[2]}</span>
          </h1>

          <Description variants={variants} initial="hidden" animate="visible">
            a front-end developer
          </Description>
        </WelcomeContainer>
      </Container>
    </>
  );
};

export default Main;
