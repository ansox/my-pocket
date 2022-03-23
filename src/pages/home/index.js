import React from "react";
import CardArticle from "../../components/CardArticle";
import { retrieve } from "../../services/pocket";
import { loadLocal } from "../../services/storage";
import styled from "styled-components";
import { db } from "../../services/db";
import loadArticles from "../../services/loader";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #5061e3;
  background-image: 
    radial-gradient(at 4% 23%, hsl(162.00, 77%, 40%) 0, transparent 59%), 
    radial-gradient(at 82% 65%, hsl(198.00, 100%, 50%) 0, transparent 55%);
`;

export default function HomePage() {
  const [articles, setArticles] = React.useState([]);


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
      const articlesLoaded = await loadArticles()
      setArticles(articlesLoaded);
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
