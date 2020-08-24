import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16,
  } 
}))`
  margin-top: 24px;
`;

export const Option = styled.TouchableOpacity`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 140px;
  height: 180px;
  border-radius: 8px;
  padding: 16px;
  justify-content: space-between;
  margin-right: 12px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Img = styled.Image`
  align-self: center;
`;
