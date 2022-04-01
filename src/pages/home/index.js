import React from "react";
import CardArticle from "../../components/CardArticle";
import styled from "styled-components";
import loadArticles from "../../services/loader";
import InfiniteScroll from 'react-infinite-scroll-component';

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
  const [hasMore, setHasMore] = React.useState(true);
  const [visibleArticles, setVisibleArticles] = React.useState([]);
  const [page, setPage] = React.useState(1);

  const FETCH_SIZE = 20;

  const fetchData = () => {
    const nextPage = page + 1;
    const start = (FETCH_SIZE * nextPage) - 1;
    const end = start + FETCH_SIZE;
    const visibles = [...visibleArticles, ...articles.slice(start, end)];

    setVisibleArticles(visibles);
    setPage(nextPage);  
  }

  React.useEffect(() => {
    const initPage = async () => {
      const articlesLoaded = await loadArticles()
      const visibles = articlesLoaded.slice(0, FETCH_SIZE);

      setArticles(articlesLoaded);
      setVisibleArticles(visibles);
    }
    
    initPage();
  }, [])

  return (
    <Container>
      <InfiniteScroll
        dataLength={visibleArticles.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {visibleArticles?.map((article, index) => {
          return (
          <CardArticle key={`article${index}`} article={article} />
          )
        })}
      </InfiniteScroll>
    </Container>
  )
}
