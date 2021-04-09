import styled from 'styled-components';
import BgImg from '../../assets/bg.jpg';

export const ContainerHeader = styled.section`
  background: url(${BgImg});
  background-position: bottom;
  background-size: 50%;
  background-repeat: no-repeat;
  height: 85vh;
  display: flex; 
  align-items: flex-start;
  justify-content: center;
  h1{
    font-family: 'Poppins', sans-serif;
    font-size: 36px;
    font-weight: 200;
  }
  @media (max-width: 885px){
    background-size: 80%;
    h1{
        font-size: 24px;
    }
  }
  @media (max-width: 528px){
    background-size: 100%;
    align-items: center;
    h1{
        font-size: 18px;
        width: 250px;
        text-align: center;
    }
    }
`;
