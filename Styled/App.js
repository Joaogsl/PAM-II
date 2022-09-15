import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #1C1C1C;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-family: Lucida Console;
  margin-top:10px;
`;

const Image = styled.Image`
  width:25%;
  height: 40%;
  alignSelf: "center";
  border-radius: 20px;
  margin: 10px;
`;

const TextInput = styled.TextInput`
  text-align:center;
  height:50;
  width: 250;
  margin: 10px;
  border: 1px solid black;
  alignSelf: "center";
  border-radius: 10px;
  color= #fff;
`;

const Button = styled.Button`
  width:100%;
  height: 100%;
  alignSelf: "center";
`;

export default () => (
  <Container>
    <Title>Seja bem vindo ao código!</Title>
    <Image
          source={{
            uri:"https://blog.csptecnologia.com/wp-content/uploads/2021/03/AnyConv.com__coder-illustration.png",
          }}
        />
    <TextInput placeholder="Mande uma mensagem para mim!">
      </TextInput>
      <Button title="Salvar"
      />
    <Title>Obrigado por sua mensagem! Tenha um bom dia!</Title>
  </Container>
);