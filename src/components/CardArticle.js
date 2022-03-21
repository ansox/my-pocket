import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  height: 300px;
  flex=1;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, .7);
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
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