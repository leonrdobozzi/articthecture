import styled from 'styled-components';

export const AboutWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 36px;
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
        margin: 50px 0;
    }
    .about-minimun{
        background: #E5E5E5;
        width: 100%;
        div{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            background: #E5E5E5;
            flex-wrap: wrap;
            .minimalist{
                border-right: 1px solid #29292950;
            }
            .minimalist, .well-done{
                flex-direction: column;
                min-width: 300px;
                max-width: 500px;
                padding: 70px 0;
                h3{
                    font-size: 30px;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 400;
                }
                p{
                    font-size: 24px;
                    width: 300px;
                    font-family: 'Poppins', sans-serif;
                    text-align: center;
                    font-weight: 200;
                    margin: 20px 0;
                }
            }
        }
    }
    @media (max-width: 1017px){
        .about-minimun{
            div{
                .minimalist{
                    border-right: none;
                    margin: 20px 0;
                }
            }
        }
    }
    @media (max-width: 380px){
        h1{
            font-size: 20px;
        }
        .about-minimun{
            div{
                .minimalist, .well-done{
                    width: 250px;
                    h3{
                        font-size: 18px;
                        font-family: 'Poppins', sans-serif;
                        font-weight: 400;
                    }
                    p{
                        font-size: 16px;
                        width: 200px;
                    }
                }
            }
        }
    }
`;
