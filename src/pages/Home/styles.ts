import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
`;

export const Container = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))``;

export const Header = styled.View`
  height: 60px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BalanceContainer = styled.View`
  margin-left: 38px;
`;

export const BalanceTitle = styled.Text`
  color: 'rgba(255, 255, 255, 0.8)';
  font-size: 14px;
  text-align: center;
`;

export const Balance = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const Details = styled.View`
  flex-direction: row;
`;

export const DetailWrapper = styled.View`
  margin-right: 12px;
`;
