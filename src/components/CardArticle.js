import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  height: 250px;
  flex=1;
  margin: 10px;
  padding: 10px;
  backdrop-filter: blur(16px) saturate(180%);
    backdrop-filter: blur(20px) saturate(171%);
    -webkit-backdrop-filter: blur(20px) saturate(171%);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    `

Card.img = styled.img`
  width: 90%;
  height: 180px;
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