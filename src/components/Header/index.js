import React from 'react';
import Logo from '../../assets/logo.svg';
import { HeaderRow } from  './style';
import { motion } from "framer-motion";

function Header() {
  return (
      <HeaderRow>
          <img src={Logo} />
          <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          >
            <button>CONTACT US</button>
          </motion.button>
      </HeaderRow>
  );
}

export default Header;