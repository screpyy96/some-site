import React, { useState, useEffect } from 'react';
import info from '../../data/data.json';
import Hero from '../hero/hero';
import {
  Header,
  Paragraph,
  CardWrapper,
  Title,
  Image,
  Container,
} from './home.styled';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(info);
  }, [data]);

  return (
    <>
      <Hero />

      <Header>
        Reliable and efficient, with
        <span style={{ fontWeight: '600' }}> passion for cars.</span>
      </Header>
      <Container>
        {data.map((item) => (
          <CardWrapper key={item.id} color={item.color}>
            <Title>{item.title}</Title>
            <Paragraph>{item.description}</Paragraph>
            <Image src={item.image} />
          </CardWrapper>
        ))}
      </Container>
    </>
  );
};

export default Home;
