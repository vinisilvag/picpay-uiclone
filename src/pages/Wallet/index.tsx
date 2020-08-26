import React, { useState } from 'react';
import { Switch } from 'react-native';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

import {
  Wrapper,
  Container,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Image,
  AddButton,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel
} from './styles';

import creditCard from '../../assets/images/credit-card.png';

const Wallet: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }

  return (
    <Wrapper>
      <Container>
        <Header
          colors={
            useBalance
              ? ['#52e78c', '#1ab563']
              : ['#d3d3d3', '#868686']
          }
        >
          <HeaderContainer>
            <Title>Saldo PicPay</Title>

            <BalanceContainer>
              <Value>
                R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
              </Value>

              <EyeButton onPress={handleToggleVisibility}>
                <Feather name={isVisible ? 'eye' : 'eye-off'} size={24} color="#fff" />
              </EyeButton>
            </BalanceContainer>

            <Info>
              Seu saldo está rendendo 100% do CDI
          </Info>

            <Actions>
              <Action>
                <MaterialCommunityIcons name="cash" size={26} color="#fff" />
                <ActionLabel>Adicionar</ActionLabel>
              </Action>

              <Action>
                <FontAwesome name="bank" size={20} color="#fff" />
                <ActionLabel>Retirar</ActionLabel>
              </Action>
            </Actions>
          </HeaderContainer>
        </Header>

        <UseBalance>
          <UseBalanceTitle>
            Usar saldo ao pagar
        </UseBalanceTitle>

          <Switch
            value={useBalance}
            onValueChange={handleToggleUseBalance}
            trackColor={{ true: "#0db060", false: "grey" }}
            thumbColor={"#098549"}
          />
        </UseBalance>

        <PaymentMethods>
          <PaymentMethodsTitle>
            Forma de pagamento
        </PaymentMethodsTitle>

          <Card>
            <CardBody>
              <CardDetails>
                <CardTitle>
                  Cadastre seu cartão de crédito
            </CardTitle>

                <CardInfo>
                  Cadastre um cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay.
            </CardInfo>
              </CardDetails>

              <Image source={creditCard} resizeMode="contain" />
            </CardBody>

            <AddButton>
              <AntDesign name="pluscircleo" size={28} color="#0db060" />
              <AddLabel>Adicionar cartão de crédito</AddLabel>
            </AddButton>
          </Card>
        </PaymentMethods>

        <UseTicketContainer>
          <UseTicketButton>
            <MaterialCommunityIcons name="ticket-confirmation" size={24} color="#0db060" />
            <UseTicketLabel>
              Usar código promocional
        </UseTicketLabel>
          </UseTicketButton>
        </UseTicketContainer>
      </Container>
    </Wrapper>
  );
}

export default Wallet;