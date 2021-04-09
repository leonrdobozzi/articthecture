import React, { useState } from 'react';

import { ContainerMain, Gallery } from './style';
import Church from '../../assets/church.jpg';
import Palace from '../../assets/palace.jpg';
import Temple from '../../assets/temple.jpg';
import Tower from '../../assets/tower.jpg';

import { motion } from "framer-motion";
import Modal from '../Modal';


function Main() {
  const [modal, setModal] = useState({});
  const handleClick = (title, image, content) => {
    setModal({
      visible: true,
      title,
      image,
      content
    })
  }
  return (
    <ContainerMain>
      <h1>THE ART OF ARCHITECTURE</h1>
        <Modal 
        {...modal}
        callback={() => {
          setModal({...modal, visible: false});
        }}
        />     
        <Gallery>
          <div>
            <section>
              <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              >
                <img src={Tower}
                onClick={ () => handleClick('Tower', Tower, 'Tower of another place') }
                />
              </motion.div>
              <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              >
                <img src={Palace}
                onClick={ () => handleClick('Palace', Palace, 'Beautiful palace') }
                />
              </motion.div>
            </section>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              >
              <img src={Church}
              onClick={ () => handleClick('Church', Church, 'Church in the montain') }
              />
            </motion.div>
            <section>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={Temple}
              onClick={ () => handleClick('Temple', Temple, 'Asian temple') }
              />
            </motion.div>
            <a href="https://pixabay.com/pt/images/search/architecture/" target="_blank"><p>SEE MORE</p></a>
            </section>
          </div>

        </Gallery>
    </ContainerMain>
  );
}

export default Main;