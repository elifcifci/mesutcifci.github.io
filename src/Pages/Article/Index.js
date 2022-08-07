import React from "react";
import Card from "./Card";
import { articleConstant } from "../../Constants/articleConstant";
import { Container, CardContainer } from "./style";
import Scroll from "../../Components/Scroll/index";

function Article({ selectedId }) {
  return (
    <Container>
      <Scroll scrollPoint={66} visibleLength={500} direction={"up"} />
      <Scroll scrollPoint={99999} visibleLength={65} direction={"down"} />
      <h1 className="article-heading">My Articles</h1>
      <CardContainer>
        {articleConstant.map((card) => (
          <Card key={card.id} {...card} isSelected={card.id === selectedId} />
        ))}
      </CardContainer>
    </Container>
  );
}
export default Article;