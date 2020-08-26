import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
  flex: 1;
  background-color: #000;
`;

export const Container = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))``;

export const Header = styled(LinearGradient)`
  height: 280px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  font-size: 40px;
  color: #fff;
  font-weight: 200;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  margin-left: 16px;
`;

export const Info = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
`;

export const Actions = styled.View`
  flex-direction: row;
  margin-top: 48px;
`;

export const Action = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  width: 140px;
  border-radius: 24px;
  height: 40px;
  margin: 0 10px;
`;

export const ActionLabel = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 10px;
`;

export const UseBalance = styled.View`
  background-color: #1c1c1e;
  height: 60px;
  flex-direction: row;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View`
  margin-top: 24px;
  padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: #8e8e93;
  text-transform: uppercase;
`;

export const Card = styled.View`
  background-color: #1e232a;
  padding: 20px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const CardBody = styled.View`
  flex-direction: row;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 24px;
`;

export const CardTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const CardInfo = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-top: 14px;
`;

export const Image = styled.Image`
  width: 60px;
`;

export const AddButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  flex-direction: row;
  align-items: center;
  margin-top: 24px;

`;

export const AddLabel = styled.Text`
  color: #0db060;
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`;

export const UseTicketContainer = styled.View`
  align-items: center;
  margin: 28px 0;
`;

export const UseTicketButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))`
  flex-direction: row;
  align-items: center;
`;

export const UseTicketLabel = styled.Text`
  color: #0db060;
  margin-left: 8px;
  font-weight: bold;
  text-decoration-line: underline;
`;
