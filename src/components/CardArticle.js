import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  height: 300px;
  flex=1;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
`

Card.img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  
`


export default function CardArticle({article}) {
  return (
    <Card>
      <p>{article.resolved_title}</p>
      <Card.img src={article.top_image_url}></Card.img>
    </Card>
  )
}