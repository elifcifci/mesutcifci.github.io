import { AnimatePresence } from "framer-motion";
import { articleConstant } from "../../Constants/articleConstant";
import { useParams } from "react-router-dom";
import ArticlePage from "./Index";
import { Item } from "./Item";

function OpenedCard() {
  let params = useParams();
  const imageHasLoaded = true;
  let selectedArticle = articleConstant.filter((article) => {
    return article.id == params.id;
  });
  return (
    <>
      <ArticlePage selectedId={params.id} />
      {/* AnimatePresence allows components to animate out when they're removed from the React tree. */}
      <AnimatePresence>
        {params.id && imageHasLoaded && (
          <Item
            key="item"
            title={selectedArticle[0].title}
            imgSrc={selectedArticle[0].imgLink}
            explanation={selectedArticle[0].explanation}
            id={params.id}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default OpenedCard;
