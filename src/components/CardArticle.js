import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion"

const variants = {
  closed: { scale: 1, height: "260px"},
  open: { scale: 1, height: "380px" }
}

const Card = styled(motion.div)`
  width: 300px;
  height: 260px;
  flex=1;
  margin: 10px;
  backdrop-filter: blur(16px) saturate(180%);
  backdrop-filter: blur(20px) saturate(171%);
  -webkit-backdrop-filter: blur(20px) saturate(171%);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  overflow: hidden;
`;

Card.Img = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover; 
`

Card.Body = styled.div`
  padding-left: 10px;
  padding-right: 10px;

`;

Card.Title = styled.h1`
  font-size: 1rem;
  height: 40px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

Card.ExcerptSection = styled.p`
  font-size: 1rem;
  height: 60px;
  overflow: hidden;
  width:100%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  p {
    margin: 0;
  }
`;

Card.LinkSection = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
`;


Card.Link = styled.a`
  text-decoration: none;
  color: #5061e3;
  font-weight: bold;
`

export default function CardArticle({article}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Card 
      onClick={() =>setIsOpen((open) => !open)} 
      animate={isOpen ? 'open' : 'closed'} 
      variants={variants}>
      
    
      <Card.Img src={article.top_image_url}></Card.Img>
      <Card.Body>
        <Card.Title>{article.resolved_title}</Card.Title>
        {
          isOpen &&
          <>
          <Card.ExcerptSection >
            <p>{article.excerpt}</p>
          </Card.ExcerptSection>
          <Card.LinkSection>
            <Card.Link href={article.given_url} onClick={(e) => {
              e.stopPropagation();
              // window.location.href =
            }} target="_blank" rel="noopener noreferrer">Read more</Card.Link>
          </Card.LinkSection>
          </>
        }

      </Card.Body>
    </Card>
  )
}