import styled from 'styled-components';

export const FooterWrapper = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    section{
        height: 50vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        div{
            img{
                width: 280px;
                margin: 0;
            }
            p{
                font-family: 'Poppins', sans-serif;
                font-size: 24px;
                color: #292929;
            }
        }
        img{
            width: 50px;
            margin: 0 15px;
        }
    }
`;
