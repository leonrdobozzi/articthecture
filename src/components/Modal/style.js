import styled from 'styled-components';
import { motion } from "framer-motion";

export const ModalContainer = styled(motion.section).attrs(() => ({
    initial: 'invisible',
    variants: {
        invisible:{
            opacity: 0,
            x: '-100%',
            transition: {
                delay: 0,
                duration: 0.8
            }
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0,
                duration: 0.2
            }
        }
    }
}))`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #29292990;
    backdrop-filter: blur(15px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    @media (max-width: 837px){
        .modal{
            img{
                width: 150px;
            }
            h3{
                font-size: 24px;
            }
            p{
                font-size: 14px;
            }
        }
    }

    
`;

export const ModalContent = styled(motion.section).attrs(() => ({
    initial: 'invisible',
    variants: {
        invisible:{
            opacity: 0,
            y: -50,
            transition: {
                delay: 0.2,
                duration: 0.8
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
                duration: 0.8
            }
        }
    }
}))`
        width: 50%;
        background: #E5E5E5;
        height: 500px;
        padding: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        img{
            width: 200px;
            height: 200px;
        }
        h3{
            font-size: 36px;
            font-family: 'Poppins', sans-serif;
            font-weight: 200;
        }
        p{
            font-size: 16px;
            font-family: 'Poppins', sans-serif;
            font-weight: 200;
            text-align: center;
        }
        button{
            width: 250px;
            height: 40px;
            border: none;
            background: #292929;
            color: #fff;
            font-size: 16px;
            font-family: 'Poppins', sans-serif;
            font-weight: 200;
            margin: 15px 0;
            cursor: pointer;
            &:hover{
                filter: brightness(0.8)
            }
        }
        @media (max-width: 555px){
            width: 90%;
            img{
                width: 70%;
            }
            h3{
                font-size: 20px;
            }
            p{
                font-size: 12px;
            }
            button{
                width: 200px;
                height: 30px;
            }
        }
`