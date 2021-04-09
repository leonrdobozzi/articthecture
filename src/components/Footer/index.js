import React from 'react';

import { FooterWrapper } from './style';
import Logo from '../../assets/logo.svg'
import Linkedin from '../../assets/linkedin.svg';
import Instagram from '../../assets/instagram.svg';

function Footer() {
  return (
      <FooterWrapper>
          <section>
            <div>
                <img src={Logo} />
                <p>ART AND ARCHITECTURE</p>
            </div>
          </section>
          <section>
              <img src={Linkedin} />
              <img src={Instagram} />
          </section>
      </FooterWrapper>
  );
}

export default Footer;