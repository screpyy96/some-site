import styled from 'styled-components';
import hero from '../../assets/hero.jpg';

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 160vh;
  width: 100vw;
  background-image: url(${hero});
  background-position: center;
  background-size: cover;
  @media (max-width: 500px) {
    margin-top: -32px;
    display: block;
    width: 100%;
    height: 50vh;
    background-image: url(${hero});
  }
`;

export default HeroWrapper;
