import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const useCadastro = () => {
  const [valores, setValores] = useState({
    nome: '',
    genero: '',
    dataNascimento: '',
    usuario: '',
    senha: '',
    email: '',
    confirmaEmail: '',
    cpf: '',
    idioma: '',
  });

  const handleChange = (campo, valor) => {
    setValores({
      ...valores,
      [campo]: valor,
    });
  };

  const handleCadastro = () => {
    console.log(valores); // Você pode fazer o que quiser com os dados aqui
  };

  return {
    valores,
    handleChange,
    handleCadastro,
  };
};

const App = () => {
  const { valores, handleChange, handleCadastro } = useCadastro();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={valores.nome}
        onChangeText={(text) => handleChange('nome', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Gênero"
        value={valores.genero}
        onChangeText={(text) => handleChange('genero', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={valores.dataNascimento}
        onChangeText={(text) => handleChange('dataNascimento', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={valores.usuario}
        onChangeText={(text) => handleChange('usuario', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={valores.senha}
        onChangeText={(text) => handleChange('senha', text)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={valores.email}
        onChangeText={(text) => handleChange('email', text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme seu E-mail"
        value={valores.confirmaEmail}
        onChangeText={(text) => handleChange('confirmaEmail', text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={valores.cpf}
        onChangeText={(text) => handleChange('cpf', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Idioma do Currículo"
        value={valores.idioma}
        onChangeText={(text) => handleChange('idioma', text)}
      />
      <Button title="CADASTRAR" onPress={handleCadastro} />

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{`Nome: ${valores.nome}`}</Text>
        <Text style={styles.resultText}>{`Gênero: ${valores.genero}`}</Text>
        <Text style={styles.resultText}>{`Data de Nascimento: ${valores.dataNascimento}`}</Text>
        <Text style={styles.resultText}>{`Usuário: ${valores.usuario}`}</Text>
        <Text style={styles.resultText}>{`Senha: ${valores.senha}`}</Text>
        <Text style={styles.resultText}>{`E-mail: ${valores.email}`}</Text>
        <Text style={styles.resultText}>{`Confirme seu E-mail: ${valores.confirmaEmail}`}</Text>
        <Text style={styles.resultText}>{`CPF: ${valores.cpf}`}</Text>
        <Text style={styles.resultText}>{`Idioma do Currículo: ${valores.idioma}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  resultContainer: {
    marginTop: 16,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default App;
