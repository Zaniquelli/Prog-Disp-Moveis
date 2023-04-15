import React, { Component } from 'react';
import {View,Text,StyleSheet,Pressable,TextInput,Switch,TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: '',
      escolaridade: '',
      brasileiro: '',
      perfil: '',
    };

    this.cadastro = this.cadastro.bind(this);
}

 cadastro() {
    this.setState({ perfil: "Nome: " + this.state.nome + "\n" +
    "Idade: " + this.state.idade + "\n" +
    "Sexo: " + this.state.sexo  + "\n" +
    "Escolaridade: " + this.state.escolaridade  + "\n" +
    "Limite: " + this.state.limite + "\n" +
    "Brasileiro: " + ((this.state.brasileiro) ? "Brasileiro" : "Não Brasileiro")});

  }
   render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
      <Text style={styles.title}> Abertura de Conta </Text>

       <TextInput style={styles.input}
          onChangeText={ (text) => this.setState({nome: text})}
          placeholder= "Seu nome"
      />

       <TextInput style={styles.input}
          onChangeText={ (text) => this.setState({idade: text})}
          placeholder= "Sua idade"
      />

          <Picker style={styles.input}
          selectedValue = {this.state.sexo}    
          onValueChange={ (itemValue, itemIndex) => this.setState({sexo: itemValue}) }
          >
          <Picker.Item key={0} label="Sexo"/>
          <Picker.Item key={1} value="Feminino" label="Feminino"/>
          <Picker.Item key={2} value="Masculino" label="Masculino"/>
          </Picker>

          <Picker style={styles.input}
          selectedValue = {this.state.escolaridade}
          onValueChange={ (itemValue, itemIndex) => this.setState({escolaridade: itemValue}) }
          >
          <Picker.Item key={0} label="Escolaridade"/>
          <Picker.Item key={1} value="Médio - Completo" label="Médio - Completo"/>
          <Picker.Item key={2} value="Superior - Completo" label="Superior - Completo"/>
          </Picker>

          <Text style={styles.subTitulo}>Limite</Text>  
          <Slider 
            minimumValue={0}
            maximumValue={10000}
            value={this.state.limite}
            step={1}
            onValueChange={ (valorSelecionado) => this.setState({limite: valorSelecionado})}
            minimumTrackTintColor = '#28318B'
            //maximumTrackTintColor = "black"
            thumbTintColor='#28318B'
          />

          <Text style={styles.textoSlider}>{this.state.limite}</Text>  
          
          <View style={styles.posicaoSwitch}>
          <Text style={styles.subTitulo}>Brasileiro</Text>
          <Switch 
          trackColor={{false: 'grey', true: '#28318B'}} 
          thumbColor= '#28318B'
          value={this.state.brasileiro}
          onValueChange={ (valorSwitch) => this.setState({brasileiro: valorSwitch})}
          />
          
          </View>
          
      <Pressable style={styles.botao}
          onPress={() => this.cadastro()}>
          <Text style={styles.textoBotao}> Confirmar </Text>
          </Pressable>
          <Text style={styles.perfil}>{this.state.perfil} </Text>
      </View>
      </TouchableWithoutFeedback>

      
  
      );
  }
}
export default App;