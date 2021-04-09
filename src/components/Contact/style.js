import styled from 'styled-components';
import Bg from '../../assets/clean-construction.jpg';

export const ContactWrapper = styled.section`
    background: url(${Bg});
    background-size: cover;
    background-position: center bottom;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-attachment: fixed;
    .contact{
        background: #E5E5E580;
        width: 80vw;
        height: 80vh;
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        h1{
            font-family: 'Poppins', sans-serif;
            font-size: 36px;
            font-weight: 200;
        }
        .about-contact{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 80%;
            height: 80%;
            flex-wrap: wrap;
        }
        .web-contact{
            border-right: 1px solid #29292950;
        }
        .web-contact, .fisical-contact{
            width: 400px;
            display: flex;
            height: 50%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            p{
                font-family: 'Poppins', sans-serif;
                font-size: 24px;
                font-weight: 200;
            }
        }
    }
    @media (max-width: 1250px){
        .contact{
            .web-contact{
                border: none;
            }
        }
    }
    @media (max-width: 520px){
        .contact{
            h1{
                font-size: 24px;
            }
            .web-contact, .fisical-contact{
                width: 200px;
                p{
                    font-size: 16px;
                }
            }
        }
    }
`;
