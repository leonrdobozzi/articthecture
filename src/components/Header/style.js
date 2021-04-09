import styled from 'styled-components';

export const HeaderRow = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
    height: 10vh;
    img{
        margin: 0 50px;
    }
    button{
        background: #292929;
        color: #fff;
        padding: 10px 20px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        outline: none;
        &:hover{
            filter: brightness(0.8);
        }
    }
    @media (max-width: 528px){
        img{
            width: 100px;
        }
        button{
            padding: 5px 10px;
        }
    }
    @media (max-width: 320px){
        justify-content: center;
        button{
            display: none;
        }
    }
`;
