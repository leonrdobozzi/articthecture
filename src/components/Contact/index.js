import React from 'react';

import { ContactWrapper } from './style';

function Contact() {
  return (
      <ContactWrapper>
          <section className="contact">
                  <h1>CONTACT</h1>
              <section className="about-contact">
                  <section className="web-contact">
                      <p>leonrdobozzi@gmail.com</p>
                      <p>(11)943582788</p>
                      <p>github.com/leonrdobozzi</p>
                  </section>
                  <section className="fisical-contact">
                      <p>Rua lorem ipsum, 123</p>
                      <p>Cidade, UF</p>
                      <p>Brasil</p>
                  </section>
              </section>
          </section>
      </ContactWrapper>
  );
}

export default Contact;