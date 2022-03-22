import React from "react";
import CardArticle from "../../components/CardArticle";
import { retrieve } from "../../services/pocket";
import { loadLocal } from "../../services/storage";
import styled from "styled-components";
import { db } from "../../services/db";
import { useLiveQuery } from "dexie-react-hooks";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background: linear-gradient(90deg, #edc0bf 0,#c4caef 58%);
`;

export default function HomePage() {
  // const [articles, setArticles] = React.useState([]);
  const articles = useLiveQuery(
    () => db.articles.toArray()
  )

  function articlesToArray(articles) {
    return Object.values(articles);
  }

  function retrieveArticles(token) {
    return retrieve(token).then(result => result.list);
  };

  function saveArticles(articles) {
    console.log(articles);
    db.articles.bulkAdd(articles)
      .catch(error => console.log(error));
  }

  React.useEffect(() => {
    const initPage = async () => {
      // const token = loadLocal('access_token');
      // const result = await retrieveArticles(token);
      // const articlesArr = articlesToArray(result);
      // setArticles(articlesArr);
      // saveArticles(articlesArr);
    }
    
    initPage();
  }, [])

  return (
    <Container>
      {articles?.map(article => {
        return (
         <CardArticle article={article} />
        )
      })}
    </Container>
  )
}
