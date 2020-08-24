import React from 'react';

import { Container, Option, Title, Img } from './styles';

import img8 from '../../assets/images/08.png';
import img9 from '../../assets/images/09.png';
import img10 from '../../assets/images/10.png';
import img11 from '../../assets/images/11.png';
import img12 from '../../assets/images/12.png';

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: 'Pague suas contas sem sair de casa',
    backgroundColor: '#172c4a'
  },

  {
    key: String(Math.random()),
    img: img9,
    title: 'Pague suas contas sem sair de casa',
    backgroundColor: '#6a0159'
  },

  {
    key: String(Math.random()),
    img: img10,
    title: 'Pague suas contas sem sair de casa',
    backgroundColor: '#4139c8'
  },

  {
    key: String(Math.random()),
    img: img11,
    title: 'Pague suas contas sem sair de casa',
    backgroundColor: '#00ab4b'
  },

  {
    key: String(Math.random()),
    img: img12,
    title: 'Pague suas contas sem sair de casa',
    backgroundColor: '#ba2f76'
  },
]

const Tips: React.FC = () => {
  return (
    <Container>
      {items.map(item => (
        <Option key={item.key} backgroundColor={item.backgroundColor} activeOpacity={0.6}>
          <Title>{item.title}</Title>
          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
}

export default Tips;