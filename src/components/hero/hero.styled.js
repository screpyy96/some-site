import styled from 'styled-components';
import hero from '../../assets/hero.jpg';

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100%;
  background-image: url(${hero});
  background-position: center;
  background-size: cover;

  @media (max-width: 500px) {
    margin-top: -32px;
    display: block;
    width: 100%;
    height: 60vh;
    background-image: url(${hero});
  }
`;

export default HeroWrapper;
