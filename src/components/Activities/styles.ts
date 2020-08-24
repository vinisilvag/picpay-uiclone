import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 24px;
  padding: 0 16px;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Right = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  margin-left: 16px;
`;

export const SubTitle = styled.Text`
  color: ${({ textColor }) => textColor };
  font-size: 16px;
  font-weight: bold;
`;

export const Underline = styled.View`
  width: 24px;
  height: 2px;
  background-color: #00ac4a;
  margin-top: 4px;
  border-radius: 8px;
`;

export const Card = styled.View`
  background-color: #1e222b;
  border-radius: 8px;
  margin-top: 20px;
  padding: 15px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  
`;

export const Description = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 15px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const CardBody = styled.View`
  margin-top: 16px;
`;

export const UserName = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const CardFooter = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: #f76175;
  font-size: 14px;
  font-weight: bold;
`;

export const Divider = styled.View`
  width: 2px;
  height: 16px;
  background-color: rgba(255, 255, 255, 0.4);
  margin: 0 8px;
`;

export const Date = styled.Text`
  margin-left: 4px;
  color: #fff;
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
  margin-left: 16px;
  flex-direction: row;
  align-items: center;
`;

export const OptionLabel = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  margin-left: 5px;
`;
