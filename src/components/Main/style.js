import styled from 'styled-components';

export const ContainerMain = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-family: 'Poppins', sans-serif;
        font-size: 36px;
        font-weight: 200;
        margin: 25px 0;
    }
    @media (max-width: 528px){
        h1{
            font-size: 24px
        }
    }
`;

export const Gallery = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex-wrap: wrap;
        img{
            width: 250px;
            height: 100%;
        }
        section{
            display: flex;
            flex-direction: column;
            div{
                height: 100%;
            }
            img{
                width: 250px;
                height: 50%; 
            }
            a{
                text-decoration: none;
                color: #292929;
                p{
                    height: 148px;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 26px;
                    font-family: 'Poppins', sans-serif;
                    transition: .6s ease-in-out;
                    &:hover{
                        letter-spacing: 5px;
                    }
                }
            }
        }
    }
    
`