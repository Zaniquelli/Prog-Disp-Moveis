import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { styles } from './styles';

class App extends Component{

  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.title}>BOOTS</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.box}>
          <Image source={require('./imgs/boot1.png')} style={styles.imagem}/>
          <Text style={styles.nome}>AirMax EXECEE</Text>
          <Text style={styles.valor}>R$: 600,00</Text>
          </View>
          
          <View style={styles.box}>
          <Image source={require('./imgs/boot2.jpg')} style={styles.imagem}/>
          <Text style={styles.nome}>AirMax White LE</Text>
          <Text style={styles.valor}>R$: 500,00</Text>
          </View>
          
          <View style={styles.box}>
          <Image source={require('./imgs/boot3.png')} style={styles.imagem}/>
          <Text style={styles.nome}>AirMax Lemon Version</Text>
          <Text style={styles.valor}>R$: 450,00</Text>
          </View>
          <View style={styles.box}>
          <Image source={require('./imgs/boot4.png')} style={styles.imagem}/>
          <Text style={styles.nome}>AirMax EXECEE White Version</Text>
          <Text style={styles.valor}>R$: 600,00</Text>
          </View>

          <View style={styles.box}>
          <Image source={require('./imgs/boot5.jpg')} style={styles.imagem}/>
          <Text style={styles.nome}>Air Jordan Red</Text>
          <Text style={styles.valor}>R$: 350,00</Text>
          </View>

        </ScrollView>
      
      </View>
    )
  }
}

export default App;

