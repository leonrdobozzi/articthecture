import React from 'react';

import { ModalContainer, ModalContent } from './style';
import Church from '../../assets/church.jpg';
import Palace from '../../assets/palace.jpg';
import Temple from '../../assets/temple.jpg';
import Tower from '../../assets/tower.jpg';

function Modal({image, title, content, visible, callback}) {
    return (
        <ModalContainer visible={visible} animate={visible ? 'visible' : 'invisible'}>
            <ModalContent animate={visible ? 'visible' : 'invisible'}>
                <img src={image} />
                <h3>{title}</h3>
                <p>{content}</p>
                <button 
                onClick={callback}
                >Close</button>
            </ModalContent>
      </ModalContainer>
  );
}

export default Modal;