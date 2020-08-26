import React from 'react';
import {
  Feather,
  MaterialCommunityIcons,
  AntDesign
} from '@expo/vector-icons';

import { 
  Container,
  Header,
  Title,
  Right,
  Button,
  SubTitle,
  Underline,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Divider,
  Value,
  Date,
  Actions,
  Option,
  OptionLabel
} from './styles';

import avatar from '../../assets/images/avatar.png';

const Activities: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
        <Right>
          <Button activeOpacity={0.4}>
            <SubTitle textColor="#fff">Todas</SubTitle>
          </Button>
          <Button activeOpacity={0.4}>
            <SubTitle textColor="#00ac4a">Minha</SubTitle>
            <Underline />
          </Button>
        </Right>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@vinisilvag</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Vinicius Gomes</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>
            <Divider />

            <Feather name="lock" color="#fff" size={14} />
            <Date>há 2 anos</Date>
          </Details>

          <Actions>
            <Option activeOpacity={0.4}> 
              <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option activeOpacity={0.4}>
              <AntDesign name="hearto" size={14} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}

export default Activities;