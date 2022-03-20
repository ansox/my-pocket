import React from "react";
import CardArticle from "../../components/CardArticle";
import { retrieve } from "../../services/pocket";
import { loadLocal } from "../../services/storage";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

export default function HomePage() {
  const [articles, setArticles] = React.useState([]);

  function articlesToArray(articles) {
    return Object.values(articles);
  }

  function retrieveArticles(token) {
      return retrieve(token).then(result => result.list);
    };

  React.useEffect(() => {
    const initPage = async () => {
      const token = loadLocal('access_token');
      const result = await retrieveArticles(token);
      setArticles(articlesToArray(result));
    }
    
    initPage();
  }, [])

  return (
    <Container>
      {articles.map(article => {
        return (
         <CardArticle article={article} />
        )
      })}
    </Container>
  )
}
